"use client";
import { FC } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  SidebarTrigger,
} from "@/src/base/components/ui";
import { Bell, Search, Menu } from "lucide-react";
import moment from "moment-jalaali";

moment.loadPersian({ usePersianDigits: false, dialect: "persian-modern" });

const getCurrentPersianDate = () => {
  const now = moment();
  const persianWeekDays = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
  const dayName = persianWeekDays[now.day()];
  const day = now.jDate().toString().padStart(2, "0");
  const month = now.format("jMMMM");
  const year = now.jYear();
  return `${dayName} ${day} ${month} ${year}`;
};

export const Header: FC = () => {
  return (
    <header className="flex w-full items-center h-[80px] justify-between px-4 py-[22px] bg-white border-b border-[#e7e7e7]">
      <div className="flex items-center">
        <SidebarTrigger>
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <Menu className="h-8 w-8 text-gray-600" />
          </Button>
        </SidebarTrigger>
      </div>

      <div className="flex items-center gap-3 h-10" dir="rtl">
        <div className="flex items-center gap-1 px-1 h-9">
          <p className="font-medium text-base leading-[1.6] text-[#292929]">
            {getCurrentPersianDate()}
          </p>
        </div>

        <div className="h-[20.5px] w-0 border-r border-[#e7e7e7]" />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-[5px]">
            <p className="font-medium text-base leading-[1.6] text-[#292929]">نیکی حسینی</p>
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">ن ح</AvatarFallback>
            </Avatar>
          </div>

          <Button variant="ghost" size="icon" className="relative rounded-3xl h-9 w-9 p-0">
            <Bell className="h-5 w-5 text-gray-600" />
            <div className="absolute top-[6px] left-[21px] w-2 h-2 bg-[#ff2323] rounded-full" />
          </Button>

          <Button variant="ghost" size="icon" className="rounded-3xl h-9 w-9 p-0">
            <Search className="h-6 w-6 text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};
