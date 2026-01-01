import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full max-w-360 mx-auto">
      <div className="hidden lg:flex flex-1 bg-linear-to-br from-primary-500 to-primary-700 items-center justify-center p-12">
        <div className="max-w-lg text-white space-y-6">
          <Image
            src="/assets/image/interview section.png"
            alt="interview"
            width={490}
            height={500}
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8 bg-white">{children}</div>
    </div>
  );
}
