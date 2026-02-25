"use client";

import { useState } from "react";
import { Plus, Search, Filter, Archive, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/base/components/ui/button";
import { Input } from "@/src/base/components/ui/input";
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

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  email: string;
  imageUrl?: string;
  status: "active" | "inactive";
}

const mockEmployees: Employee[] = Array.from({ length: 10 }, (_, i) => ({
  id: `emp-${i + 1}`,
  firstName: "پریا",
  lastName: "حسینی",
  position: "Backend Developer",
  department: "برنامه نویسی",
  email: "pry.hsyny@example.com",
  status: "active",
}));

export function EmployeeList() {
  const [selectedEmployees, setSelectedEmployees] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
    if (selectedEmployees.size === mockEmployees.length) {
      setSelectedEmployees(new Set());
    } else {
      setSelectedEmployees(new Set(mockEmployees.map((e) => e.id)));
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] p-6">
      <div className="max-w-[1200px] mx-auto space-y-6">
        <h1 className="text-[32px] font-extrabold text-[#1B1B1B] text-right">کارمندان</h1>

        <div className="bg-white rounded-[16px] p-[32px] space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/employees/add">
              <Button className="bg-[#4464D1] hover:bg-[#3651B8] h-[48px] px-[16px] rounded-[8px] gap-[8px]">
                <span className="text-[16px] font-medium">ایجاد کارمند جدید</span>
                <Plus className="w-[18px] h-[24px]" />
              </Button>
            </Link>

            <div className="flex items-center gap-[20px]">
              <Button
                variant="ghost"
                className="bg-[#F9F9F9] h-[40px] px-[12px] rounded-[8px] gap-[6px] hover:bg-[#EFEFEF]"
              >
                <span className="text-[14px] text-[#6D6D6D]">آرشیو</span>
                <Archive className="w-[21px] h-[21px] text-[#6D6D6D]" />
              </Button>

              <Button
                variant="ghost"
                className="bg-[#F9F9F9] h-[40px] px-[12px] rounded-[8px] gap-[6px] hover:bg-[#EFEFEF]"
              >
                <span className="text-[14px] text-[#6D6D6D]">فیلتر</span>
                <Filter className="w-[21px] h-[20px] text-[#6D6D6D]" />
              </Button>

              <div className="relative">
                <Input
                  type="text"
                  placeholder="جستجوی نام، ایمیل، و ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#F9F9F9] border-[#DBDBDB] h-[40px] w-[260px] rounded-full pr-[16px] pl-[48px] text-right text-[14px]"
                />
                <Search className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[19px] text-[#A0A0A0]" />
              </div>
            </div>
          </div>

          <div className="rounded-[8px] overflow-hidden border border-[#E7E7E7]">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F9F9F9] hover:bg-[#F9F9F9]">
                  <TableHead className="w-[60px] text-center">
                    <Checkbox
                      checked={selectedEmployees.size === mockEmployees.length}
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
                    ایمیل
                  </TableHead>
                  <TableHead className="text-right text-[14px] text-[#0E0E0E] font-normal w-[120px]">
                    وضعیت
                  </TableHead>
                  <TableHead className="w-[60px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockEmployees.map((employee) => (
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
                          <AvatarImage src={employee.imageUrl} />
                          <AvatarFallback className="bg-[#E7E7E7] text-[#6D6D6D] text-[12px]">
                            {employee.firstName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-[14px] text-[#0E0E0E]">
                          {employee.firstName} {employee.lastName}
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
                      {employee.email}
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
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-center gap-[12px] pt-[24px]">
            <button className="w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-colors">
              <ChevronRight className="w-[20px] h-[20px] text-gray-600" />
            </button>
            <button className="w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-colors">
              <ChevronLeft className="w-[20px] h-[20px] text-gray-600 rotate-180" />
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`min-w-[32px] h-[32px] px-[8px] rounded-[4px] flex items-center justify-center text-[14px] font-medium transition-colors ${
                  currentPage === page
                    ? "bg-[#4464D1] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="text-[14px] text-gray-600 px-[4px]">...</span>

            <button className="min-w-[32px] h-[32px] px-[8px] rounded-[4px] flex items-center justify-center text-[14px] font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors">
              ۱۰
            </button>

            <button className="w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-colors">
              <ChevronLeft className="w-[20px] h-[20px] text-gray-600" />
            </button>
            <button className="w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-colors">
              <ChevronRight className="w-[20px] h-[20px] text-gray-600 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
