import Link from "next/link";
import Image from "next/image";
import mlogo from "@/app/mlogo.png";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-40 w-40 items-center justify-center rounded-lg overflow-hidden">
                  <Image src={mlogo} alt="Medsta logo" width={160} height={160} />
                </div>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#009cfb] mb-2">🏥 Medsta Legal Policies</h1>
          <p className="text-sm text-slate-600">Medsta Private Limited — Effective Date: October 2025</p>
        </header>

        <nav className="bg-slate-50 border rounded-lg p-4 mb-8">
          <ul className="flex flex-wrap gap-3 justify-center text-sm">
            <li><a href="#terms" className="px-3 py-2 rounded hover:bg-slate-100 text-slate-700">Terms & Conditions</a></li>
            <li><a href="#privacy" className="px-3 py-2 rounded hover:bg-slate-100 text-slate-700">Privacy Policy</a></li>
            <li><a href="#payment" className="px-3 py-2 rounded hover:bg-slate-100 text-slate-700">Payments</a></li>
            <li><a href="#delivery" className="px-3 py-2 rounded hover:bg-slate-100 text-slate-700">Delivery</a></li>
            <li><a href="#returns" className="px-3 py-2 rounded hover:bg-slate-100 text-slate-700">Returns</a></li>
            <li><a href="#contact" className="px-3 py-2 rounded hover:bg-slate-100 text-slate-700">Contact Us</a></li>
          </ul>
        </nav>

        <section id="terms" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">1️⃣ Terms & Conditions</h2>
          <p className="text-slate-700 mb-4">Last updated: October 1, 2025</p>
          <div className="prose prose-slate max-w-none text-slate-700">
            <p>Welcome to Medsta. These Terms & Conditions govern your use of our platform and services. By accessing or using Medsta, you agree to these terms.</p>
            <h3>Eligibility</h3>
            <p>Users must be at least 18 years old and able to form binding contracts under applicable law.</p>
            <h3>Platform Use</h3>
            <p>Medsta connects patients with independent healthcare providers. Medsta does not provide medical advice; providers are responsible for clinical services.</p>
            <h3>Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, Medsta is not liable for indirect, incidental, or consequential damages arising from use of the platform.</p>
          </div>
        </section>

        <section id="privacy" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">2️⃣ Privacy Policy</h2>
          <div className="prose prose-slate max-w-none text-slate-700">
            <p>We collect personal information to provide services, including contact details and health-related information where necessary. We process data lawfully, securely and only for stated purposes.</p>
            <h3>Information We Collect</h3>
            <p>Data provided directly (name, email, phone), data from providers, and usage analytics.</p>
            <h3>How We Use Data</h3>
            <p>To connect patients with providers, process appointments and payments, and maintain service quality.</p>
            <h3>Your Rights</h3>
            <p>You may access, correct, or delete your data. Contact privacy@medsta.in for requests.</p>
          </div>
        </section>

        <section id="payment" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">3️⃣ Payments</h2>
          <div className="prose prose-slate max-w-none text-slate-700">
            <p>Payments for services (consultations, tests, medicines) are processed via our payment partners. By making a payment you authorize the transaction and accept applicable fees.</p>
            <h3>Refunds</h3>
            <p>Refunds are handled per the provider's policy and applicable laws. Medsta may facilitate refunds but is not the primary party for refunds unless explicitly stated.</p>
            <h3>Security</h3>
            <p>We do not store full payment card details on our servers. Payment processing is handled by PCI-compliant third-party providers.</p>
          </div>
        </section>

        <section id="delivery" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">4️⃣ Delivery</h2>
          <div className="prose prose-slate max-w-none text-slate-700">
            <p>Delivery of medicines and products is managed by logistics partners. Delivery times and charges depend on the provider and location.</p>
            <h3>Tracking</h3>
            <p>Where available, tracking information will be provided to the customer after dispatch.</p>
            <h3>Delays</h3>
            <p>Medsta is not responsible for delays caused by third-party carriers, natural events, or force majeure.</p>
          </div>
        </section>

        <section id="returns" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">5️⃣ Returns</h2>
          <div className="prose prose-slate max-w-none text-slate-700">
            <p>Returns and cancellations are managed in accordance with the provider's policy and applicable regulations. Certain medical products may not be eligible for return.</p>
            <h3>Cancellations</h3>
            <p>Cancellations are subject to provider terms. If eligible for a refund, timelines will depend on payment partner processing times.</p>
          </div>
        </section>

        <section id="contact" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">6️⃣ Contact Us</h2>
          <div className="prose prose-slate max-w-none text-slate-700">
            <p>If you have any questions or concerns, please contact:</p>
            <p className="mt-2">Medsta Private Limited</p>
            <p>Barabanki, Uttar Pradesh, India</p>
            <p>📧 Email: <a href="mailto:medsta.in8@gmail.com" className="text-[#009cfb] hover:underline">medsta.in8@gmail.com</a></p>
            <p>🌐 Website: <a href="https://www.medsta.in" className="text-[#009cfb] hover:underline">www.medsta.in</a></p>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t text-center">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
