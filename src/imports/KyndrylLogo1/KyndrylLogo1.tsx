import svgPaths from "./svg-rb1dce4upm";

function Group() {
  return (
    <div className="absolute inset-[0_0.64%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 357.692 115">
        <g id="Group">
          <path d={svgPaths.p15567f0} fill="var(--fill-0, white)" id="Kyndryl logo TM" />
          <path d={svgPaths.p10466900} fill="var(--fill-0, #FF462D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Artwork() {
  return (
    <div className="absolute contents inset-[0_0.64%_0_0]" data-name="Artwork">
      <Group />
    </div>
  );
}

function Kyndryl() {
  return (
    <div className="absolute contents inset-[0_0.64%_0_0]" data-name="kyndryl ®">
      <Artwork />
    </div>
  );
}

export default function KyndrylLogo() {
  return (
    <div className="relative size-full" data-name="kyndryl-logo 1">
      <Kyndryl />
    </div>
  );
}