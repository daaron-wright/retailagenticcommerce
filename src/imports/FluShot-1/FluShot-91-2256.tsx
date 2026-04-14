import svgPaths from "./svg-pyndl4s7pl";
import imgWhiteBackgroundSm1 from "./dcf926ebfd4340fdb325fdcd540540b21f9376b5.png";

function FluShot1() {
  return (
    <div className="absolute contents left-[calc(37.5%+8.75px)] top-[526px]" data-name="flu shot">
      <div className="absolute h-[595.33px] left-[calc(37.5%+9px)] top-[527px] w-[571px]" data-name="white background_sm 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteBackgroundSm1} />
      </div>
      <div className="absolute h-[57.1px] left-[calc(37.5%+65.6px)] rounded-[25px] top-[937.62px] w-[457.793px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(18, 99, 4) 0%, rgb(18, 99, 4) 100%), linear-gradient(90deg, rgb(246, 247, 249) 0%, rgb(246, 247, 249) 100%)" }} />
      <p className="absolute font-['TWK_Everett:Medium',sans-serif] h-[50px] leading-[44px] left-[calc(50%+7px)] not-italic text-[#f6f7f9] text-[24px] top-[944.63px] w-[122px]">Confirm</p>
      <div className="-translate-x-1/2 absolute font-['TWK_Everett:Bold',sans-serif] h-[121px] leading-[0] left-[calc(37.5%+293.5px)] not-italic text-[32px] text-black text-center top-[726.63px] w-[471px] whitespace-pre-wrap">
        <p className="leading-[45px] mb-0">{`Your flu shot is scheduled `}</p>
        <p className="leading-[45px] mb-0">for 9am on 04/07/26</p>
        <p className="leading-[45px]">with Harvest Pharmacy</p>
      </div>
      <div className="absolute left-[calc(50%+29.67px)] overflow-clip size-[49.652px] top-[626.8px]" data-name="calendar">
        <div className="absolute inset-[6.25%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.4453 43.4453">
            <path d={svgPaths.p39cc6ac0} fill="var(--fill-0, #3D3C3C)" id="Union" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[36.246px] left-[calc(62.5%+3.67px)] top-[561.26px] w-[35.75px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7496 36.2461">
          <ellipse cx="17.8748" cy="18.123" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.4" id="Ellipse 46" rx="17.8748" ry="18.123" />
        </svg>
      </div>
      <p className="absolute font-['TWK_Everett:Regular',sans-serif] h-[21.847px] leading-[44px] left-[calc(62.5%+16.09px)] not-italic text-[16px] text-black top-[557.43px] w-[13.406px]">X</p>
    </div>
  );
}

export default function FluShot() {
  return (
    <div className="border border-black border-solid relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="flu shot">
      <FluShot1 />
      <button className="absolute bg-[rgba(217,217,217,0)] block cursor-pointer h-[84px] left-[calc(37.5%+58.75px)] top-[922px] w-[464px]" />
      <button className="absolute bg-[rgba(217,217,217,0)] block cursor-pointer h-[74px] left-[calc(37.5%+59.75px)] top-[932px] w-[463px]" />
    </div>
  );
}