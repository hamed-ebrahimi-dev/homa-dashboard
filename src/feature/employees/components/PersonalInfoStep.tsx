"use client";

import { useFormContext } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { AddEmployeeFormData } from "../schemas/addEmployeeSchema";
import { Input } from "@/src/base/components/ui/input";
import { Label } from "@/src/base/components/ui/label";
import { Textarea } from "@/src/base/components/ui/textarea";
import { FileUploader } from "@/src/base/components/ui/file-uploader";
import { uploadFile } from "../api/uploadFile";
import { toast } from "sonner";

export const PersonalInfoStep = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<AddEmployeeFormData>();

  const uploadMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: (data) => {
      setValue("imageUrl", data.url);
      toast.success("تصویر با موفقیت آپلود شد");
    },
    onError: (error: Error) => {
      toast.error(error.message || "خطا در آپلود تصویر");
    },
  });

  const handleFileSelect = (files: File[]) => {
    if (files.length > 0) {
      const file = files[0];
      setValue("image", file);
      uploadMutation.mutate(file);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-[20px] font-semibold text-[#1A1D1F] text-right">اطلاعات شخصی</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-right text-[14px] text-[#6F767E]">
            نام خانوادگی
          </Label>
          <Input
            id="lastName"
            {...register("lastName")}
            className="h-[48px] text-right"
            placeholder="نام خانوادگی را وارد کنید"
          />
          {errors.lastName && (
            <p className="text-[12px] text-red-500 text-right">{errors.lastName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-right text-[14px] text-[#6F767E]">
            نام
          </Label>
          <Input
            id="firstName"
            {...register("firstName")}
            className="h-[48px] text-right"
            placeholder="نام را وارد کنید"
          />
          {errors.firstName && (
            <p className="text-[12px] text-red-500 text-right">{errors.firstName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-right text-[14px] text-[#6F767E]">
            شماره تماس
          </Label>
          <Input
            id="phone"
            {...register("phone")}
            className="h-[48px] text-right"
            placeholder="09123456789"
            dir="ltr"
          />
          {errors.phone && (
            <p className="text-[12px] text-red-500 text-right">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="nationalCode" className="text-right text-[14px] text-[#6F767E]">
            کد ملی
          </Label>
          <Input
            id="nationalCode"
            {...register("nationalCode")}
            className="h-[48px] text-right"
            placeholder="1234567890"
            dir="ltr"
          />
          {errors.nationalCode && (
            <p className="text-[12px] text-red-500 text-right">{errors.nationalCode.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-right text-[14px] text-[#6F767E]">
          آدرس
        </Label>
        <Textarea
          id="address"
          {...register("address")}
          className="min-h-[120px] text-right resize-none"
          placeholder="آدرس کامل را وارد کنید"
        />
        {errors.address && (
          <p className="text-[12px] text-red-500 text-right">{errors.address.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-right text-[14px] text-[#6F767E]">تصویر پروفایل</Label>
        <FileUploader
          maxFiles={1}
          maxSize={5 * 1024 * 1024}
          accept="image/*"
          onFileSelect={handleFileSelect}
          disabled={uploadMutation.isPending}
        />
        {uploadMutation.isPending && (
          <p className="text-[12px] text-blue-500 text-right">در حال آپلود...</p>
        )}
        {uploadMutation.isError && (
          <p className="text-[12px] text-red-500 text-right">{uploadMutation.error.message}</p>
        )}
      </div>
    </div>
  );
};
