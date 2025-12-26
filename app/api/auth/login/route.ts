import { createClient } from "@/supabase/server";
import { loginSchema } from "@/featuer/auth/login/validation";
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
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: "ایمیل یا رمز عبور اشتباه است" }, { status: 401 });
    }

    const response = NextResponse.json(
      { message: "ورود موفقیت‌آمیز", user: data.user },
      { status: 200 }
    );

    response.cookies.set("access_token", data.session.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    response.cookies.set("refresh_token", data.session.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
