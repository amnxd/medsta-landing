import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: "Medsta | Top Online Healthcare Services in Lucknow",
  description: "Your trusted healthcare marketplace in Lucknow. Book doctor consultations, lab test at home, MRI scans, and get fastest medicine delivery in Gomti Nagar & beyond.",
  keywords: [
    "medsta", "medsta.in", "medsta india", "medsta health", "medsta healthcare", "medsta app", "medsta platform", "the medsta app",
    "online healthcare marketplace", "healthcare marketplace india", "digital healthcare platform", "integrated healthcare ecosystem",
    "Medsta healthcare services", "Medsta healthcare marketplace", "online healthcare marketplace", "healthcare services in Lucknow",
    "online pharmacy Lucknow", "lab test booking Lucknow", "diagnostic centers Lucknow", "home sample collection Lucknow",
    "medicines delivery Lucknow", "online doctor consultation Lucknow", "healthcare services Gomti Nagar", "pharmacy near Gomti Nagar Lucknow",
    "diagnostic lab Gomti Nagar", "health services near Eldeco Elegance Lucknow", "order medicines online", "book lab test online",
    "MRI scan booking Lucknow", "CT scan Lucknow", "book doctor online", "telemedicine consultation Lucknow",
    "cheap lab tests near me", "trusted pharmacy near me", "best online pharmacy in India", "book blood test at home in Lucknow",
    "online health seva", "online dawa order", "doctor se online salah", "sasti healthcare services", "ghar baithe health services",
    "ghar par medicine delivery Lucknow", "blood test ghar par", "pathology lab near me", "sasta MRI scan Lucknow", "best pathology lab near me"
  ].join(", "),
  openGraph: {
    title: "Medsta | Top Online Healthcare Services in Lucknow",
    description: "Your trusted healthcare marketplace in Lucknow. Book doctor consultations, lab test at home, MRI scans, and get fastest medicine delivery.",
    type: "website",
    locale: "en_IN",
    siteName: "Medsta",
    url: "https://medsta.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medsta | Top Online Healthcare Services in Lucknow",
    description: "Book doctor consultations, lab test at home, MRI scans, and get fastest medicine delivery in Lucknow with Medsta.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://medsta.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for Organization and WebSite
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Medsta",
      "url": "https://medsta.in",
      "alternateName": ["Medsta Health", "The Medsta App"],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Medsta",
      "url": "https://medsta.in",
      "logo": "https://medsta.in/logo.svg",
      "description": "Healthcare services at home in Lucknow. Doctor se online salah, blood test ghar par, medicine delivery, and radiology scan from trusted local providers in Gomti Nagar, Eldeco Elegance and across Lucknow.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://twitter.com/medsta",
        "https://linkedin.com/company/medsta"
      ]
    }
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Added pb-16 to body to prevent content hiding behind StickyMobileBar on small screens */}
      <body className="font-sans antialiased min-h-screen flex flex-col pb-16 md:pb-0 overflow-x-hidden">
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
