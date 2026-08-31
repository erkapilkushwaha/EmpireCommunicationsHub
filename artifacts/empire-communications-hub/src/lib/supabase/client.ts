import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client for use in Client Components (runs in the browser).
 *
 * Deliberately untyped against a generated `Database` schema: this project
 * uses its own hand-written interfaces (see lib/types.ts) and casts query
 * results to them at each call site, rather than maintaining a duplicate
 * generic schema. Run `supabase gen types typescript` against the project if
 * you'd like full end-to-end inference instead.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
