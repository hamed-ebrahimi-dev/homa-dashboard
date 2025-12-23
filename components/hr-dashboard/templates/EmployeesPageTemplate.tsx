"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { EmployeesTable, EmployeesToolbar, type Employee } from "../organisms";
import { Pagination } from "../molecules";

interface EmployeesPageTemplateProps {
  employees: Employee[];
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  onSearch?: (value: string) => void;
  onAddEmployee?: () => void;
  onEditEmployee?: (employee: Employee) => void;
  onDeleteEmployee?: (employee: Employee) => void;
  onViewEmployee?: (employee: Employee) => void;
}

export function EmployeesPageTemplate({
  employees,
  totalPages = 5,
  currentPage = 1,
  onPageChange,
  onSearch,
  onAddEmployee,
  onEditEmployee,
  onDeleteEmployee,
  onViewEmployee,
}: EmployeesPageTemplateProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-6">
      <EmployeesToolbar onSearch={onSearch} onAddEmployee={onAddEmployee} />
      
      <Card>
        <CardContent className="p-0">
          <EmployeesTable
            employees={employees}
            selectedIds={selectedIds}
            onSelectionChange={setSelectedIds}
            onEdit={onEditEmployee}
            onDelete={onDeleteEmployee}
            onView={onViewEmployee}
          />
        </CardContent>
      </Card>
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          نمایش {employees.length} از {totalPages * 10} کارمند
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange || (() => {})}
        />
      </div>
    </div>
  );
}
