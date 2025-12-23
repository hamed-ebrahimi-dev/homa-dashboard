"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusType = "active" | "inactive" | "on-leave";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  active: {
    label: "فعال",
    className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  },
  inactive: {
    label: "غیرفعال",
    className: "bg-red-100 text-red-700 hover:bg-red-100",
  },
  "on-leave": {
    label: "مرخصی",
    className: "bg-amber-100 text-amber-700 hover:bg-amber-100",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <Badge variant="secondary" className={cn("font-medium", config.className, className)}>
      {config.label}
    </Badge>
  );
}
