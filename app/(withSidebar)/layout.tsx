import { Header } from "@/src/feature/layout/header";
import { AppSidebar } from "@/src/feature/layout/sidebar";
import { SidebarProvider } from "@/src/base/components/ui";

interface LayoutProps {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto bg-gray-50">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default SidebarLayout;
