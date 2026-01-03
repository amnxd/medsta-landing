import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Medsta - Healthcare. Fast. Local. Reliable.",
  description: "Order medicines, book doctors & tests — from verified providers near you. Healthcare made simple for Tier 2 and Tier 3 Indian cities.",
  keywords: ["healthcare", "medicine delivery", "doctor appointment", "lab tests", "India", "local healthcare"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
