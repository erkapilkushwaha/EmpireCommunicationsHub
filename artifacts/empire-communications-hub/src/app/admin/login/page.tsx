import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Admin Login" };

export default function AdminLoginPage() {
  return <LoginForm requiredRole="admin" redirectTo="/admin" title="Admin Login" />;
}
