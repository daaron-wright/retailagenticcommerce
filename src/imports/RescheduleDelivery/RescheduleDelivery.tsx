import svgPaths from "./svg-hyu8dz7i4b";
import imgWhiteBackgroundSm7 from "./dcf926ebfd4340fdb325fdcd540540b21f9376b5.png";

function HomeDelivery() {
  return (
    <div className="absolute contents left-[calc(37.5%+8.75px)] top-[526.37px]" data-name="home delivery">
      <div className="absolute h-[595.33px] left-[calc(37.5%+9px)] top-[527.37px] w-[571px]" data-name="white background_sm 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteBackgroundSm7} />
      </div>
      <div className="absolute h-[57.1px] left-[calc(37.5%+65.6px)] rounded-[25px] top-[937.99px] w-[457.793px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 70, 45) 0%, rgb(255, 70, 45) 100%), linear-gradient(90deg, rgb(246, 247, 249) 0%, rgb(246, 247, 249) 100%)" }} />
      <p className="absolute font-['TWK_Everett:Medium',sans-serif] h-[24px] leading-[44px] left-[calc(50%+11px)] not-italic text-[#f6f7f9] text-[24px] top-[942.37px] w-[103px]">Confirm</p>
      <div className="-translate-x-1/2 absolute font-['TWK_Everett:Bold',sans-serif] h-[149px] leading-[0] left-[calc(37.5%+296px)] not-italic text-[#ff462d] text-[32px] text-center top-[690.37px] w-[492px] whitespace-pre-wrap">
        <p className="leading-[45px] mb-0">{`Due to the winter storm, `}</p>
        <p className="leading-[45px] mb-0">home delivery is unavailable.</p>
        <p className="leading-[45px] mb-0">{`You may pick your order up `}</p>
        <p className="leading-[45px]">in-store between 8am - 10pm.</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['TWK_Everett:Regular',sans-serif] h-[36px] leading-[25px] left-[calc(37.5%+302.5px)] not-italic text-[#3d3c3c] text-[16px] text-center top-[887.37px] w-[479px]">Would you like to reschedule your flu shot and delivery now?</p>
      <div className="absolute h-[36.246px] left-[calc(62.5%+3.67px)] top-[561.63px] w-[35.75px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7496 36.2461">
          <ellipse cx="17.8748" cy="18.123" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.4" id="Ellipse 48" rx="17.8748" ry="18.123" />
        </svg>
      </div>
      <p className="absolute font-['TWK_Everett:Regular',sans-serif] h-[21.847px] leading-[44px] left-[calc(62.5%+15.09px)] not-italic text-[16px] text-black top-[556.58px] w-[13.406px]">X</p>
      <div className="absolute left-[calc(50%+29.67px)] overflow-clip size-[49.652px] top-[627.17px]" data-name="warning">
        <div className="absolute bottom-[6.25%] left-[3.28px] top-[6.25%] w-[28.002px]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.4428 43.445">
            <path d={svgPaths.peefb580} fill="var(--fill-0, #3D3C3C)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function RescheduleDelivery() {
  return (
    <div className="border border-black border-solid relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="reschedule delivery">
      <HomeDelivery />
      <div className="absolute bg-[rgba(217,217,217,0)] h-[100px] left-[calc(37.5%+35.75px)] top-[920px] w-[506px]" />
    </div>
  );
}
