"use client";

import { useState } from "react";
import { DashboardLayout, EmployeesPageTemplate } from "../templates";
import type { Employee } from "../organisms";

const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "علی محمدی",
    employeeId: "EMP-001",
    email: "ali.mohammadi@company.com",
    phone: "0912-345-6789",
    position: "مدیر فنی",
    department: "مهندسی",
    status: "active",
  },
  {
    id: "2",
    name: "سارا احمدی",
    employeeId: "EMP-002",
    email: "sara.ahmadi@company.com",
    phone: "0912-456-7890",
    position: "طراح UI/UX",
    department: "طراحی",
    status: "active",
  },
  {
    id: "3",
    name: "محمد رضایی",
    employeeId: "EMP-003",
    email: "mohammad.rezaei@company.com",
    phone: "0912-567-8901",
    position: "توسعه‌دهنده ارشد",
    department: "مهندسی",
    status: "on-leave",
  },
  {
    id: "4",
    name: "فاطمه کریمی",
    employeeId: "EMP-004",
    email: "fatemeh.karimi@company.com",
    phone: "0912-678-9012",
    position: "مدیر بازاریابی",
    department: "بازاریابی",
    status: "active",
  },
  {
    id: "5",
    name: "حسین نوری",
    employeeId: "EMP-005",
    email: "hossein.noori@company.com",
    phone: "0912-789-0123",
    position: "حسابدار",
    department: "مالی",
    status: "inactive",
  },
  {
    id: "6",
    name: "مریم صادقی",
    employeeId: "EMP-006",
    email: "maryam.sadeghi@company.com",
    phone: "0912-890-1234",
    position: "کارشناس منابع انسانی",
    department: "منابع انسانی",
    status: "active",
  },
  {
    id: "7",
    name: "رضا حسینی",
    employeeId: "EMP-007",
    email: "reza.hosseini@company.com",
    phone: "0912-901-2345",
    position: "توسعه‌دهنده فرانت‌اند",
    department: "مهندسی",
    status: "active",
  },
  {
    id: "8",
    name: "زهرا موسوی",
    employeeId: "EMP-008",
    email: "zahra.mousavi@company.com",
    phone: "0912-012-3456",
    position: "تحلیلگر داده",
    department: "مهندسی",
    status: "active",
  },
];

export function EmployeesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeNav, setActiveNav] = useState("employees");

  return (
    <DashboardLayout activeNavItem={activeNav} onNavItemClick={setActiveNav}>
      <EmployeesPageTemplate
        employees={mockEmployees}
        currentPage={currentPage}
        totalPages={5}
        onPageChange={setCurrentPage}
        onSearch={(value) => console.log("Search:", value)}
        onAddEmployee={() => console.log("Add employee")}
        onEditEmployee={(emp) => console.log("Edit:", emp)}
        onDeleteEmployee={(emp) => console.log("Delete:", emp)}
        onViewEmployee={(emp) => console.log("View:", emp)}
      />
    </DashboardLayout>
  );
}
