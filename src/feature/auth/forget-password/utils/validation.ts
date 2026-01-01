import z from "zod";

export const forgetPasswordValidation = z.object({
  email: z
    .email({ message: "ایمیل وارد شده معتبر نمیباشد" })
    .min(1, { message: "واردکردن ایمیل اجباری است" }),
});

export type ForgetPasswordValidationType = z.infer<typeof forgetPasswordValidation>;
