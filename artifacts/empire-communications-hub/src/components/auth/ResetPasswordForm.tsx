"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const inputClasses =
  "mt-1.5 w-full rounded-sm border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring";

export function ResetPasswordForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = new FormData(e.currentTarget);
    const password = String(data.get("password") ?? "");
    const confirm = String(data.get("confirm") ?? "");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      setLoading(false);
      return;
    }

    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    setLoading(false);
    if (updateError) {
      setError("That link may have expired. Request a new reset email and try again.");
      return;
    }
    setDone(true);
    setTimeout(() => router.push("/"), 2500);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        {done ? (
          <div className="flex items-start gap-2 border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-700">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>Password updated — redirecting you now.</span>
          </div>
        ) : (
          <>
            <h1 className="text-center font-display text-2xl font-bold text-navy">Set a new password</h1>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="text-sm font-medium text-navy" htmlFor="password">New password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
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
              <div>
                <label className="text-sm font-medium text-navy" htmlFor="confirm">Confirm password</label>
                <input
                  id="confirm"
                  name="confirm"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  className={inputClasses}
                />
              </div>

              {error && (
                <div className="flex items-start gap-2 border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full" loading={loading}>
                {loading ? "Saving…" : "Update Password"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}