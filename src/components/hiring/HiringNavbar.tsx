"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HiringNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Hiring", href: "/hiring" },
    { name: "Positions", href: "#positions" },
    { name: "Why Join Us", href: "#why-join-us" },
    { name: "Hustle Stories", href: "#hustle-stories" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0 mr-4">
          <div className="flex items-center justify-center mr-2">
            <img src="/logo.svg" alt="MEDSTA" className="w-8 h-8 md:w-10 md:h-10 block object-contain" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 transition-colors mt-0.5">
            MEDSTA
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-healthcare-blue-600 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#apply"
            className="flex items-center gap-2 text-sm font-medium bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-2.5 rounded-full shadow-soft hover:shadow-glass transition-all duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}
