"use server";
import { createServerClient } from "@/src/core/lib/supabase";
import { ResetPasswordFormData } from "../utils/validation";

export const resetPasswordApi = async (data: ResetPasswordFormData) => {
  const supabase = await createServerClient();
  const { error } = await supabase.auth.updateUser({
    password: data.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};
