import React from "react";

export default function HiringAbout() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="why-join-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Graphics/Image */}
          <div className="relative order-2 md:order-1 mt-6 md:mt-0">
             {/* Abstract circles */}
             <div className="absolute -left-16 -top-12 opacity-50 hidden md:block">
               <div className="w-56 h-56 rounded-full border border-slate-300"></div>
             </div>
             <div className="absolute left-10 -top-4 opacity-50 hidden md:block">
               <div className="w-40 h-40 rounded-full border border-slate-200"></div>
             </div>
             <div className="absolute -left-8 bottom-12 opacity-80 hidden md:block">
               <div className="w-24 h-24 rounded-full border border-[#5b21b6]"></div>
             </div>
             <div className="absolute left-12 -bottom-4 opacity-80 hidden md:block">
               <div className="w-16 h-16 rounded-full border border-[#5b21b6]"></div>
             </div>
             
             {/* Main Image Container */}
             <div className="relative z-10 w-full max-w-sm mx-auto aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team of hustlers" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Right Text */}
          <div className="max-w-xl order-1 md:order-2">
            <h3 className="text-[#639df3] font-medium text-sm lg:text-base mb-3">
              About The Role
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#639df3] mb-6 leading-tight">
              Partner With Our Hustlers in Lucknow Today
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
              Medsta is a disruptive healthcare platform dedicated to making quality health support accessible. We are building a team of street-smart individuals to expand our reach and deliver customized healthcare solutions directly to the community through innovative sales and health camps.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#0ee89f] hover:bg-[#0cd08f] text-white font-medium rounded-full transition-all duration-300 shadow-soft"
            >
              Discover the Hustle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
