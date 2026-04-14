import imgApplePhoneGreen1 from "./4670bf21b37e07fbd2f33e784d4e06e256924def.png";
import imgHhLogo5 from "./c39975f37dd43539eed9824ec768fb1fd756276d.png";

function AppOpen() {
  return (
    <div className="absolute contents left-[calc(31.25%+88.63px)] top-[40px]" data-name="app open">
      <div className="absolute h-[1302.506px] left-[calc(31.25%+89px)] top-[41px] w-[650px]" data-name="apple phone_green 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgApplePhoneGreen1} />
      </div>
      <div className="absolute left-[calc(43.75%+15.38px)] size-[316.731px] top-[511.59px]" data-name="HH_logo 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHhLogo5} />
      </div>
    </div>
  );
}

export default function HarvestApp() {
  return (
    <div className="border border-black border-solid relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="harvest app">
      <AppOpen />
    </div>
  );
}