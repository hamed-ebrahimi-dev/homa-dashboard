"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  collapsed?: boolean;
  className?: string;
}

export function Logo({ collapsed = false, className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} dir="rtl">
      <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
        <span className="text-white font-bold text-lg">H</span>
      </div>
      {!collapsed && (
        <div className="flex flex-col">
          <span className="font-semibold text-primary text-lg leading-tight">Homa | هُما</span>
          <span className="text-xs text-muted-foreground">مدیریت منابع انسانی</span>
        </div>
      )}
    </div>
  );
}
