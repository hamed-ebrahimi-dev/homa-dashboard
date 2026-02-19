"use client";

import { useFormContext } from "react-hook-form";
import { AddEmployeeFormData } from "../schemas/addEmployeeSchema";
import { Input } from "@/src/base/components/ui/input";
import { Label } from "@/src/base/components/ui/label";

export const EducationStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddEmployeeFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-[20px] font-semibold text-[#1A1D1F] text-right">سوابق تحصیلی</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="field" className="text-right text-[14px] text-[#6F767E]">
            رشته تحصیلی
          </Label>
          <Input
            id="field"
            {...register("field")}
            className="h-[48px] text-right"
            placeholder="رشته تحصیلی را وارد کنید"
          />
          {errors.field && (
            <p className="text-[12px] text-red-500 text-right">{errors.field.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="degree" className="text-right text-[14px] text-[#6F767E]">
            مدرک تحصیلی
          </Label>
          <Input
            id="degree"
            {...register("degree")}
            className="h-[48px] text-right"
            placeholder="مدرک تحصیلی را وارد کنید"
          />
          {errors.degree && (
            <p className="text-[12px] text-red-500 text-right">{errors.degree.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="graduationYear" className="text-right text-[14px] text-[#6F767E]">
            سال فارغ‌التحصیلی
          </Label>
          <Input
            id="graduationYear"
            {...register("graduationYear")}
            className="h-[48px] text-right"
            placeholder="1400"
            dir="ltr"
          />
          {errors.graduationYear && (
            <p className="text-[12px] text-red-500 text-right">{errors.graduationYear.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="university" className="text-right text-[14px] text-[#6F767E]">
            دانشگاه
          </Label>
          <Input
            id="university"
            {...register("university")}
            className="h-[48px] text-right"
            placeholder="نام دانشگاه را وارد کنید"
          />
          {errors.university && (
            <p className="text-[12px] text-red-500 text-right">{errors.university.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};
