import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Keeps the Supabase session cookie fresh on every request and redirects
// signed-out visitors away from /employee and /admin for a smooth experience.
//
// This is a UX convenience only, not the security boundary: the real access
// control lives in each area's layout.tsx (which re-checks the session and
// role server-side before rendering anything) and in Postgres Row-Level
// Security (which enforces access at the data layer regardless of what any
// request-time check does). That defense-in-depth is deliberate — proxy-only
// auth checks have historically been bypassable, so nothing here is trusted
// on its own.
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request: { headers: request.headers } });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request: { headers: request.headers } });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const isEmployeeArea = path.startsWith("/employee") && path !== "/employee/login";
  const isAdminArea = path.startsWith("/admin") && path !== "/admin/login";

  if ((isEmployeeArea || isAdminArea) && !user) {
    const url = request.nextUrl.clone();
    url.pathname = isAdminArea ? "/admin/login" : "/employee/login";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ["/employee/:path*", "/admin/:path*"],
};
