"use client";

import { useRouter } from "next/navigation";
import { LoginPageTemplate } from "../templates/LoginPageTemplate";

export function LoginPage() {
  const router = useRouter();

  const handleSubmit = (email: string, password: string, rememberMe: boolean) => {
    console.log("Login:", { email, password, rememberMe });
    // TODO: Implement actual login logic
    router.push("/dashboard/employees");
  };

  const handleForgotPassword = () => {
    router.push("/auth/forgot-password");
  };

  return (
    <LoginPageTemplate
      onSubmit={handleSubmit}
      onForgotPassword={handleForgotPassword}
    />
  );
}
