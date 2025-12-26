"use client";

import { Button } from "@/components/ui/button";
import { SearchInput } from "../atoms";
import { FilterDropdown } from "../molecules";
import { Plus, Download, Upload, SlidersHorizontal } from "lucide-react";

interface EmployeesToolbarProps {
  onSearch?: (value: string) => void;
  onAddEmployee?: () => void;
  onExport?: () => void;
  onImport?: () => void;
  onDepartmentChange?: (value: string) => void;
  onStatusChange?: (value: string) => void;
}

const departments = [
  { value: "all", label: "همه دپارتمان‌ها" },
  { value: "engineering", label: "مهندسی" },
  { value: "design", label: "طراحی" },
  { value: "marketing", label: "بازاریابی" },
  { value: "hr", label: "منابع انسانی" },
  { value: "finance", label: "مالی" },
];

const statuses = [
  { value: "all", label: "همه وضعیت‌ها" },
  { value: "active", label: "فعال" },
  { value: "inactive", label: "غیرفعال" },
  { value: "on-leave", label: "مرخصی" },
];

export function EmployeesToolbar({
  onSearch,
  onAddEmployee,
  onExport,
  onImport,
  onDepartmentChange,
  onStatusChange,
}: EmployeesToolbarProps) {
  return (
    <div className="flex flex-col gap-4" dir="rtl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">کارمندان</h1>
          <p className="text-sm text-muted-foreground">مدیریت و مشاهده اطلاعات کارمندان</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onImport}>
            <Upload className="h-4 w-4 ml-2" />
            ورود داده
          </Button>
          <Button variant="outline" size="sm" onClick={onExport}>
            <Download className="h-4 w-4 ml-2" />
            خروجی
          </Button>
          <Button size="sm" onClick={onAddEmployee}>
            <Plus className="h-4 w-4 ml-2" />
            افزودن کارمند
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <SearchInput
          placeholder="جستجوی نام، ایمیل، شماره کارمندی..."
          onChange={onSearch}
          className="w-80"
        />
        <FilterDropdown
          placeholder="دپارتمان"
          options={departments}
          onChange={onDepartmentChange}
          className="w-40"
        />
        <FilterDropdown
          placeholder="وضعیت"
          options={statuses}
          onChange={onStatusChange}
          className="w-32"
        />
        <Button variant="outline" size="icon">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
