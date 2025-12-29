"use client";

import { useState } from "react";
import { Logo } from "@/src/feature/layout/components/Logo";
import { NavItem } from "@/src/feature/layout/components/NavItem";
import { Button, Separator, ScrollArea } from "@/src/base/components/ui";
import {
  LayoutDashboard,
  Users,
  Clock,
  Wallet,
  Briefcase,
  UserCheck,
  CalendarDays,
  PartyPopper,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/src/base/utils/cn";

const navItems = [
  { icon: LayoutDashboard, label: "داشبورد", id: "dashboard" },
  { icon: Users, label: "کارمندان", id: "employees" },
  { icon: Clock, label: "حضور و غیاب", id: "attendance" },
  { icon: Wallet, label: "حقوق و دستمزد", id: "payroll" },
  { icon: Briefcase, label: "مشاغل", id: "jobs" },
  { icon: UserCheck, label: "کاندیداها", id: "candidates" },
  { icon: CalendarDays, label: "مرخصی‌ها", id: "leaves" },
  { icon: PartyPopper, label: "تعطیلات", id: "holidays" },
  { icon: Settings, label: "تنظیمات", id: "settings" },
];

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (id: string) => void;
}

export function Sidebar({ activeItem = "employees", onItemClick }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "h-screen bg-card border-l flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
      dir="rtl"
    >
      <div className="p-4 flex items-center justify-between">
        <Logo collapsed={collapsed} />
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      <Separator />

      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeItem === item.id}
              onClick={() => onItemClick?.(item.id)}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}
