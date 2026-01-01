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
import { IcLogo } from "@/public/assets/icons";

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
    <div className="flex flex-col w-full max-w-110" dir="rtl">
      <div className="flex flex-col items-center gap-6 mb-10">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center shadow-sm">
            <IcLogo className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900 text-2xl">Homa | هُما</span>
            <span className="text-sm text-gray-500">سامانه مدیریت منابع انسانی</span>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">خوش آمدید</h1>
          <p className="text-gray-500">برای ادامه وارد حساب کاربری خود شوید</p>
        </div>
      </div>

      {error && (
        <div className="w-full p-4 mb-6 bg-error-50 border border-error-300 rounded-xl text-error-700 text-sm text-center">
          {error.message}
        </div>
      )}
      <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-6 w-full">
        <FormInput
          id="email"
          label="ایمیل"
          placeholder="example@company.com"
          type="email"
          required
          error={errors.email?.message}
          {...register("email")}
        />

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
          <button
            type="button"
            className="text-sm text-primary font-medium hover:text-primary-700 transition-colors"
          >
            فراموشی رمز عبور؟
          </button>

          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <label htmlFor="remember" className="text-sm text-gray-700 cursor-pointer select-none">
              مرا به خاطر بسپار
            </label>
          </div>
        </div>

        <Button
          type="submit"
          loading={isPending}
          className="h-12 w-full bg-primary hover:bg-primary-600 text-white font-medium rounded-xl shadow-sm transition-all"
        >
          ورود به سامانه
        </Button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          حساب کاربری ندارید؟{" "}
          <button
            type="button"
            className="text-primary font-medium hover:text-primary-700 transition-colors"
          >
            ثبت نام کنید
          </button>
        </p>
      </div>
    </div>
  );
}
