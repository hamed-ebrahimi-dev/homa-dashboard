import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const signupSchema = z.object({
  email: z.email({ message: "ایمیل معتبر نیست" }),
  password: z.string().min(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد" }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = signupSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "اطلاعات وارد شده معتبر نیست" }, { status: 400 });
    }

    const { email, password } = result.data;
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "ثبت‌نام موفقیت‌آمیز", user: data.user }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
