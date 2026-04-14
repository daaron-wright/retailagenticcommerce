interface Props {
  onClick?: () => void;
  active?: boolean;
}

export function RedTooltip({ onClick, active }: Props) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick?.(); }}
      className="relative w-[40px] h-[49px] cursor-pointer group"
      style={{ background: "transparent", border: "none", padding: 0 }}
    >
      {/* Pulse ring when clickable */}
      {onClick && !active && (
        <div className="absolute left-[-4px] top-[-4px] w-[48px] h-[48px] rounded-full border-2 border-[#FF462D]/40 animate-ping" />
      )}
      {/* Main circle */}
      <svg className="absolute left-0 top-0 w-[40px] h-[40px] transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#FF462D" />
      </svg>
      {/* + / x icon */}
      <svg className="absolute left-[10px] top-[10px] w-[18px] h-[18px] transition-transform duration-200" fill="none" viewBox="0 0 17.9151 17.9157"
        style={{ transform: active ? "rotate(45deg)" : "rotate(0deg)" }}
      >
        <path d="M16.915 8.95801H1" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
        <path d="M8.95801 16.9157V1" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
      </svg>
      {/* Small dot below */}
      <svg className="absolute left-[18.82px] top-[47.5px] w-[1.93px] h-[1.93px]" fill="none" viewBox="0 0 1.92521 1.92521">
        <ellipse cx="0.962604" cy="0.962604" rx="0.962604" ry="0.962604" fill="#FF462D" />
      </svg>
      {/* Triangle pointer */}
      <div className="absolute left-[14.33px] top-[34.53px] w-[10.91px] h-[10.91px] flex items-center justify-center rotate-180">
        <svg width="9.45" height="8.18" viewBox="0 0 9.44792 8.18213" fill="none">
          <path d="M4.72396 0L9.44792 8.18213H0L4.72396 0Z" fill="#FF441F" />
        </svg>
      </div>
    </button>
  );
}
