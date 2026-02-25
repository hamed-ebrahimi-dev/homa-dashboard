"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Checkbox } from "@/src/base/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/base/components/ui/avatar";
import { Badge } from "@/src/base/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/base/components/ui/table";
import { Employee } from "../types/employee";

interface EmployeeTableProps {
  employees: Employee[];
}

export function EmployeeTable({ employees }: EmployeeTableProps) {
  const [selectedEmployees, setSelectedEmployees] = useState<Set<string>>(new Set());

  const toggleEmployee = (id: string) => {
    const newSelected = new Set(selectedEmployees);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedEmployees(newSelected);
  };

  const toggleAll = () => {
    if (selectedEmployees.size === employees.length) {
      setSelectedEmployees(new Set());
    } else {
      setSelectedEmployees(new Set(employees.map((e) => e.id)));
    }
  };

  return (
    <div className="rounded-[8px] overflow-hidden border border-[#E7E7E7]">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F9F9F9] hover:bg-[#F9F9F9]">
            <TableHead className="w-[60px] text-center">
              <Checkbox
                checked={selectedEmployees.size === employees.length}
                onCheckedChange={toggleAll}
              />
            </TableHead>
            <TableHead className="text-right text-[14px] text-[#0E0E0E] font-normal">
              نام کارمند
            </TableHead>
            <TableHead className="text-right text-[14px] text-[#0E0E0E] font-normal">
              سمت شغلی
            </TableHead>
            <TableHead className="text-right text-[14px] text-[#0E0E0E] font-normal">
              دپارتمان
            </TableHead>
            <TableHead className="text-right text-[14px] text-[#0E0E0E] font-normal">
              شماره تماس
            </TableHead>
            <TableHead className="text-right text-[14px] text-[#0E0E0E] font-normal w-[120px]">
              وضعیت
            </TableHead>
            <TableHead className="w-[60px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                کارمندی یافت نشد
              </TableCell>
            </TableRow>
          ) : (
            employees.map((employee) => (
              <TableRow key={employee.id} className="hover:bg-[#FAFAFA]">
                <TableCell className="text-center">
                  <Checkbox
                    checked={selectedEmployees.has(employee.id)}
                    onCheckedChange={() => toggleEmployee(employee.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-[12px]">
                    <Avatar className="w-[32px] h-[32px]">
                      <AvatarImage src={employee.image_url} />
                      <AvatarFallback className="bg-[#E7E7E7] text-[#6D6D6D] text-[12px]">
                        {employee.first_name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-[14px] text-[#0E0E0E]">
                      {employee.first_name} {employee.last_name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right text-[14px] text-[#0E0E0E]">
                  {employee.position}
                </TableCell>
                <TableCell className="text-right text-[14px] text-[#0E0E0E]">
                  {employee.department}
                </TableCell>
                <TableCell className="text-right text-[14px] text-[#0E0E0E]">
                  {employee.phone}
                </TableCell>
                <TableCell className="text-right">
                  <Badge className="bg-[#F1FCF5] text-[#1A7B43] hover:bg-[#F1FCF5] text-[10px] px-[8px] py-[4px] rounded-[8px]">
                    فعال
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <ChevronLeft className="w-[20px] h-[20px] text-[#6D6D6D] mx-auto" />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
