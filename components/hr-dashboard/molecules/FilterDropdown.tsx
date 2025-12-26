"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  placeholder?: string;
  options: FilterOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function FilterDropdown({
  placeholder = "انتخاب کنید",
  options,
  value,
  onChange,
  className,
}: FilterDropdownProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={className} dir="rtl">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent dir="rtl">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
