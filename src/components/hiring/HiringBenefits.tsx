import React from "react";
import { Lightbulb, Database, TrendingUp, Mail, Zap, Users } from "lucide-react";

export default function HiringBenefits() {
  const benefits = [
    {
      title: "Internship Certificate",
      description: "Receive an official certificate from Medsta upon successful completion of your program, valid for future careers.",
      icon: <Lightbulb className="w-6 h-6 text-[#8b5cf6]" />,
      iconBg: "bg-[#8b5cf6]/10",
      link: "#"
    },
    {
      title: "Performance Earnings",
      description: "Earn 40% of MEDSTA's profit on every sale and health camp you organize.",
      icon: <Database className="w-6 h-6 text-[#8b5cf6]" />,
      iconBg: "bg-[#8b5cf6]/10",
      link: "#"
    },
    {
      title: "Long-Term Income",
      description: "Get a 5% royalty on repeat orders from your customers, building passive income.",
      icon: <TrendingUp className="w-6 h-6 text-[#8b5cf6]" />,
      iconBg: "bg-[#8b5cf6]/10",
      link: "#"
    },
    {
      title: "Extra Benefits",
      description: "Enjoy low-cost healthcare support for you & your family through our partner providers.",
      icon: <Mail className="w-6 h-6 text-[#8b5cf6]" />,
      iconBg: "bg-[#8b5cf6]/10",
      link: "#"
    },
    {
      title: "Street-Smart Hostlers",
      description: "Join a vibrant community of driven individuals (students, freshers) who make things happen.",
      icon: <Zap className="w-6 h-6 text-[#8b5cf6]" />,
      iconBg: "bg-[#8b5cf6]/10",
      link: "#"
    },
    {
      title: "Confident Communicators",
      description: "We want people who are willing to talk, engage, and connect with people.",
      icon: <Users className="w-6 h-6 text-[#8b5cf6]" />,
      iconBg: "bg-[#8b5cf6]/10",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-[#d6f2fa]" id="benefits">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-slate-800 mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900">
            What You Get & Who You Are
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-[16px] md:rounded-2xl p-4 sm:p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left">
              <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-6 ${benefit.iconBg}`}>
                <div className="scale-75 md:scale-100">{benefit.icon}</div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#6b4c9a] mb-1.5 md:mb-2 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm leading-[1.3] md:leading-relaxed mb-3 md:mb-6 flex-1">
                {benefit.description}
              </p>
              <a href={benefit.link} className="inline-flex items-center text-[10px] md:text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Learn More <span className="ml-1 font-normal">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#stories"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0ee89f] hover:bg-[#0cd08f] text-white font-medium rounded-full transition-all duration-300 shadow-sm"
          >
            View All Hustle Stories
          </a>
        </div>
      </div>
    </section>
  );
}
