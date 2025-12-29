"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Checkbox } from "@/src/base/components/ui";
import { FormInput } from "./FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "../utils/validation";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/loginApi";

export function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  const onFormSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-[440px]" dir="rtl">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-white font-bold text-xl">H</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-primary text-xl">Homa | هُما</span>
          <span className="text-xs text-muted-foreground">مدیریت منابع انسانی</span>
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center">ورود به سامانه</h1>

      {error && (
        <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
          {error.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-6">
          <FormInput
            id="email"
            label="ایمیل"
            placeholder="ایمیل سازمانی خود را وارد کنید"
            type="email"
            required
            error={errors.email?.message}
            {...register("email")}
          />

          <div className="flex flex-col gap-4">
            <FormInput
              id="password"
              label="رمز عبور"
              placeholder="رمز عبور خود را وارد کنید"
              type="password"
              required
              error={errors.password?.message}
              {...register("password")}
            />

            <div className="flex items-center justify-between">
              <button type="button" className="text-sm text-primary hover:underline">
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

        <Button
          type="submit"
          loading={isPending}
          className="h-10 w-full bg-[#4464D1] hover:bg-[#3a56b8]"
        >
          ورود
        </Button>
      </form>
    </div>
  );
}
