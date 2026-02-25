import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/src/core/lib/supabase/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    const supabase = await createClient();

    let query = supabase
      .from("employees")
      .select("*, employee_educations(*)", { count: "exact" })
      .order("created_at", { ascending: false });

    if (search) {
      query = query.or(
        `first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%`
      );
    }

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await query.range(from, to);

    if (error) {
      console.error("Employees fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch employees", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data || [],
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
