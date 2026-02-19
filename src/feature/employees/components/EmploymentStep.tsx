"use client";

import { useFormContext } from "react-hook-form";
import { AddEmployeeFormData } from "../schemas/addEmployeeSchema";
import { Input } from "@/src/base/components/ui/input";
import { Label } from "@/src/base/components/ui/label";

export const EmploymentStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddEmployeeFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-[20px] font-semibold text-[#1A1D1F] text-right">سوابق شغلی</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="department" className="text-right text-[14px] text-[#6F767E]">
            دپارتمان
          </Label>
          <Input
            id="department"
            {...register("department")}
            className="h-[48px] text-right"
            placeholder="دپارتمان را وارد کنید"
          />
          {errors.department && (
            <p className="text-[12px] text-red-500 text-right">{errors.department.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="position" className="text-right text-[14px] text-[#6F767E]">
            سمت شغلی
          </Label>
          <Input
            id="position"
            {...register("position")}
            className="h-[48px] text-right"
            placeholder="سمت شغلی را وارد کنید"
          />
          {errors.position && (
            <p className="text-[12px] text-red-500 text-right">{errors.position.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startDate" className="text-right text-[14px] text-[#6F767E]">
            تاریخ شروع
          </Label>
          <Input
            id="startDate"
            {...register("startDate")}
            className="h-[48px] text-right"
            placeholder="1400/01/01"
            dir="ltr"
          />
          {errors.startDate && (
            <p className="text-[12px] text-red-500 text-right">{errors.startDate.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="employmentType" className="text-right text-[14px] text-[#6F767E]">
            نوع استخدام
          </Label>
          <Input
            id="employmentType"
            {...register("employmentType")}
            className="h-[48px] text-right"
            placeholder="نوع استخدام را وارد کنید"
          />
          {errors.employmentType && (
            <p className="text-[12px] text-red-500 text-right">{errors.employmentType.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="salary" className="text-right text-[14px] text-[#6F767E]">
          حقوق
        </Label>
        <Input
          id="salary"
          {...register("salary")}
          className="h-[48px] text-right"
          placeholder="حقوق را وارد کنید"
          dir="ltr"
        />
        {errors.salary && (
          <p className="text-[12px] text-red-500 text-right">{errors.salary.message}</p>
        )}
      </div>
    </div>
  );
};
