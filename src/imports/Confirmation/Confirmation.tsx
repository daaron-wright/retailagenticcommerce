import svgPaths from "./svg-74e8k1e295";
import imgWhiteBackgroundSm5 from "./dcf926ebfd4340fdb325fdcd540540b21f9376b5.png";

function InsulinOrder() {
  return (
    <div className="absolute contents left-[calc(37.5%+8.75px)] top-[526.37px]" data-name="insulin order">
      <div className="absolute h-[595.33px] left-[calc(37.5%+9px)] top-[527.37px] w-[571px]" data-name="white background_sm 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteBackgroundSm5} />
      </div>
      <div className="absolute h-[57.1px] left-[calc(37.5%+65.6px)] rounded-[25px] top-[937.99px] w-[457.793px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(18, 99, 4) 0%, rgb(18, 99, 4) 100%), linear-gradient(90deg, rgb(246, 247, 249) 0%, rgb(246, 247, 249) 100%)" }} />
      <p className="absolute font-['TWK_Everett:Medium',sans-serif] h-[52px] leading-[44px] left-[calc(50%-2px)] not-italic text-[#f6f7f9] text-[24px] top-[941px] w-[111px]">Confirm</p>
      <div className="-translate-x-1/2 absolute font-['TWK_Everett:Bold',sans-serif] h-[148.957px] leading-[0] left-[calc(37.5%+294.25px)] not-italic text-[32px] text-black text-center top-[720.37px] w-[473.185px]">
        <p className="leading-[45px] mb-0">Great!</p>
        <p className="leading-[45px] mb-0">Your prescription order of $35 will been added to</p>
        <p className="leading-[45px]">your cart at checkout.</p>
      </div>
      <div className="absolute h-[36.246px] left-[calc(62.5%+3.67px)] top-[561.63px] w-[35.75px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7496 36.2461">
          <ellipse cx="17.8748" cy="18.123" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.4" id="Ellipse 48" rx="17.8748" ry="18.123" />
        </svg>
      </div>
      <p className="absolute font-['TWK_Everett:Regular',sans-serif] h-[21.847px] leading-[44px] left-[calc(62.5%+16.09px)] not-italic text-[16px] text-black top-[558.58px] w-[13.406px]">X</p>
      <div className="absolute left-[calc(50%+29.67px)] size-[49.652px] top-[627.17px]" data-name="Select Icon">
        <div className="absolute inset-0 overflow-clip" data-name="Icon">
          <div className="absolute inset-[3.13%_6.25%_6.25%_3.13%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.9973 44.9973">
              <g id="Union">
                <path d={svgPaths.p33189c40} fill="var(--fill-0, #3D3C3C)" />
                <path clipRule="evenodd" d={svgPaths.p2720b100} fill="var(--fill-0, #3D3C3C)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p9021f80} fill="var(--fill-0, #3D3C3C)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Confirmation() {
  return (
    <div className="border border-black border-solid relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="confirmation">
      <InsulinOrder />
      <button className="absolute bg-[rgba(217,217,217,0)] block cursor-pointer h-[66px] left-[calc(37.5%+35.75px)] top-[928px] w-[495px]" />
    </div>
  );
}