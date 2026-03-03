"use client";

import { FC, useState } from "react";
import Link from "next/link";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/base/components/ui";
import {
  Home,
  Users,
  ChevronDown,
  FileText,
  ClipboardList,
  BarChart3,
  Calendar,
  Settings,
  HelpCircle,
} from "lucide-react";
import { PersianCalendar } from "./components/PersianCalendar";
import "./components/scrollbar.css";

const menuItems = [
  {
    title: "داشبورد",
    icon: Home,
    url: "/dashboard",
  },
  {
    title: "کارمندان",
    icon: Users,
    url: "#",
    items: [
      {
        title: "لیست کارمندان",
        url: "/employees",
      },
      {
        title: "افزودن کارمند",
        url: "/employees/add",
      },
    ],
  },
  {
    title: "فرم‌ها",
    icon: FileText,
    url: "#",
    items: [
      {
        title: "فرم‌های موجود",
        url: "/forms",
      },
      {
        title: "ایجاد فرم",
        url: "/forms/create",
      },
    ],
  },
  {
    title: "درخواست‌ها",
    icon: ClipboardList,
    url: "/requests",
  },
  {
    title: "گزارش حضور و غیاب",
    icon: BarChart3,
    url: "/attendance-reports",
    active: true,
  },
  {
    title: "رویدادها",
    icon: Calendar,
    url: "/events",
  },
  {
    title: "چارت سازمانی",
    icon: BarChart3,
    url: "/org-chart",
  },
];

const bottomMenuItems = [
  {
    title: "پشتیبانی",
    icon: HelpCircle,
    url: "#",
    items: [
      {
        title: "راهنما",
        url: "/help",
      },
      {
        title: "تماس با پشتیبانی",
        url: "/support",
      },
    ],
  },
  {
    title: "تنظیمات",
    icon: Settings,
    url: "/settings",
  },
];

export const AppSidebar: FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  return (
    <div
      className="bg-white border-l border-[#e7e7e7] flex flex-col gap-10 items-center pb-8 pt-4 px-6 h-full w-[300px] custom-scrollbar"
      dir="rtl"
    >
      <div className="flex gap-2 h-[55px] items-start justify-end">
        <div className="flex flex-col items-end pb-2.5 text-primary-800 text-right">
          <p className="font-semibold text-2xl leading-none">
            <span>Homa </span>
            <span className="font-light">|</span>
            <span> هُمــــــــا</span>
          </p>
          <p className="font-normal text-[17px] leading-[1.6]">مدیریت منابع انسانی</p>
        </div>
        <div className="h-[19px] w-5 overflow-hidden shrink-0">
          <div className="w-full h-full bg-primary-800 rounded-sm"></div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-20 items-center min-h-0 overflow-y-auto w-full custom-scrollbar">
        <div className="flex flex-col items-end w-full">
          {menuItems.map((item) => (
            <div key={item.title} className="w-full">
              {item.items ? (
                <Collapsible
                  open={openItems.includes(item.title)}
                  onOpenChange={() => toggleItem(item.title)}
                >
                  <CollapsibleTrigger asChild>
                    <div className="flex gap-3 h-14 items-center px-4 py-2 rounded-lg w-full cursor-pointer hover:bg-gray-50 justify-between">
                      <div className="h-5 w-5 flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-gray-700" />
                      </div>
                      <p className="font-normal text-lg leading-[1.6] text-gray-900 text-right flex-1">
                        {item.title}
                      </p>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-600 transition-transform ${
                          openItems.includes(item.title) ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-1 space-y-1">
                      {item.items.map((subItem) => (
                        <div key={subItem.title} className="flex justify-start mr-4">
                          <Link href={subItem.url}>
                            <Button
                              variant="ghost"
                              className="text-right hover:bg-gray-50 text-gray-600 px-4"
                            >
                              <span>{subItem.title}</span>
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link href={item.url}>
                  <div className="flex gap-3 h-14 items-center px-4 py-2 rounded-lg w-full cursor-pointer hover:bg-gray-50">
                    <div className="h-6 w-6 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-gray-700" />
                    </div>
                    <p className="font-normal text-lg leading-[1.6] text-gray-900 text-right flex-1">
                      {item.title}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-7 items-center w-full">
          <div className="flex flex-col gap-6 items-start w-full">
            <div className="h-px w-[240px] bg-[#e7e7e7]"></div>

            <div className="flex flex-col items-end w-full">
              {bottomMenuItems.map((item) => (
                <div key={item.title} className="w-full">
                  {item.items ? (
                    <Collapsible
                      open={openItems.includes(item.title)}
                      onOpenChange={() => toggleItem(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <div className="flex gap-3 h-14 items-center px-4 py-2 rounded-lg w-full cursor-pointer hover:bg-gray-50 justify-between">
                          <div className="h-5 w-5 flex items-center justify-center">
                            <item.icon className="h-4 w-4 text-gray-700" />
                          </div>
                          <p className="font-normal text-lg leading-[1.6] text-gray-900 text-right flex-1">
                            {item.title}
                          </p>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-600 transition-transform ${
                              openItems.includes(item.title) ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="mt-1 space-y-1">
                          {item.items.map((subItem) => (
                            <div key={subItem.title} className="flex justify-end pr-12">
                              <Link href={subItem.url}>
                                <Button
                                  variant="ghost"
                                  className="text-right hover:bg-gray-50 text-gray-600 px-4"
                                >
                                  <span>{subItem.title}</span>
                                </Button>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link href={item.url}>
                      <div className="flex gap-3 h-14 items-center px-4 py-2 rounded-lg w-full cursor-pointer hover:bg-gray-50">
                        <div className="h-5 w-5 flex items-center justify-center">
                          <item.icon className="h-4 w-4 text-gray-700" />
                        </div>
                        <p className="font-normal text-lg leading-[1.6] text-gray-900 text-right flex-1">
                          {item.title}
                        </p>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <PersianCalendar />
        </div>
      </div>
    </div>
  );
};
