"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { RoutingDiagram } from "@/components/home/RoutingDiagram";
import type { Role } from "@/lib/types";

const inputClasses =
  "mt-1.5 w-full rounded-sm border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring";

const panelCopy: Record<Role, { eyebrow: string; heading: string; body: string }> = {
  employee: {
    eyebrow: "Employee Workspace",
    heading: "Your work, organized in one place.",
    body: "Leads, attendance, leave and goals — everything you need for the day, in one login.",
  },
  admin: {
    eyebrow: "Admin Dashboard",
    heading: "Run the whole operation from here.",
    body: "Enquiries, jobs, employees and content — the full control center for Empire Communications Hub.",
  },
};

export function LoginForm({ requiredRole, redirectTo, title }: { requiredRole: Role; redirectTo: string; title: string }) {
  const router = useRouter();
  const [mode, setMode] = useState<"sign-in" | "forgot">("sign-in");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const copy = panelCopy[requiredRole];

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

  async function handleForgotPassword(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "");
    const supabase = createClient();

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);
    if (resetError) {
      setError("Couldn't send the reset email. Double-check the address and try again.");
      return;
    }
    setResetSent(true);
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Branded panel — hidden on small screens, this is where the visual
          identity carries over from the public site into the product itself. */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-navy p-12 text-paper lg:flex">
        <Logo dark />
        <div className="flex justify-center opacity-90">
          <RoutingDiagram />
        </div>
        <div className="max-w-sm">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">{copy.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl font-bold">{copy.heading}</h2>
          <p className="mt-2 text-sm text-paper/70">{copy.body}</p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-paper px-6 py-16">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex justify-center lg:hidden">
            <Logo />
          </div>

          {mode === "sign-in" ? (
            <>
              <h1 className="font-display text-2xl font-bold text-navy">{title}</h1>
              <p className="mt-1 text-sm text-slate">Sign in to continue.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="text-sm font-medium text-navy" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-navy" htmlFor="password">Password</label>
                    <button
                      type="button"
                      onClick={() => setMode("forgot")}
                      className="font-mono text-xs uppercase tracking-wide text-hub hover:text-navy focus-ring"
                    >
                      Forgot?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="current-password"
                      className={`${inputClasses} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate hover:text-navy focus-ring"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="flex items-start gap-2 border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full" loading={loading}>
                  {loading ? "Signing in…" : "Sign In"}
                </Button>
              </form>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setMode("sign-in");
                  setError("");
                  setResetSent(false);
                }}
                className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-slate hover:text-navy focus-ring"
              >
                <ArrowLeft size={14} /> Back to sign in
              </button>

              <h1 className="mt-4 font-display text-2xl font-bold text-navy">Reset your password</h1>
              <p className="mt-1 text-sm text-slate">We'll email you a link to set a new one.</p>

              {resetSent ? (
                <div className="mt-6 flex items-start gap-2 border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-700">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  <span>Check your inbox for a password reset link.</span>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className="mt-8 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-navy" htmlFor="reset-email">Email</label>
                    <input id="reset-email" name="email" type="email" required autoComplete="email" className={inputClasses} />
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full" loading={loading}>
                    {loading ? "Sending…" : "Send Reset Link"}
                  </Button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}