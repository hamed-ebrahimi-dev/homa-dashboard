"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormLabelProps {
  children: React.ReactNode;
  required?: boolean;
  className?: string;
  htmlFor?: string;
}

export function FormLabel({ children, required = false, className, htmlFor }: FormLabelProps) {
  return (
    <div className={cn("flex items-center gap-1 justify-end", className)}>
      {required && <span className="text-red-500 text-sm">*</span>}
      <Label htmlFor={htmlFor} className="text-base font-normal">
        {children}
      </Label>
    </div>
  );
}
