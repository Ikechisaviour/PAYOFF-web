import { notFound } from "next/navigation";
import { dashboardConfig } from "@/config/dashboard";
import { MainNav } from "@/components/main-nav";
import { DashboardNav } from "@/components/dashboard.nav";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6 xl:mx-auto max-w-[1600px] relative">
      <div className="grid gap-5 flex-1 md:grid-cols-[200px_1fr] bg-[#F5F5F5] xl:grid-cols-[200px_minmax(0,_1400px)]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav
            items={dashboardConfig.sidebarNav}
            bottomItems={dashboardConfig.bottomNav}
          />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden ">
          <header className="sticky top-0 z-40  bg-white border ">
            <div className="flex h-16 items-center justify-between py-4 px-5  ">
              <MainNav
                items={[
                  ...dashboardConfig.sidebarNav,
                  ...dashboardConfig.bottomNav,
                ]}
              />
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
