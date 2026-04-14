// Phone mockup frame
import React from "react";

export function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[306px] h-[630px] rounded-[36px] bg-[#1a1a1a] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
      style={{ 
        border: "11px solid #0f0f0f", 
        boxShadow: "0 0 0 2px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.8)" 
      }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[108px] h-[22px] bg-[#0f0f0f] rounded-b-[14px] z-50 flex justify-center items-center">
         <div className="w-[36px] h-[3.5px] rounded-full bg-white/10 mt-1" />
      </div>
      {/* App Content Area */}
      <div className="w-full h-full relative z-10 bg-[#161618] rounded-[25px] overflow-hidden">
        {/* Status Bar Mockup */}
        <div className="w-full h-[36px] flex items-center justify-between px-5 pt-1 absolute top-0 left-0 z-40 text-white/90 drop-shadow-md mix-blend-difference">
          <span className="text-[11px] font-medium" style={{fontFamily: "'Open Sans', sans-serif"}}>9:41</span>
          <div className="flex gap-1.5 items-center">
            <svg width="14" height="10" viewBox="0 0 16 11" fill="none"><path d="M1 9.5H3V5.5H1V9.5ZM5 9.5H7V4H5V9.5ZM9 9.5H11V2H9V9.5ZM13 0.5V9.5H15V0.5H13Z" fill="currentColor"/></svg>
            <svg width="20" height="10" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="1.5" width="18" height="8" rx="2" stroke="currentColor"/><rect x="2" y="3" width="13" height="5" rx="1" fill="currentColor"/><path d="M20 4V7" stroke="currentColor" strokeLinecap="round"/></svg>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

// White explainer overlay card matching Connected Traveler Figma (Panel 010)
export function ExplainerCard({ text }: { text: string }) {
  return (
    <div className="bg-white rounded-[15px] p-[16px] w-[379px] shadow-lg border border-black/5">
      <p
        className="text-[#161616] text-[14px] leading-[24px] tracking-[0.0448px]"
        style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
      >
        {text}
      </p>
    </div>
  );
}