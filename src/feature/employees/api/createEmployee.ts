import { AddEmployeeFormData } from "../schemas/addEmployeeSchema";

export const createEmployee = async (data: AddEmployeeFormData) => {
  const response = await fetch("/api/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create employee");
  }

  return response.json();
};
