"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordFormData, resetPasswordSchema } from "../utils/validation";
import { useMutation } from "@tanstack/react-query";
import { resetPasswordApi } from "../api/resetPasswordApi";
import { Button } from "@/src/base/components/ui";
import { FormInput } from "@/src/feature/auth/login/components/FormInput";
import { IcLogo } from "@/public/assets/icons";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function ResetPasswordForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: () => {
      toast.success("رمز عبور با موفقیت تغییر یافت");
      router.push("/auth/login");
    },
    onError: (error) => {
      toast.error(error.message || "خطا در تغییر رمز عبور");
    },
  });

  const onFormSubmit = (data: ResetPasswordFormData) => {
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
          <h1 className="text-3xl font-bold text-gray-900">تغییر رمز عبور</h1>
          <p className="text-gray-500">رمز عبور جدید خود را وارد کنید</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-6 w-full">
        <FormInput
          id="password"
          label="رمز عبور جدید"
          placeholder="رمز عبور جدید خود را وارد کنید"
          type="password"
          required
          error={errors.password?.message}
          {...register("password")}
        />

        <FormInput
          id="confirmPassword"
          label="تکرار رمز عبور جدید"
          placeholder="رمز عبور خود را مجدداً وارد کنید"
          type="password"
          required
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <Button
          type="submit"
          loading={isPending}
          className="h-12 w-full bg-primary hover:bg-primary-600 text-white font-medium rounded-xl shadow-sm transition-all"
        >
          تغییر رمز عبور
        </Button>
      </form>
    </div>
  );
}
