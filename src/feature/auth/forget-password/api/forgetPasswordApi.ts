"use server";
import { createServerClient } from "@/src/core/lib/supabase";
import { ForgetPasswordValidationType } from "../utils/validation";

export const forgetPasswordApi = async (data: ForgetPasswordValidationType) => {
  const supabase = await createServerClient();
  const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password`,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};
