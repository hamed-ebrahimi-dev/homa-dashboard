"use client";

import { ReactNode } from "react";
import { Sidebar, Header } from "../organisms";

interface DashboardLayoutProps {
  children: ReactNode;
  activeNavItem?: string;
  onNavItemClick?: (id: string) => void;
}

export function DashboardLayout({ children, activeNavItem, onNavItemClick }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background" dir="rtl">
      <Sidebar activeItem={activeNavItem} onItemClick={onNavItemClick} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
