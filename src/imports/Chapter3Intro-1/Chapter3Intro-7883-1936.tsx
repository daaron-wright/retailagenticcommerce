import svgPaths from "./svg-byjzhlf83n";

function Artwork() {
  return (
    <div className="absolute contents inset-0" data-name="Artwork">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202.271 64.7482">
        <g id="Group">
          <path d={svgPaths.p3dbd2100} fill="var(--fill-0, #FF462D)" id="Kyndryl logo TM" />
          <path d={svgPaths.p1be97980} fill="var(--fill-0, #FF462D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Chapter3Intro() {
  return (
    <div className="relative size-full" data-name="Chapter 3 Intro">
      <div className="absolute h-[1080px] left-0 top-[-0.44px] w-[1920px]">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/2d35eb85b8ab4bcea752edf0b5e3fd4a5665d5e5" />
        </video>
      </div>
      <div className="absolute h-[64.748px] left-[95px] top-[58px] w-[202.271px]" data-name="kyndryl ®">
        <Artwork />
      </div>
    </div>
  );
}