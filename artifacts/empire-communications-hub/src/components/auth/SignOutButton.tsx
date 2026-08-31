"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function SignOutButton({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper/60 hover:text-cyan focus-ring"
    >
      <LogOut size={14} /> Sign Out
    </button>
  );
}
