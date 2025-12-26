"use client";

import { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { FormLabel } from "../atoms/FormLabel";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, required = false, error, className, id, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1 w-full", className)} dir="rtl">
        <FormLabel required={required} htmlFor={id}>
          {label}
        </FormLabel>
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
