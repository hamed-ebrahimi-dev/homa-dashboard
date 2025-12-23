"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EmployeeCell } from "../molecules";
import { StatusBadge } from "../atoms";

export interface Employee {
  id: string;
  name: string;
  image?: string;
  employeeId: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  status: "active" | "inactive" | "on-leave";
}

interface EmployeesTableProps {
  employees: Employee[];
  selectedIds?: string[];
  onSelectionChange?: (ids: string[]) => void;
  onEdit?: (employee: Employee) => void;
  onDelete?: (employee: Employee) => void;
  onView?: (employee: Employee) => void;
}

export function EmployeesTable({
  employees,
  selectedIds = [],
  onSelectionChange,
  onEdit,
  onDelete,
  onView,
}: EmployeesTableProps) {
  const allSelected = employees.length > 0 && selectedIds.length === employees.length;

  const toggleAll = () => {
    if (allSelected) {
      onSelectionChange?.([]);
    } else {
      onSelectionChange?.(employees.map((e) => e.id));
    }
  };

  const toggleOne = (id: string) => {
    if (selectedIds.includes(id)) {
      onSelectionChange?.(selectedIds.filter((i) => i !== id));
    } else {
      onSelectionChange?.([...selectedIds, id]);
    }
  };

  return (
    <div className="rounded-lg border bg-card" dir="rtl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox checked={allSelected} onCheckedChange={toggleAll} />
            </TableHead>
            <TableHead>نام کارمند</TableHead>
            <TableHead>شماره کارمندی</TableHead>
            <TableHead>ایمیل</TableHead>
            <TableHead>شماره تماس</TableHead>
            <TableHead>موقعیت شغلی</TableHead>
            <TableHead>دپارتمان</TableHead>
            <TableHead>وضعیت</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>
                <Checkbox
                  checked={selectedIds.includes(employee.id)}
                  onCheckedChange={() => toggleOne(employee.id)}
                />
              </TableCell>
              <TableCell>
                <EmployeeCell name={employee.name} image={employee.image} />
              </TableCell>
              <TableCell className="text-muted-foreground">{employee.employeeId}</TableCell>
              <TableCell className="text-muted-foreground" dir="ltr">{employee.email}</TableCell>
              <TableCell className="text-muted-foreground" dir="ltr">{employee.phone}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>
                <StatusBadge status={employee.status} />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" dir="rtl">
                    <DropdownMenuItem onClick={() => onView?.(employee)}>
                      <Eye className="h-4 w-4 ml-2" />
                      مشاهده
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onEdit?.(employee)}>
                      <Pencil className="h-4 w-4 ml-2" />
                      ویرایش
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onDelete?.(employee)} className="text-red-600">
                      <Trash2 className="h-4 w-4 ml-2" />
                      حذف
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
