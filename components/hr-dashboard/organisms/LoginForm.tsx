"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormInput } from "../molecules/FormInput";
import { Logo } from "../atoms/Logo";

interface LoginFormProps {
  onSubmit?: (email: string, password: string, rememberMe: boolean) => void;
  onForgotPassword?: () => void;
}

export function LoginForm({ onSubmit, onForgotPassword }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email, password, rememberMe);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-[440px]" dir="rtl">
      <Logo className="mb-4" />
      
      <h1 className="text-2xl font-semibold text-center">ورود به سامانه</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-6">
          <FormInput
            id="email"
            label="ایمیل"
            placeholder="ایمیل سازمانی خود را وارد کنید"
            type="email"
            required
            value={email}
            onChange={setEmail}
          />
          
          <div className="flex flex-col gap-4">
            <FormInput
              id="password"
              label="رمز عبور"
              placeholder="رمز عبور خود را وارد کنید"
              type="password"
              required
              value={password}
              onChange={setPassword}
            />
            
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-sm text-primary hover:underline"
              >
                فراموشی رمز؟
              </button>
              
              <div className="flex items-center gap-3">
                <label htmlFor="remember" className="text-sm cursor-pointer">
                  مرا به خاطر بسپار
                </label>
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <Button type="submit" className="h-10 w-full bg-[#4464D1] hover:bg-[#3a56b8]">
          ورود
        </Button>
      </form>
    </div>
  );
}
