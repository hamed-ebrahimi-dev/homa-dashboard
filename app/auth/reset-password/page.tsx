import { ResetPasswordForm } from "@/src/feature/auth/reset-password/components";

export default function ResetPasswordPage() {
  return (
    <div className="flex h-screen w-full" dir="rtl">
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
