export interface Employee {
  id: string;
  first_name: string;
  last_name: string;
  national_code: string;
  phone: string;
  address: string;
  image_url?: string;
  position: string;
  department: string;
  employment_type: string;
  start_date: string;
  salary: string;
  created_at: string;
  updated_at: string;
}

export interface EmployeesResponse {
  success: boolean;
  data: Employee[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
