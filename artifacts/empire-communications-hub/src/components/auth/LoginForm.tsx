"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import type { Role } from "@/lib/types";

const inputClasses =
  "mt-1.5 w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring focus:border-hub";

export function LoginForm({ requiredRole, redirectTo, title }: { requiredRole: Role; redirectTo: string; title: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = new FormData(e.currentTarget);
    const supabase = createClient();

    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email: String(data.get("email") ?? ""),
      password: String(data.get("password") ?? ""),
    });

    if (signInError || !signInData.user) {
      setError("Incorrect email or password.");
      setLoading(false);
      return;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", signInData.user.id)
      .single();

    if ((profile as { role?: Role } | null)?.role !== requiredRole) {
      await supabase.auth.signOut();
      setError(`This login is for ${requiredRole} accounts only.`);
      setLoading(false);
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <h1 className="text-center font-display text-2xl font-bold text-navy">{title}</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className={inputClasses} />
          </div>
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required className={inputClasses} />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
