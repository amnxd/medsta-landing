"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Define routes that should NOT have the global navbar/footer
  const isExcludedRoute = pathname === "/hiring" || pathname?.startsWith("/hiring/");

  return (
    <>
      {!isExcludedRoute && <Navbar />}
      <main className="flex-grow overflow-x-hidden">
        {children}
      </main>
      {!isExcludedRoute && (
        <>
          <Footer />
          <StickyMobileBar />
        </>
      )}
    </>
  );
}
