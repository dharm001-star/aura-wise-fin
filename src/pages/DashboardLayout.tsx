import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Outlet } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import headerLogo from "@/assets/header-logo.png";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center justify-between border-b px-6 bg-card">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <img src={headerLogo} alt="AURA-FIN" className="h-10 w-10" />
            </div>
            <ThemeToggle />
          </header>
          <main className="flex-1 bg-background overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
