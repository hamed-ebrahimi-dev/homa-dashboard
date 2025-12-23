"use client";

import { UserAvatar } from "./UserAvatar";

interface EmployeeCellProps {
  name: string;
  image?: string;
  subtitle?: string;
}

export function EmployeeCell({ name, image, subtitle }: EmployeeCellProps) {
  return (
    <div className="flex items-center gap-3" dir="rtl">
      <UserAvatar name={name} image={image} size="sm" />
      <div className="flex flex-col">
        <span className="font-medium text-sm">{name}</span>
        {subtitle && <span className="text-xs text-muted-foreground">{subtitle}</span>}
      </div>
    </div>
  );
}
