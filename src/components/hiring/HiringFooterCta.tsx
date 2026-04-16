import React from "react";

export default function HiringFooterCta() {
  return (
    <section className="py-20 md:py-28 bg-[#d6f2fa] text-center relative overflow-hidden" id="apply-footer">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Application Form Box */}
        <div className="relative w-full max-w-[500px] mb-12 sm:mb-16 mx-auto">
          {/* Main Card */}
          <div className="bg-[#bce9fa]/60 backdrop-blur-md border border-[#81cbf3] rounded-[16px] shadow-[0_0_30px_rgba(130,205,245,0.4)] pt-6 pb-8 px-4 sm:px-10 flex flex-col items-center z-10 relative relative group hover:shadow-[0_0_35px_rgba(130,205,245,0.5)] transition-all">
            
            {/* Title Pill */}
            <div className="bg-[#9bbffd]/80 rounded-full px-6 sm:px-8 py-1.5 mb-8 shadow-[0_4px_15px_rgba(130,175,250,0.4)] flex items-center justify-center">
              <h3 className="text-[#496cef] font-bold text-lg sm:text-xl tracking-tight px-1">
                APPLICATION FORM
              </h3>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[340px] mx-auto">
              <div className="flex items-center justify-center">
                <label className="w-[130px] text-right font-bold text-[10px] sm:text-[11px] text-slate-800 tracking-[0.2em] mr-2">
                  NAME :
                </label>
                <div className="flex-1 max-w-[180px] h-[18px] sm:h-5 bg-white rounded-full opacity-95 shadow-sm"></div>
              </div>
              <div className="flex items-center justify-center">
                <label className="w-[130px] text-right font-bold text-[10px] sm:text-[11px] text-slate-800 tracking-[0.2em] mr-2">
                  PHONE NUMBER :
                </label>
                <div className="flex-1 max-w-[180px] h-[18px] sm:h-5 bg-white rounded-full opacity-95 shadow-sm"></div>
              </div>
              <div className="flex items-center justify-center">
                <label className="w-[130px] text-right font-bold text-[10px] sm:text-[11px] text-slate-800 tracking-[0.2em] mr-2">
                  EMAIL :
                </label>
                <div className="flex-1 max-w-[180px] h-[18px] sm:h-5 bg-white rounded-full opacity-95 shadow-sm"></div>
              </div>
              <div className="flex items-center justify-center">
                <label className="w-[130px] text-right font-bold text-[10px] sm:text-[11px] text-slate-800 tracking-[0.2em] mr-2">
                  RESUME :
                </label>
                <div className="flex-1 max-w-[180px] h-[18px] sm:h-5 bg-white rounded-full opacity-95 shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-700 font-medium tracking-widest uppercase text-[11px] md:text-[13px] relative z-10 w-full">
          STOP WAITING FOR OPPORTUNITIES. START CREATING THEM.
        </p>
      </div>
    </section>
  );
}
