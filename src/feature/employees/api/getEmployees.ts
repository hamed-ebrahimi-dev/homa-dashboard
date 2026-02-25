interface GetEmployeesParams {
  page?: number;
  limit?: number;
  search?: string;
}

export async function getEmployees(params: GetEmployeesParams = {}) {
  const { page = 1, limit = 10, search = "" } = params;

  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(search && { search }),
  });

  const response = await fetch(`/api/employees?${queryParams}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
}
