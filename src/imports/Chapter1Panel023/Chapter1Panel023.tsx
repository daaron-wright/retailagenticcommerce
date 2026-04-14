import svgPaths from "./svg-59oqdrtuuw";
import imgMariausbeckAMixedRaceWomanAround35YearsOld1 from "./b7a24300d885d2e81585d9063aae2e45c4b1b05d.png";
import { imgMariausbeckAMixedRaceWomanAround35YearsOld } from "./svg-b88xs";

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

function Notch() {
  return (
    <div className="absolute h-[20.599px] left-[53.56px] top-[-1.37px] w-[150.37px]" data-name="Notch">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.37 20.5986">
        <g id="Notch">
          <g id="Notch_2" />
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[7.784px] right-[10.07px] top-[11.9px] w-[45.771px]" data-name="Right Side">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.771 7.78353">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p6693640} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="0.68662" />
            <path d={svgPaths.p4631440} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p2bf50700} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p624e800} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          <path clipRule="evenodd" d={svgPaths.pb57a800} fill="var(--fill-0, black)" fillRule="evenodd" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[14.42px] top-[8.24px]" data-name="Left Side">
      <div className="absolute h-[14.419px] left-[14.42px] rounded-[24px] top-[8.24px] w-[37.077px]" data-name="_Time">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[7.614px] left-[calc(50%-0.23px)] top-[calc(50%+0.15px)] w-[19.518px]" data-name="9:41">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.518 7.61383">
            <g id="9:41">
              <path d={svgPaths.p38c6b700} fill="var(--fill-0, black)" />
              <path d={svgPaths.p1417f200} fill="var(--fill-0, black)" />
              <path d={svgPaths.p3e708000} fill="var(--fill-0, black)" />
              <path d={svgPaths.p1188000} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19.912px] items-center left-0 top-[246.49px] w-[269.842px]" data-name="Column">
      <div className="relative shrink-0 size-[27.465px]" data-name="Loader">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.9577 32.9577">
            <circle cx="16.4789" cy="16.4789" id="Outline" opacity="0.2" r="13.7324" stroke="var(--stroke-0, #5D5FEF)" strokeWidth="5.49296" />
          </svg>
        </div>
        <div className="absolute inset-[40%_-10%_-10%_40%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2254 19.2254">
            <path d={svgPaths.p3dde5300} id="Loading" stroke="var(--stroke-0, #5D5FEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.49296" />
          </svg>
        </div>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#282b3e] text-[9.613px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Please wait...
      </p>
    </div>
  );
}

function PleaseWait() {
  return (
    <div className="absolute bg-white h-[585px] overflow-clip right-[calc(12.5%+33.91px)] rounded-[14.991px] top-[124px] w-[269.842px]" data-name="Please wait...">
      <div className="absolute h-[30.211px] left-0 overflow-clip top-0 w-[269.842px]" data-name="Status Bar / iPhone X (or newer)">
        <Notch />
        <RightSide />
        <LeftSide />
      </div>
      <Column />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[47px] size-[128px] top-[141px]" data-name="Mask group">
      <div className="absolute left-[45.83px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.172px_0px] mask-size-[128px_128px] size-[133.578px] top-[141px]" data-name="mariausbeck_a_mixed_race_woman_around_35_years_old" style={{ maskImage: `url('${imgMariausbeckAMixedRaceWomanAround35YearsOld}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMariausbeckAMixedRaceWomanAround35YearsOld1} />
      </div>
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
          <circle cx="17.8746" cy="17.8746" id="Ellipse 2" r="17.3746" stroke="var(--stroke-0, #F2F1EE)" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-[38.89%_5.23%_41.88%_93.49%] justify-center leading-[0] text-[#f2f1ee] text-[12px] text-center tracking-[-0.36px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
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
          <circle cx="17.8746" cy="17.8746" fill="var(--fill-0, #F2F1EE)" id="Ellipse 2" r="17.8746" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-[38.89%_93.5%_41.88%_5.21%] justify-center leading-[0] text-[#042315] text-[12px] text-center tracking-[-0.36px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[6.46px]">1</p>
      </div>
    </div>
  );
}

function TrackerUi() {
  return (
    <div className="absolute inset-[0_46.86%_0_0]" data-name="Tracker-UI">
      <div className="absolute inset-[47.22%_55.7%_52.78%_11.73%]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 1">
            <path d="M0 0.5H43.6443H71.8221H100" id="Line 1" stroke="var(--stroke-0, #F2F1EE)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[47.22%_11.73%_52.78%_55.7%]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 1">
            <path d="M0 0.5H43.6443H71.8221H100" id="Line 2" stroke="var(--stroke-0, #F2F1EE)" />
          </svg>
        </div>
      </div>
      <Group />
      <Group2 />
      <Group1 />
    </div>
  );
}

export default function Chapter1Panel() {
  return (
    <div className="bg-white relative size-full" data-name="Chapter 1- Panel 023">
      <div className="absolute h-[1155px] left-[-528px] top-[-218px] w-[1732px]" data-name="mariausbeck_Remove_her_9c7d4125-a90f-4618-85e5-97d2ff7af9f7" />
      <div className="absolute bg-[rgba(0,0,0,0.55)] h-[834px] left-0 top-0 w-[1194px]" />
      <div className="absolute h-[50px] left-[47px] top-[48px] w-[156.198px]" data-name="kyndryl ®">
        <Artwork />
      </div>
      <PleaseWait />
      <p className="absolute font-['TWK_Everett:Regular',sans-serif] leading-[28px] left-[47px] not-italic text-[20px] text-white top-[calc(50%-76px)] tracking-[0.064px] w-[511px]">Emily reviews the final trip summary and she is ready to make the payment.</p>
      <MaskGroup />
      <div className="absolute h-[36px] left-[calc(37.5%+121.25px)] top-[750px] w-[577.749px]" data-name="Updated Nav">
        <div className="absolute inset-[2.78%_8.39%_9.72%_86.89%]" data-name="airplane">
          <div className="absolute inset-[-1.11%_-1.28%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 32.2">
              <path d={svgPaths.p6beba00} id="airplane" stroke="var(--stroke-0, #F2F1EF)" strokeLinejoin="round" strokeWidth="0.7" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.89%_28.5%_16.52%_67.16%]" data-name="tools">
          <div className="absolute inset-[0.7%_0_0.3%_0.8%]" data-name="it-service-01">
            <div className="absolute inset-[-1.41%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6 25.5">
                <path d={svgPaths.p243fbd00} id="it-service-01" stroke="var(--stroke-0, #F2F1EF)" strokeLinejoin="round" strokeWidth="0.7" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[-1.4%_-1.39%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8021 25.752">
              <path d={svgPaths.p27089b80} id="Vector" stroke="var(--stroke-0, #F2F1EF)" strokeLinejoin="round" strokeWidth="0.7" />
            </svg>
          </div>
        </div>
        <TrackerUi />
      </div>
    </div>
  );
}