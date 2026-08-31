import { createClient } from "@/lib/supabase/server";
import { PageHeading } from "@/components/dashboard/StatCard";
import { ProfileForm } from "@/components/employee/ProfileForm";
import type { Profile } from "@/lib/types";

export default async function EmployeeProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user?.id).single();

  if (!profile) {
    return (
      <div>
        <PageHeading title="Profile" />
        <p className="text-slate">We couldn&apos;t load your profile — please try refreshing.</p>
      </div>
    );
  }

  return (
    <div>
      <PageHeading title="Profile" />
      <ProfileForm profile={profile as unknown as Profile} email={user?.email} />
    </div>
  );
}
