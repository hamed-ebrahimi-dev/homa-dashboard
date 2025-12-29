"use client";

import { forwardRef } from "react";
import { Input, Label } from "@/src/base/components/ui";
import { cn } from "@/src/base/utils/cn";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, required = false, error, className, id, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1 w-full", className)} dir="rtl">
        <div className="flex items-center gap-1 justify-end">
          {required && <span className="text-red-500 text-sm">*</span>}
          <Label htmlFor={id} className="text-base font-normal">
            {label}
          </Label>
        </div>
        <Input
          ref={ref}
          id={id}
          className={cn("h-12 text-right pr-4", error && "border-red-500")}
          dir="rtl"
          {...props}
        />
        {error && <p className="text-sm text-red-500 text-right">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
