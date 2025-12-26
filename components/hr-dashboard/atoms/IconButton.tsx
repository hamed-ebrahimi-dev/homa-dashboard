"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  badge?: number;
}

export function IconButton({
  icon: Icon,
  onClick,
  className,
  variant = "ghost",
  size = "icon",
  badge,
}: IconButtonProps) {
  return (
    <Button variant={variant} size={size} onClick={onClick} className={cn("relative", className)}>
      <Icon className="h-5 w-5" />
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
          {badge > 9 ? "9+" : badge}
        </span>
      )}
    </Button>
  );
}
