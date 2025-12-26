"use client";

import Image from "next/image";
import { LoginForm } from "../organisms/LoginForm";

export function LoginPageTemplate() {
  return (
    <div className="flex h-screen w-full bg-white max-w-screen-2xl mx-auto">
      <div className="hidden lg:block w-[675px] p-8">
        <div className="relative h-full w-full flex items-center justify-center rounded-2xl overflow-hidden bg-[#4464D1]">
          <Image
            src="/assets/image/interview section.png"
            alt="HR Management Illustration"
            width={491}
            height={500}
            priority
            quality={100}
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </div>
  );
}
