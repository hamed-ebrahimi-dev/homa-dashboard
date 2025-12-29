import { LoginForm } from "@/src/feature/auth/login/components";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full bg-white" dir="rtl">
      <div className="flex-1 flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </div>
  );
}
