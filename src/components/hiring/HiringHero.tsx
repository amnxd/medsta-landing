import React from "react";

export default function HiringHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-8 items-center text-center md:text-left">
          {/* Text Content */}
          <div className="max-w-2xl mx-auto md:mx-0">
            <div className="text-slate-500 font-medium mb-4 md:mb-6">
              Welcome to Medsta
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#639df3] mb-4 md:mb-6">
              <span className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
                <span className="hidden md:inline">🚀</span> WE'RE HIRING <span className="md:hidden">🚀</span>
              </span>
              <span className="text-[#a4c5f9] block mt-1 md:mt-2 font-light">- MEDSTA</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-6 md:mb-8 font-medium max-w-sm md:max-w-lg mx-auto md:mx-0">
              Want to earn, learn, and actually build something meaningful?
            </p>
            
            {/* Mobile Apply Now Button */}
            <div className="mb-10 md:hidden flex justify-center">
               <a
                  href="#apply"
                  className="px-10 py-3.5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium rounded-full transition-all duration-300 shadow-soft text-lg"
                >
                  Apply Now
                </a>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#roles"
                className="w-full sm:w-auto px-8 py-3 bg-[#0ee89f] hover:bg-[#0cd08f] text-white font-medium rounded-full transition-all duration-300 shadow-soft hover:shadow-glass text-center whitespace-nowrap"
              >
                Explore Role
              </a>
              <a
                href="#apply"
                className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-slate-800 text-slate-800 hover:bg-slate-50 font-medium rounded-full transition-all duration-300 text-center whitespace-nowrap"
              >
                Hustle with Us
              </a>
            </div>
          </div>

          {/* Graphics */}
          <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center mt-4 md:mt-0 max-w-[340px] md:max-w-none mx-auto">
            {/* Abstract circles */}
            <div className="absolute inset-0 items-center justify-center pointer-events-none hidden md:flex">
              <div className="w-[450px] h-[450px] rounded-full border border-slate-200"></div>
              <div className="absolute w-[550px] h-[550px] rounded-full border border-slate-100"></div>
              <div className="absolute w-[650px] h-[650px] rounded-full border border-slate-50"></div>
            </div>
            
            {/* Display Box */}
            <div className="relative w-full h-full md:w-[340px] md:h-[360px] rounded-[32px] md:rounded-[32px] overflow-visible md:overflow-visible">
              
              <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-xl md:shadow-2xl bg-gradient-to-br from-slate-200 to-slate-300 border border-white/40">
                 <img
                    src="https://images.unsplash.com/photo-1573164574472-797ce4599b8d?auto=format&fit=crop&q=80&w=800"
                    alt="Professionals walking"
                    className="w-full h-full object-cover"
                 />
              </div>

              {/* Card 1 */}
              <div className="absolute -top-3 left-0 sm:-left-4 md:-left-20 md:top-2 origin-top-left scale-[0.8] sm:scale-90 md:scale-100 bg-white p-3 md:p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 md:gap-4 z-10 w-auto max-w-[200px] md:max-w-none">
                <div>
                  <div className="text-[#639df3] font-semibold text-base md:text-lg text-left leading-tight">40%+</div>
                  <div className="text-slate-600 text-[10px] md:text-xs mt-0.5 text-left">Profit Share Potential</div>
                </div>
                <div className="flex flex-row items-end gap-1 text-[#639df3]">
                  <div className="w-1 md:w-1.5 h-2.5 md:h-3 bg-[#639df3] rounded-t-sm"></div>
                  <div className="w-1 md:w-1.5 h-4 md:h-5 bg-[#639df3] rounded-t-sm"></div>
                  <div className="w-1 md:w-1.5 h-3 md:h-4 bg-[#639df3] rounded-t-sm"></div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="absolute -bottom-3 right-0 sm:-right-4 md:-bottom-8 md:-left-12 origin-bottom-right md:origin-bottom-left scale-[0.8] sm:scale-90 md:scale-100 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between gap-3 md:gap-4 z-10 md:w-auto">
                <div>
                  <div className="text-[#639df3] font-semibold text-base md:text-lg text-left leading-tight">5%</div>
                  <div className="text-slate-600 text-[10px] md:text-xs mt-0.5 text-left">Royalty on Repeat Orders</div>
                </div>
                <div className="text-[#639df3]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Mobile Buttons */}
          <div className="md:hidden flex flex-row items-center justify-center gap-3 mt-8 w-full max-w-[340px] mx-auto px-2">
             <a
               href="#roles"
               className="flex-1 px-2 py-3 bg-[#0ee89f] hover:bg-[#0cd08f] text-white font-medium rounded-full transition-all duration-300 shadow-soft text-center whitespace-nowrap text-[13px] sm:text-[14px]"
             >
               Explore Role
             </a>
             <a
               href="#apply"
               className="flex-1 px-2 py-3 bg-white border-2 border-slate-800 text-slate-800 hover:bg-slate-50 font-medium rounded-full transition-all duration-300 text-center whitespace-nowrap text-[13px] sm:text-[14px]"
             >
               Hustle with Us
             </a>
          </div>

        </div>
      </div>
    </section>
  );
}
