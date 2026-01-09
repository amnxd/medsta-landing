import { ProviderContextProvider } from "@/lib/provider-context";

export default function ProviderDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderContextProvider>
      <div className="min-h-screen bg-background">
        {/* Dashboard components removed — render children directly */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </ProviderContextProvider>
  );
}
