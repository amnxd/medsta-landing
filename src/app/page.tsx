import Link from "next/link";
import {
  Pill,
  TestTube,
  Stethoscope,
  Activity,
  Truck,
  Check,
  ArrowRight,
  Star,
  Shield,
  Clock,
  MapPin,
  Users,
  Building2,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import mlogo from "./mlogo.png";
import whatsappLogo from "@/app/whatsapp.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Pill,
    emoji: "💊",
    title: "Order Medicines",
    description: "Get medicines delivered or pick up from nearby stores.",
  },
  {
    icon: TestTube,
    emoji: "🧪",
    title: "Book Lab Tests",
    description: "Home sample collection from certified labs.",
  },
  {
    icon: Stethoscope,
    emoji: "👨‍⚕️",
    title: "Doctor Appointments",
    description: "Consult verified doctors online or offline.",
  },
  {
    icon: Activity,
    emoji: "🏥",
    title: "Physiotherapy",
    description: "Professional physiotherapy sessions at home.",
  },
  {
    icon: Truck,
    emoji: "🚚",
    title: "Medical Equipment",
    description: "Rent or buy medical equipment delivered to you.",
  },
];

const stats = [
  { value: "1+", label: "Providers" },
  { value: "24/7", label: "Service" },
  { value: "2", label: "Cities" },
  { value: "100+", label: "Users" },
];

const features = [
  {
    icon: Shield,
    title: "Verified Providers",
    description: "All healthcare providers are verified and trusted by the community.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get responses within minutes, not hours. Real humans, real care.",
  },
  {
    icon: MapPin,
    title: "Hyperlocal",
    description: "Connect with providers in your neighborhood for faster service.",
  },
];


const heroes = [
  {
    id: 1,
    title: "a",
    subtitle: "Trusted local pharmacy",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-40 w-40 items-center justify-center rounded-lg overflow-hidden">
                <Image src={mlogo} alt="Medsta logo" width={160} height={160} />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#providers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Partner with us
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {/* Login/Signup removed per request */}

              {/* Mobile menu (no JS) - kept inside right container so the middle links stay centered */}
              <details className="md:hidden relative">
                <summary className="list-none cursor-pointer flex items-center gap-2 p-2">
                  <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </summary>
                <div className="absolute right-0 mt-2 w-56 bg-background border rounded-lg shadow-md py-2 z-50">
                  <Link href="#services" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/20">Services</Link>
                  <Link href="/about" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/20">About</Link>
                  <Link href="#providers" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/20">Partner with us</Link>
                  <div className="border-t my-1" />
                </div>
              </details>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 pt-16 pb-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now serving 2 cities in India
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-6 hero-title">
              Healthcare.{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent hero-highlight">
                Fast. Local. Reliable.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 hero-sub">
              Order medicines, book doctors & tests — from verified providers near you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4 sm:px-0">
              <Button size="xl" variant="success" className="gap-2 hero-cta" asChild>
                <a href="https://api.whatsapp.com/send/?phone=918354070437&text=Hi+MedSta%2C+I+want+to+order+medicines+%2F+book+a+service.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <Image src={whatsappLogo} alt="WhatsApp" width={20} height={20} className="h-5 w-5" />
                  Order on WhatsApp
                </a>
              </Button>
              <Button size="xl" variant="outline" className="gap-2" asChild>
                <Link href="#services">
                  Explore Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto px-2 sm:px-0">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl text-foreground hero-stats-number">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What You Can Do with <span className="text-primary">MedSta</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access quality healthcare services from the comfort of your home
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">Medsta</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the unique healthcare needs of Tier 2 and Tier 3 cities. 
                That&apos;s why we&apos;ve built a platform that connects you with trusted local providers.
              </p>

              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-green-500/10 rounded-2xl p-8 lg:p-12">
                <div className="bg-background rounded-xl shadow-xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <Image src={whatsappLogo} alt="WhatsApp" width={40} height={40} className="object-contain" />
                          </div>
                    <div>
                      <h3 className="text-xl font-bold">Order on WhatsApp</h3>
                      <p className="text-muted-foreground">No apps. No forms. Just message.</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      "Medicine delivery & pickup",
                      "Doctor & lab bookings",
                      "Quick response from real humans",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" variant="success" className="w-full gap-2" asChild>
                    <a href="https://api.whatsapp.com/send/?phone=918354070437&text=Hi+MedSta%2C+I+want+to+order+medicines+%2F+book+a+service.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                      <Image src={whatsappLogo} alt="WhatsApp" width={20} height={20} />
                      Start Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MedSta Heroes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">MedSta Heroes</h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            {heroes.map((hero) => (
              <div key={hero.id} className="lg:col-span-1">
                <Card className="overflow-hidden">
                  <div
                    className="h-44 bg-cover bg-center rounded-t-md"
                    style={{ backgroundImage: `url('${hero.image}')` }}
                  />
                  <CardContent className="text-center bg-background/50 py-4">
                    <div className="text-2xl font-bold text-primary">{hero.title}</div>
                    <div className="text-sm text-muted-foreground">{hero.subtitle}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section id="providers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/20" />
              <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-white/20" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Are you a Healthcare Provider?
                </h2>
                <p className="text-white/90 mb-6 text-lg">
                  Join Medsta and reach thousands of patients in your city. 
                  No commission, no hidden fees. Just grow your practice.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
                    <a href="https://api.whatsapp.com/send/?phone=918354070437&text=Hi+MedSta%2C+I+want+to+order+medicines+%2F+book+a+service.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                      Learn More
                      <ChevronRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: "50+ Partner Clinics" },
                  { icon: Users, label: "1000+ Happy Patients" },
                  { icon: MapPin, label: "5+ Cities Covered" },
                  { icon: Clock, label: "24/7 Support" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/10 backdrop-blur rounded-lg p-4 text-center"
                  >
                    <item.icon className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex h-40 w-40 items-center justify-center rounded-lg overflow-hidden">
                  <Image src={mlogo} alt="Medsta logo" width={160} height={160} />
                </div>
              </Link>
              <p className="text-slate-400 text-sm">
                Healthcare made simple for Tier 2 and Tier 3 Indian cities.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#providers" className="hover:text-white transition-colors">Partner with us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="#services" className="hover:text-white transition-colors">Order Medicine</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Book Doctor</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Lab Tests</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/policies#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/policies#terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2026 Medsta. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@medsta.in"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+919876543210"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
                  <a
                href="https://api.whatsapp.com/send/?phone=918354070437&text=Hi+MedSta%2C+I+want+to+order+medicines+%2F+book+a+service.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Image src={whatsappLogo} alt="WhatsApp" width={20} height={20} className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
