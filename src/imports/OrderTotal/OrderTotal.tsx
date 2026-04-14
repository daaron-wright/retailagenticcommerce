import imgWhiteBackgroundSm6 from "./dcf926ebfd4340fdb325fdcd540540b21f9376b5.png";

function OrderSummary() {
  return (
    <div className="absolute contents left-[calc(37.5%+8.75px)] top-[526.37px]" data-name="order summary">
      <div className="absolute h-[595.33px] left-[calc(37.5%+9px)] top-[527.37px] w-[571px]" data-name="white background_sm 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteBackgroundSm6} />
      </div>
      <div className="absolute h-[57.1px] left-[calc(37.5%+65.6px)] rounded-[25px] top-[937.99px] w-[457.793px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(18, 99, 4) 0%, rgb(18, 99, 4) 100%), linear-gradient(90deg, rgb(246, 247, 249) 0%, rgb(246, 247, 249) 100%)" }} />
      <p className="absolute font-['TWK_Everett:Medium',sans-serif] h-[22px] leading-[44px] left-[calc(43.75%+72px)] not-italic text-[#f6f7f9] text-[24px] top-[944.37px] w-[204px]">Place your order</p>
      <div className="absolute font-['TWK_Everett:Regular',sans-serif] h-[345px] leading-[0] left-[calc(37.5%+73px)] not-italic text-[0px] text-black top-[616.37px] w-[222px]">
        <p className="font-['TWK_Everett:Bold',sans-serif] leading-[45px] mb-0 text-[24px]">Order summary</p>
        <p className="leading-[45px] mb-0 text-[24px]">Subtotal</p>
        <p className="leading-[45px] mb-0 text-[24px]">Shipping</p>
        <p className="leading-[45px] mb-0 text-[24px]">Estimated taxes</p>
        <p className="font-['TWK_Everett:Bold',sans-serif] leading-[45px] mb-0 text-[24px]">Total</p>
        <p className="leading-[45px] text-[24px]">&nbsp;</p>
      </div>
      <div className="-translate-x-1/2 absolute font-['TWK_Everett:Regular',sans-serif] h-[73px] leading-[0] left-[calc(37.5%+298px)] not-italic text-[16px] text-black text-center top-[866.37px] w-[450px] whitespace-pre-wrap">
        <p className="leading-[25px] mb-0">{`Order confirmation and receipt will `}</p>
        <p className="leading-[25px]">be emailed to your email on file</p>
      </div>
      <div className="-translate-x-full absolute font-['TWK_Everett:Regular',sans-serif] h-[363px] leading-[0] left-[calc(50%+279px)] not-italic text-[0px] text-black text-right top-[616.37px] w-[223px]">
        <p className="font-['TWK_Everett:Bold',sans-serif] leading-[45px] mb-0 text-[24px] text-white">Order summary</p>
        <p className="mb-0 text-[24px]">
          <span className="leading-[45px]">$12</span>
          <span className="leading-[45px]">2.28</span>
        </p>
        <p className="leading-[45px] mb-0 text-[24px]">Free</p>
        <p className="mb-0 text-[24px]">
          <span className="leading-[45px]">$4.</span>
          <span className="leading-[45px]">17</span>
        </p>
        <p className="font-['TWK_Everett:Bold',sans-serif] leading-[45px] mb-0 text-[24px]">$126.45</p>
        <p className="leading-[45px] text-[24px]">&nbsp;</p>
      </div>
      <div className="absolute h-[36.246px] left-[calc(62.5%+3.67px)] top-[561.63px] w-[35.75px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7496 36.2461">
          <ellipse cx="17.8748" cy="18.123" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.4" id="Ellipse 48" rx="17.8748" ry="18.123" />
        </svg>
      </div>
      <p className="absolute font-['TWK_Everett:Regular',sans-serif] h-[21.847px] leading-[44px] left-[calc(62.5%+17.1px)] not-italic text-[16px] text-black top-[558.58px] w-[13.406px]">X</p>
      <button className="absolute bg-[rgba(217,217,217,0)] block cursor-pointer h-[80px] left-[calc(37.5%+36px)] top-[933px] w-[518px]" />
    </div>
  );
}

export default function OrderTotal() {
  return (
    <div className="border border-black border-solid relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="order total">
      <OrderSummary />
    </div>
  );
}