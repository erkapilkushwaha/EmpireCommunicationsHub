import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Employee Login" };

export default function EmployeeLoginPage() {
  return <LoginForm requiredRole="employee" redirectTo="/employee" title="Employee Login" />;
}
