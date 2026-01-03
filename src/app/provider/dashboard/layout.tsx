import { ProviderContextProvider } from "@/lib/provider-context";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";

export default function ProviderDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderContextProvider>
      <div className="min-h-screen bg-background">
        <DashboardSidebar />
        
        {/* Main content area */}
        <div className="lg:pl-64 transition-sidebar">
          <DashboardHeader />
          <main className="p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </ProviderContextProvider>
  );
}
