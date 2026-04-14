import svgPaths from "./svg-72jw9ytbw8";

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

export default function Kyndryl() {
  return (
    <div className="relative size-full" data-name="kyndryl ®">
      <Artwork />
    </div>
  );
}