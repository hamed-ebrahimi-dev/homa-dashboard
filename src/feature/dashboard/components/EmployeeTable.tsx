"use client";

import { Card, CardContent } from "@/src/base/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/base/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/base/components/ui/select";
import { Input } from "@/src/base/components/ui/input";
import { Checkbox } from "@/src/base/components/ui/checkbox";
import { ChevronLeft, Search, X } from "lucide-react";

export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
}

interface EmployeeTableProps {
  employees: Employee[];
}

export const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  return (
    <Card className="rounded-[16px] bg-white">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Select defaultValue="week">
              <SelectTrigger className="w-[150px] h-[40px] bg-[#f9f9f9] border-gray-150 rounded-[16px] text-[14px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">در ۷ روز گذشته</SelectItem>
                <SelectItem value="month">در ۳۰ روز گذشته</SelectItem>
              </SelectContent>
            </Select>
            <h2 className="text-[15px] text-gray-900 font-medium">لیست کارکنان</h2>
          </div>

          <div className="flex items-center gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[200px] h-[48px] bg-white border-gray-150 rounded-[16px] text-[14px]">
                <SelectValue placeholder="انتخاب دپارتمان" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">انتخاب دپارتمان</SelectItem>
                <SelectItem value="design">طراحی</SelectItem>
                <SelectItem value="dev">توسعه</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative flex-1">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="جستجوی نام، ایمیل، و ..."
                className="h-[48px] pr-12 pl-12 bg-white border-gray-150 rounded-[16px] text-[14px] text-right"
              />
              <X className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer" />
            </div>
          </div>

          <div className="rounded-[8px] overflow-hidden border border-gray-150">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50">
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead className="text-right text-[14px] text-gray-900 font-medium h-[56px]">
                    نام
                  </TableHead>
                  <TableHead className="text-right text-[14px] text-gray-900 font-medium">
                    سمت
                  </TableHead>
                  <TableHead className="text-right text-[14px] text-gray-900 font-medium">
                    دپارتمان
                  </TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id} className="hover:bg-gray-50">
                    <TableCell className="text-center">
                      <Checkbox className="h-5 w-5 rounded border-gray-300" />
                    </TableCell>
                    <TableCell className="text-right text-[14px] text-gray-900 h-[64px]">
                      {employee.name}
                    </TableCell>
                    <TableCell className="text-right text-[14px] text-gray-900">
                      {employee.position}
                    </TableCell>
                    <TableCell className="text-right text-[14px] text-gray-900">
                      {employee.department}
                    </TableCell>
                    <TableCell className="text-center">
                      <ChevronLeft className="h-5 w-5 text-gray-400 mx-auto" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
