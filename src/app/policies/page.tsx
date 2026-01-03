import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                M
              </div>
              <span className="font-bold text-xl text-primary">MEDSTA</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Terms & Policies</h1>

        {/* Terms and Conditions */}
        <section id="terms" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">General Terms & Conditions</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-4">
              Last updated: January 1, 2026
            </p>
            <p className="mb-4">
              Welcome to Medsta. These terms and conditions outline the rules and regulations 
              for the use of Medsta&apos;s platform and services.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground mb-4">
              By accessing and using Medsta, you accept and agree to be bound by these terms. 
              If you disagree with any part of these terms, you may not use our services.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">2. Use of Services</h3>
            <p className="text-muted-foreground mb-4">
              Our platform connects patients with healthcare providers. We facilitate 
              communication but are not responsible for the medical services provided 
              by independent healthcare professionals.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">3. User Responsibilities</h3>
            <p className="text-muted-foreground mb-4">
              Users must provide accurate information, respect other users, and use the 
              platform only for lawful purposes related to healthcare services.
            </p>
          </div>
        </section>

        {/* Provider Agreement */}
        <section id="provider-agreement" className="mb-12 pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Provider Agreement</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-4">
              This agreement governs the relationship between Medsta and healthcare providers 
              using our platform.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">1. Provider Eligibility</h3>
            <p className="text-muted-foreground mb-4">
              All providers must hold valid licenses and certifications as required by 
              Indian law for their respective healthcare services.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">2. Service Standards</h3>
            <p className="text-muted-foreground mb-4">
              Providers agree to maintain high standards of care, respond promptly to 
              patient inquiries, and honor their listed services and pricing.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">3. Payments</h3>
            <p className="text-muted-foreground mb-4">
              Payments are handled directly between providers and patients. Medsta does 
              not charge commission on services but may offer optional premium features.
            </p>
          </div>
        </section>

        {/* Privacy Policy */}
        <section id="privacy" className="mb-12 pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-4">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">1. Information We Collect</h3>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly, such as name, contact details, 
              and health-related information necessary for service delivery.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">2. How We Use Information</h3>
            <p className="text-muted-foreground mb-4">
              Your information is used to connect you with healthcare providers, improve 
              our services, and communicate important updates.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">3. Data Security</h3>
            <p className="text-muted-foreground mb-4">
              We implement industry-standard security measures to protect your data from 
              unauthorized access, alteration, or disclosure.
            </p>
          </div>
        </section>

        {/* Data Protection */}
        <section id="data-protection" className="pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-4">
              Medsta is committed to protecting patient and provider data in compliance 
              with applicable Indian data protection laws.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">1. Data Storage</h3>
            <p className="text-muted-foreground mb-4">
              All data is stored on secure servers with encryption at rest and in transit.
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">2. Your Rights</h3>
            <p className="text-muted-foreground mb-4">
              You have the right to access, correct, or delete your personal information. 
              Contact us at privacy@medsta.in for any data-related requests.
            </p>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-muted-foreground mb-4">
            Questions about our policies? Contact us at{" "}
            <a href="mailto:legal@medsta.in" className="text-primary hover:underline">
              legal@medsta.in
            </a>
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
