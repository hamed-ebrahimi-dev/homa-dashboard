import { createClient } from "@/src/core/lib/supabase/server";
import { EmployeeListClient } from "@/src/feature/employees/components/EmployeeListClient";
import { EmployeesResponse } from "@/src/feature/employees/types/employee";

interface PageProps {
  searchParams: { page?: string; search?: string };
}

export default async function HomePage({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page || "1");
  const search = searchParams.search || "";
  const limit = 10;

  const supabase = await createClient();

  let query = supabase
    .from("employees")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  if (search) {
    query = query.or(
      `first_name.ilike.%${search}%,last_name.ilike.%${search}%,phone.ilike.%${search}%`
    );
  }

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await query.range(from, to);

  const employeesData: EmployeesResponse = {
    success: !error,
    data: data || [],
    pagination: {
      page,
      limit,
      total: count || 0,
      totalPages: Math.ceil((count || 0) / limit),
    },
  };

  return <EmployeeListClient initialData={employeesData} />;
}
