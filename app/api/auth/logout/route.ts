import { createServerClient } from "@/src/core/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerClient();
    await supabase.auth.signOut();

    return NextResponse.json({ message: "خروج موفقیت‌آمیز" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
