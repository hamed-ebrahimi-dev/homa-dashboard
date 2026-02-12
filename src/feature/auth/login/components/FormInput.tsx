"use client";

import { forwardRef } from "react";
import { Input, Label } from "@/src/base/components/ui";
import { cn } from "@/lib/utils/cn";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, required = false, error, className, id, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-2 w-full", className)} dir="rtl">
        <div className="flex items-center gap-1 justify-start">
          {required && <span className="text-error-500 text-sm font-medium">*</span>}
          <Label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
          </Label>
        </div>
        <Input
          ref={ref}
          id={id}
          className={cn(
            "h-12 text-right pr-4 rounded-xl border-gray-200 focus:border-primary focus:ring-primary",
            error && "border-error-500 focus:border-error-500 focus:ring-error-500"
          )}
          dir="rtl"
          {...props}
        />
        {error && <p className="text-sm text-error-500 text-right">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
