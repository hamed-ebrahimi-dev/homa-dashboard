"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgetPasswordValidation, ForgetPasswordValidationType } from "../utils/validation";
import { FormInput } from "@/src/feature/auth/login/components/FormInput";
import { Button } from "@/src/base/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { forgetPasswordApi } from "../api/forgetPasswordApi";
import { toast } from "sonner";

export const ForgetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordValidationType>({
    resolver: zodResolver(forgetPasswordValidation),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: forgetPasswordApi,
    onSuccess: () => {
      toast.success("لینک بازیابی رمز عبور به ایمیل شما ارسال شد");
    },
    onError: (error) => {
      toast.error(error.message || "خطا در ارسال لینک بازیابی");
    },
  });

  const onSubmit = (data: ForgetPasswordValidationType) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col w-full max-w-110" dir="rtl">
      <div className="mb-8">
        <Link
          href="/auth/login"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          بازگشت به صفحه ورود
        </Link>
      </div>

      <div className="text-center space-y-3 mb-8">
        <h1 className="text-2xl font-bold text-gray-900">فراموشی رمز عبور</h1>
        <p className="text-gray-500 text-sm">
          ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال شود
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
        <FormInput
          id="email"
          label="ایمیل"
          placeholder="example@company.com"
          type="email"
          required
          error={errors.email?.message}
          {...register("email")}
        />

        <Button
          type="submit"
          loading={isPending}
          className="h-12 w-full bg-primary hover:bg-primary-600 text-white font-medium rounded-xl shadow-sm transition-all"
        >
          ارسال لینک بازیابی
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          رمز عبور خود را به خاطر آوردید؟{" "}
          <Link
            href="/auth/login"
            className="text-primary font-medium hover:text-primary-700 transition-colors"
          >
            ورود به سامانه
          </Link>
        </p>
      </div>
    </div>
  );
};
