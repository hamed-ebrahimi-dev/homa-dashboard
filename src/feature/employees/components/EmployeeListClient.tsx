"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Plus, Search, Filter, Archive, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/base/components/ui/button";
import { Input } from "@/src/base/components/ui/input";
import { EmployeeTable } from "./EmployeeTable";
import { EmployeesResponse } from "../types/employee";

interface EmployeeListClientProps {
  initialData: EmployeesResponse;
}

export function EmployeeListClient({ initialData }: EmployeeListClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");

  const currentPage = initialData.pagination.page;
  const totalPages = initialData.pagination.totalPages;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxVisible; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
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

              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="جستجوی نام، ایمیل، و ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#F9F9F9] border-[#DBDBDB] h-[40px] w-[260px] rounded-full pr-[16px] pl-[48px] text-right text-[14px]"
                />
                <button type="submit" className="absolute left-[16px] top-1/2 -translate-y-1/2">
                  <Search className="w-[20px] h-[19px] text-[#A0A0A0]" />
                </button>
              </form>
            </div>
          </div>

          <EmployeeTable employees={initialData.data} />

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-[12px] pt-[24px]">
              <button
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                className="w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-[20px] h-[20px] text-gray-600" />
              </button>
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-[20px] h-[20px] text-gray-600 rotate-180" />
              </button>

              {renderPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`min-w-[32px] h-[32px] px-[8px] rounded-[4px] flex items-center justify-center text-[14px] font-medium transition-colors ${
                    currentPage === page
                      ? "bg-[#4464D1] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {page}
                </button>
              ))}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <>
                  <span className="text-[14px] text-gray-600 px-[4px]">...</span>
                  <button
                    onClick={() => goToPage(totalPages)}
                    className="min-w-[32px] h-[32px] px-[8px] rounded-[4px] flex items-center justify-center text-[14px] font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-[20px] h-[20px] text-gray-600" />
              </button>
              <button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
                className="w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-[20px] h-[20px] text-gray-600 rotate-180" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
