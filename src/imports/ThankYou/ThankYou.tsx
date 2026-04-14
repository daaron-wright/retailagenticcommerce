import svgPaths from "./svg-jke65rgk5j";
import imgWhiteBackgroundSm4 from "./dcf926ebfd4340fdb325fdcd540540b21f9376b5.png";

function Reschedule() {
  return (
    <div className="absolute contents left-[calc(37.5%+8.75px)] top-[526.37px]" data-name="reschedule">
      <div className="absolute h-[595.33px] left-[calc(37.5%+9px)] top-[527.37px] w-[571px]" data-name="white background_sm 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteBackgroundSm4} />
      </div>
      <div className="absolute h-[57.1px] left-[calc(37.5%+65.6px)] rounded-[25px] top-[937.99px] w-[457.793px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(18, 99, 4) 0%, rgb(18, 99, 4) 100%), linear-gradient(90deg, rgb(246, 247, 249) 0%, rgb(246, 247, 249) 100%)" }} />
      <p className="absolute font-['TWK_Everett:Medium',sans-serif] h-[33px] leading-[44px] left-[calc(50%+11px)] not-italic text-[#f6f7f9] text-[24px] top-[943.37px] w-[99px]">Confirm</p>
      <div className="-translate-x-1/2 absolute font-['TWK_Everett:Bold',sans-serif] h-[153px] leading-[0] left-[calc(37.5%+300px)] not-italic text-[32px] text-black text-center top-[697.37px] w-[516px] whitespace-pre-wrap">
        <p className="leading-[45px] mb-0">Thank you!</p>
        <p className="leading-[45px] mb-0">{`Your delivery and flu shot  `}</p>
        <p className="leading-[45px] mb-0">{`has been rescheduled `}</p>
        <p className="leading-[45px]">for 04/15/26</p>
      </div>
      <div className="absolute h-[36.246px] left-[calc(62.5%+3.67px)] top-[561.63px] w-[35.75px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7496 36.2461">
          <ellipse cx="17.8748" cy="18.123" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.4" id="Ellipse 48" rx="17.8748" ry="18.123" />
        </svg>
      </div>
      <p className="absolute font-['TWK_Everett:Regular',sans-serif] h-[21.847px] leading-[44px] left-[calc(62.5%+18.09px)] not-italic text-[16px] text-black top-[558.58px] w-[13.406px]">X</p>
      <p className="-translate-x-1/2 absolute font-['TWK_Everett:Regular',sans-serif] h-[48px] leading-[35px] left-[calc(37.5%+294px)] not-italic text-[#3d3c3c] text-[18px] text-center top-[884.37px] w-[406px]">You will receive an email confirmation shortly.</p>
      <div className="absolute left-[calc(50%+29.18px)] size-[49.652px] top-[627.17px]" data-name="checkmark">
        <div className="absolute inset-[6.25%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.4453 43.4453">
            <path d={svgPaths.p36b7c1d0} fill="var(--fill-0, #3D3C3C)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ThankYou() {
  return (
    <div className="border border-black border-solid relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="thank you">
      <Reschedule />
      <button className="absolute bg-[rgba(217,217,217,0)] block cursor-pointer h-[80px] left-[calc(37.5%+57.75px)] top-[930px] w-[476px]" />
    </div>
  );
}