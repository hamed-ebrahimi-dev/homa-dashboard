"use client";

import Image from "next/image";
import { LoginForm } from "../organisms/LoginForm";

interface LoginPageTemplateProps {
  onSubmit?: (email: string, password: string, rememberMe: boolean) => void;
  onForgotPassword?: () => void;
}

export function LoginPageTemplate({ onSubmit, onForgotPassword }: LoginPageTemplateProps) {
  return (
    <div className="flex h-screen w-full bg-white" dir="rtl">
      {/* Login Form Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <LoginForm onSubmit={onSubmit} onForgotPassword={onForgotPassword} />
      </div>
      
      {/* Illustration Section */}
      <div className="hidden lg:block w-[675px] p-8">
        <div className="relative h-full w-full rounded-2xl overflow-hidden bg-[#4464D1]">
          <Image
            src="/assets/image/interview section.png"
            alt="HR Management Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
