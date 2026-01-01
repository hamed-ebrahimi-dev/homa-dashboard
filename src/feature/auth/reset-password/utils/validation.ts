import z from "zod";

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, { message: "رمز عبور باید حداقل ۸ کاراکتر باشد" }),
    confirmPassword: z.string().min(1, { message: "تکرار رمز عبور الزامی است" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
