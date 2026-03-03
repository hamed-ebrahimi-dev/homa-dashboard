import { createServerClient } from "@/src/core/lib/supabase";
import { loginSchema } from "@/src/feature/auth/login/utils/validation";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = loginSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          error: "اطلاعات وارد شده معتبر نیست",
          details: z.prettifyError(result.error),
        },
        { status: 400 }
      );
    }

    const { email, password } = result.data;
    const supabase = await createServerClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: "ایمیل یا رمز عبور اشتباه است" }, { status: 401 });
    }

    return NextResponse.json({ message: "ورود موفقیت‌آمیز", user: data.user }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
