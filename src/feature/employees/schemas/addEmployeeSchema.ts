import { z } from "zod";

export const personalInfoSchema = z.object({
  firstName: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
  lastName: z.string().min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد"),
  nationalCode: z.string().length(10, "کد ملی باید ۱۰ رقم باشد"),
  phone: z.string().min(11, "شماره تماس باید ۱۱ رقم باشد"),
  address: z.string().min(10, "آدرس باید حداقل ۱۰ کاراکتر باشد"),
  image: z.any().optional(),
});

export const educationSchema = z.object({
  degree: z.string().min(1, "مدرک تحصیلی الزامی است"),
  field: z.string().min(1, "رشته تحصیلی الزامی است"),
  university: z.string().min(1, "دانشگاه الزامی است"),
  graduationYear: z.string().min(1, "سال فارغ‌التحصیلی الزامی است"),
});

export const employmentSchema = z.object({
  position: z.string().min(1, "سمت شغلی الزامی است"),
  department: z.string().min(1, "دپارتمان الزامی است"),
  employmentType: z.string().min(1, "نوع استخدام الزامی است"),
  startDate: z.string().min(1, "تاریخ شروع الزامی است"),
  salary: z.string().min(1, "حقوق الزامی است"),
});

export const addEmployeeSchema = personalInfoSchema.merge(educationSchema).merge(employmentSchema);

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
export type EducationFormData = z.infer<typeof educationSchema>;
export type EmploymentFormData = z.infer<typeof employmentSchema>;
export type AddEmployeeFormData = z.infer<typeof addEmployeeSchema>;
