"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { AddEmployeeFormData } from "../schemas/addEmployeeSchema";
import { Input } from "@/src/base/components/ui/input";
import { Label } from "@/src/base/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/base/components/ui/select";
import { FileUploader } from "@/src/base/components/ui/file-uploader";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/src/base/components/ui/button";

export const EducationStep = () => {
  const {
    register,
    control,
    formState: { errors },
    setValue,
  } = useFormContext<AddEmployeeFormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  const addEducation = () => {
    append({
      degree: "",
      field: "",
      university: "",
      gpa: "",
      certificate: undefined,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-[20px] font-semibold text-[#1A1D1F] text-right">سوابق تحصیلی</h2>

      <div className="max-h-[500px] overflow-y-auto pl-2 space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-6 pb-6 border-b border-gray-200 last:border-0">
            {index > 0 && (
              <div className="flex justify-between items-center">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => remove(index)}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 h-[40px] px-4 rounded-[12px]"
                >
                  <Trash2 className="w-4 h-4 ml-2" />
                  حذف مدرک
                </Button>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor={`educations.${index}.field`}
                  className="text-right text-[14px] text-[#6F767E]"
                >
                  رشته تحصیلی
                </Label>
                <Input
                  id={`educations.${index}.field`}
                  {...register(`educations.${index}.field`)}
                  className="h-[48px] text-right w-full"
                  placeholder="رشته تحصیلی را وارد کنید"
                />
                {errors.educations?.[index]?.field && (
                  <p className="text-[12px] text-red-500 text-right">
                    {errors.educations[index]?.field?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor={`educations.${index}.degree`}
                  className="text-right text-[14px] text-[#6F767E]"
                >
                  مدرک تحصیلی
                </Label>
                <Select onValueChange={(value) => setValue(`educations.${index}.degree`, value)}>
                  <SelectTrigger className="h-[48px] text-right w-full">
                    <SelectValue placeholder="مدرک تحصیلی را انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="دیپلم">دیپلم</SelectItem>
                    <SelectItem value="کاردانی">کاردانی</SelectItem>
                    <SelectItem value="کارشناسی">کارشناسی</SelectItem>
                    <SelectItem value="کارشناسی ارشد">کارشناسی ارشد</SelectItem>
                    <SelectItem value="دکتری">دکتری</SelectItem>
                  </SelectContent>
                </Select>
                {errors.educations?.[index]?.degree && (
                  <p className="text-[12px] text-red-500 text-right">
                    {errors.educations[index]?.degree?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor={`educations.${index}.gpa`}
                  className="text-right text-[14px] text-[#6F767E]"
                >
                  معدل
                </Label>
                <Input
                  id={`educations.${index}.gpa`}
                  {...register(`educations.${index}.gpa`)}
                  className="h-[48px] text-right w-full"
                  placeholder="معدل را وارد کنید"
                  dir="ltr"
                />
                {errors.educations?.[index]?.gpa && (
                  <p className="text-[12px] text-red-500 text-right">
                    {errors.educations[index]?.gpa?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor={`educations.${index}.university`}
                  className="text-right text-[14px] text-[#6F767E]"
                >
                  نام آموزشگاه
                </Label>
                <Input
                  id={`educations.${index}.university`}
                  {...register(`educations.${index}.university`)}
                  className="h-[48px] text-right w-full"
                  placeholder="نام آموزشگاه را وارد کنید"
                />
                {errors.educations?.[index]?.university && (
                  <p className="text-[12px] text-red-500 text-right">
                    {errors.educations[index]?.university?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-right text-[14px] text-[#6F767E]">بارگذاری مدرک تحصیلی</Label>
              <FileUploader
                maxFiles={5}
                maxSize={5 * 1024 * 1024}
                accept=".pdf,.jpg,.jpeg,.png"
                onFileSelect={(files) => {
                  if (files.length > 0) {
                    setValue(`educations.${index}.certificate`, files);
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start pt-4">
        <Button
          type="button"
          variant="ghost"
          onClick={addEducation}
          className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 h-[48px] px-6 rounded-[12px]"
        >
          <Plus className="w-5 h-5 ml-2" />
          اضافه کردن مدارک
        </Button>
      </div>
    </div>
  );
};
