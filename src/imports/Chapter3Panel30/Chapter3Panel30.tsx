import svgPaths from "./svg-f4m6mdzl19";

function Artwork() {
  return (
    <div className="absolute contents inset-0" data-name="Artwork">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156.198 50">
        <g id="Group">
          <path d={svgPaths.p2e1d4000} fill="var(--fill-0, white)" id="Kyndryl logo TM" />
          <path d={svgPaths.p20ca2900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents font-['TWK_Everett:Regular',sans-serif] left-[calc(50%+0.5px)] not-italic text-black top-1/2">
      <p className="absolute leading-[24px] left-[calc(56.25%-129.63px)] text-[14px] top-[calc(50%-24px)] tracking-[0.0448px] w-[322px]">Modernize for today. Innovate for tomorrow. Secure everywhere.</p>
      <p className="-translate-x-full absolute leading-[28px] left-[calc(25%+172.5px)] text-[20px] text-right top-[393px] tracking-[0.064px] whitespace-nowrap">{`Why Kyndryl? `}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_44.14%_0.7%_44.22%]">
      <div className="absolute inset-[0_44.14%_0.7%_44.22%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7492 35.7492">
          <circle cx="17.8746" cy="17.8746" id="Ellipse 2" r="17.3746" stroke="var(--stroke-0, #F2F1EE)" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-[38.89%_49.28%_41.88%_49.43%] justify-center leading-[0] text-[#f2f1ee] text-[12px] text-center tracking-[-0.36px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[6.46px]">2</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_0.08%_0.7%_88.27%]">
      <div className="absolute inset-[0_0.08%_0.7%_88.27%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7492 35.7492">
          <circle cx="17.8746" cy="17.8746" fill="var(--fill-0, #F2F1EE)" id="Ellipse 2" r="17.8746" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-[38.89%_5.23%_41.88%_93.49%] justify-center leading-[0] text-[#042315] text-[12px] text-center tracking-[-0.36px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[6.46px]">3</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0_88.36%_0.7%_0]">
      <div className="absolute inset-[0_88.36%_0.7%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7492 35.7492">
          <circle cx="17.8746" cy="17.8746" id="Ellipse 2" r="17.3746" stroke="var(--stroke-0, #F2F1EE)" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-[38.89%_93.5%_41.88%_5.21%] justify-center leading-[0] text-[#f2f1ee] text-[12px] text-center tracking-[-0.36px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[6.46px]">1</p>
      </div>
    </div>
  );
}

export default function Chapter3Panel() {
  return (
    <div className="bg-[#ff462d] relative size-full" data-name="Chapter 3 - Panel 30">
      <div className="absolute h-[50px] left-[47px] top-[48px] w-[156.198px]" data-name="kyndryl ®">
        <Artwork />
      </div>
      <Group3 />
    </div>
  );
}