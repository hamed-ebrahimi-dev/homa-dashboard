"use client";

import { Input } from "@/components/ui/input";
import { FormLabel } from "../atoms/FormLabel";
import { cn } from "@/lib/utils";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  id?: string;
}

export function FormInput({
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
  className,
  id,
}: FormInputProps) {
  return (
    <div className={cn("flex flex-col gap-1 w-full", className)} dir="rtl">
      <FormLabel required={required} htmlFor={id}>
        {label}
      </FormLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="h-12 text-right pr-4"
        dir="rtl"
      />
    </div>
  );
}
