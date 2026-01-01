import { IcLogo } from "@/public/assets/icons";
import { ForgetPasswordForm } from "@/src/feature/auth/forget-password/components/form";

const ForgetPasswordPage = () => {
  return (
    <div className="flex h-screen w-full" dir="rtl">
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="flex flex-col w-full max-w-110">
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
          </div>

          <ForgetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
