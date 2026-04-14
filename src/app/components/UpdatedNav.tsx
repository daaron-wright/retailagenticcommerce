// Bottom navigation matching the Connected Traveler Figma design exactly
// Includes chapter tracker + tools icon + airplane icon

import Kyndryl from "../../imports/Kyndryl/Kyndryl";
import { DemoTooltip } from "./DemoTooltip";

const svgPaths = {
  p6beba00: "M19.25 12.85V9.74999M22.45 15.35V11.85M8.74999 9.74999V12.75L0.35 19.15V23.85L9.74999 18.35M5.65002 15.25V11.95M11.95 4.74999C11.95 3.24999 12.55 0.35 14.05 0.35C15.55 0.35 16.15 3.24999 16.15 4.74999V10.35L27.65 19.25V23.95L16.15 17.45V26.05L20.35 29.75V31.85L14.05 29.75L7.74999 31.85V29.75L11.95 26.05V4.74999Z",
  p243fbd00: "M14.15 8.65001L21.85 0.95C22.65 0.15 23.85 0.15 24.65 0.95C25.45 1.75 25.45 2.95002 24.65 3.75002L16.95 11.45M15.55 10.05L23.25 2.35002M3.64999 21.95L10.05 15.55M0.350001 23.75L1.74999 25.15L4.44998 22.75L2.74999 21.05L0.350001 23.75Z",
  p27089b80: "M15.851 18.626C15.151 20.426 15.551 22.426 16.951 23.926C18.451 25.426 20.751 25.826 22.651 24.926L19.351 21.626C18.751 21.026 18.751 19.926 19.351 19.326C19.951 18.726 21.051 18.726 21.651 19.326L24.951 22.626C25.851 20.726 25.551 18.526 23.951 16.926C22.551 15.526 20.451 15.126 18.651 15.826L9.95104 7.12597C10.651 5.32597 10.251 3.32598 8.85103 1.82598C7.35103 0.325978 5.05102 -0.0740222 3.15102 0.825978L6.45104 4.12597C7.05104 4.72597 7.05104 5.82598 6.45104 6.42598C5.85104 7.02598 4.75102 7.02598 4.15102 6.42598L0.851034 3.12597C-0.0489657 5.02597 0.251034 7.22598 1.85103 8.82598C3.25103 10.226 5.35102 10.626 7.15102 9.92598L15.851 18.626Z",
};

export function KyndrylLogoSVG({ color = "white" }: { color?: string }) {
  // Use the Figma-imported Kyndryl logo component
  // Apply filter for black color when needed
  return (
    <div 
      className="w-[156px] h-[50px]"
      style={{ 
        filter: color === "black" ? "invert(1)" : "none"
      }}
    >
      <Kyndryl />
    </div>
  );
}

function TrackerCircle({ num, active, onClick }: { num: number; active: boolean; onClick?: () => void }) {
  return (
    <div className="relative w-[36px] h-[36px] cursor-pointer" onClick={onClick}>
      <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 35.7492 35.7492">
        {active ? (
          <circle cx="17.8746" cy="17.8746" r="17.8746" fill="#F2F1EE" />
        ) : (
          <circle cx="17.8746" cy="17.8746" r="17.3746" stroke="#F2F1EE" />
        )}
      </svg>
      <div
        className={`absolute inset-0 flex items-center justify-center text-[12px] tracking-[-0.36px] uppercase ${
          active ? "text-[#042315]" : "text-[#f2f1ee]"
        }`}
        style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}
      >
        {num}
      </div>
    </div>
  );
}

function ConnectorLine() {
  return (
    <svg width="100" height="1" viewBox="0 0 100 1" fill="none" className="shrink-0">
      <path d="M0 0.5H100" stroke="#F2F1EE" />
    </svg>
  );
}

export function UpdatedNav({ activeChapter = 1, color = "#F2F1EF", onChapterClick }: { activeChapter?: number; color?: string; onChapterClick?: (chapter: number) => void }) {
  return (
    <div className="flex items-center gap-[30px]">
      {/* Tracker */}
      <div className="flex items-center">
        <TrackerCircle num={1} active={activeChapter === 1} onClick={() => onChapterClick?.(1)} />
        <ConnectorLine />
        <TrackerCircle num={2} active={activeChapter === 2} onClick={() => onChapterClick?.(2)} />
        <ConnectorLine />
        <TrackerCircle num={3} active={activeChapter === 3} onClick={() => onChapterClick?.(3)} />
      </div>
      <DemoTooltip 
        href="https://lg-kyn-unified-cdp.lemonriver-6b4673f8.centralindia.azurecontainerapps.io" 
        color={color}
      />
      {/* Storefront icon */}
      <div className="relative w-[28px] h-[28px]">
        <svg className="block w-full h-full" fill="none" viewBox="0 0 24 24">
          <path d="M3 9l1.5-5h15L21 9" stroke={color} strokeLinejoin="round" strokeWidth="0.7" />
          <path d="M3 9c0 1.5 1.2 3 3 3s3-1.5 3-3c0 1.5 1.2 3 3 3s3-1.5 3-3c0 1.5 1.2 3 3 3s3-1.5 3-3" stroke={color} strokeLinejoin="round" strokeWidth="0.7" />
          <path d="M5 12v8a2 2 0 002 2h10a2 2 0 002-2v-8" stroke={color} strokeLinejoin="round" strokeWidth="0.7" />
          <path d="M10 22v-6h4v6" stroke={color} strokeLinejoin="round" strokeWidth="0.7" />
        </svg>
      </div>
    </div>
  );
}