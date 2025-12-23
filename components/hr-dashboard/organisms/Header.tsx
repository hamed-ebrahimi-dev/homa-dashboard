"use client";

import { SearchInput, IconButton } from "../atoms";
import { UserAvatar } from "../molecules";
import { Bell, MessageSquare, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  userName?: string;
  userImage?: string;
}

export function Header({ userName = "علی محمدی", userImage }: HeaderProps) {
  const { setTheme, theme } = useTheme();

  return (
    <header className="h-16 border-b bg-card px-6 flex items-center justify-between" dir="rtl">
      <SearchInput placeholder="جستجوی کارمند، دپارتمان..." className="w-80" />
      
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
        
        <IconButton icon={MessageSquare} badge={3} />
        <IconButton icon={Bell} badge={5} />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-2">
              <UserAvatar name={userName} image={userImage} size="sm" />
              <span className="text-sm font-medium">{userName}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" dir="rtl">
            <DropdownMenuItem>پروفایل</DropdownMenuItem>
            <DropdownMenuItem>تنظیمات</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">خروج</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
