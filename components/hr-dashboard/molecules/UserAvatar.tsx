"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  name: string;
  image?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export function UserAvatar({ name, image, size = "md", className }: UserAvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <Avatar className={cn(sizeClasses[size], className)}>
      <AvatarImage src={image} alt={name} />
      <AvatarFallback className="bg-primary/10 text-primary font-medium">{initials}</AvatarFallback>
    </Avatar>
  );
}
