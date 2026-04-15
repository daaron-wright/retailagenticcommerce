import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { KyndrylLogoSVG, UpdatedNav } from "./UpdatedNav";
import { screens, Screen } from "./screens";
import { NotificationCard } from "./NotificationCard";
import { DashboardUI } from "./DashboardUI";
import { RedTooltip } from "./RedTooltip";
import { ExplainerCard, PhoneMockup } from "./PhoneMockup";
import { VoiceCommandBar } from "./VoiceCommandBar";
import { ControlTowerDashboard } from "./ControlTowerDashboard";
import { TimelapseBackground } from "./TimelapseBackground";
import { HarvestAppUI } from "./HarvestAppUI";
import KyndrylLogo from "../../imports/Kyndryl-1/Kyndryl-4-5263";
import KyndrylLogo2 from "../../imports/Kyndryl-2/Kyndryl-6-5325";
import KyndrylLogo1 from "../../imports/KyndrylLogo1/KyndrylLogo1";
import Chapter3Panel from "../../imports/Chapter3Panel30/Chapter3Panel30";
import Chapter3Panel32 from "../../imports/Chapter3Panel32-1/Chapter3Panel32-19-5969";
import KyndrylWhiteLogo from "../../imports/Kyndryl-3/Kyndryl-19-5998";
import { GlassNotification } from "./GlassNotification";
import { SKUAlertPanel } from "./SKUAlertPanel";
import { ReorderApprovalPanel } from "./ReorderApprovalPanel";
import { MonitorPlay } from "lucide-react";

const F = "'Open Sans', sans-serif";

function PersonaCircle({ src, size = 460 }: { src: string; size?: number }) {
  return (
    <div className="shrink-0 rounded-full overflow-hidden" style={{ width: size, height: size }}>
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function PersonaSmall({ src }: { src: string }) {
  return (
    <div className="w-[128px] h-[128px] rounded-full overflow-hidden">
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function GlassAlertNotification({ title, message, action, onAction }: { title: string; message: string; action: string; onAction?: () => void }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClicked(true);
    setTimeout(() => onAction?.(), 600);
  };
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 w-[360px] border border-white/10 space-y-3">
      <button className="w-full bg-red-500/15 border border-red-400/30 rounded-lg px-3 py-2 flex items-center gap-2 cursor-default" style={{ background: "none", backgroundColor: "rgba(239,68,68,0.15)" }}>
        <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
        <p className="text-red-300 text-[12px]" style={{ fontFamily: F, fontWeight: 600 }}>{title}</p>
      </button>
      <p className="text-white/70 text-[12px] leading-[18px]" style={{ fontFamily: F }}>{message}</p>
      <div className="pt-1">
        <button
          onClick={handleClick}
          className={`text-white text-[12px] py-2 px-5 rounded-full inline-block transition-all duration-300 cursor-pointer ${
            clicked
              ? "bg-gradient-to-b from-[#22c55e] to-[#16a34a]"
              : "bg-gradient-to-b from-[#5b6dde] to-[#273489] hover:from-[#6b7dee] hover:to-[#374499]"
          }`}
          style={{ fontFamily: F, fontWeight: 600 }}
        >
          {clicked ? "✓ Done" : action}
        </button>
      </div>
    </div>
  );
}

function AppUI({ type, onAction }: { type?: string; onAction?: () => void }) {
  const F2 = "'Open Sans', sans-serif";
  const [clicked, setClicked] = useState(false);
  const [selectedDate, setSelectedDate] = useState(14);
  const [quantities, setQuantities] = useState([2, 3, 1, 2]);
  const [checkedSuppliers, setCheckedSuppliers] = useState<boolean[]>([false, false, false]);
  const [loadingPhase, setLoadingPhase] = useState<"spin" | "done">("spin");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (type === "loading") {
      setLoadingPhase("spin");
      const t = setTimeout(() => setLoadingPhase("done"), 2200);
      return () => clearTimeout(t);
    }
  }, [type]);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClicked(true);
    setTimeout(() => { if (onAction) onAction(); }, 600);
  };

  const pillBase = "text-white text-[12px] py-2 px-5 rounded-full text-center inline-block transition-all duration-300 cursor-pointer";
  const pillActive = clicked
    ? "bg-gradient-to-b from-[#22c55e] to-[#16a34a]"
    : "bg-gradient-to-b from-[#5b6dde] to-[#273489] hover:from-[#6b7dee] hover:to-[#374499]";

  if (type === "loading") {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-[360px] flex flex-col items-center gap-3 border border-white/10">
        <div className="relative w-[24px] h-[24px]">
          {loadingPhase === "spin" ? (
            <>
              <svg className="w-full h-full animate-spin" viewBox="0 0 33 33" fill="none">
                <circle cx="16.5" cy="16.5" r="13.7" stroke="#5D5FEF" strokeWidth="5.5" opacity="0.2" />
              </svg>
              <svg className="absolute top-0 left-0 w-full h-full animate-spin" viewBox="0 0 33 33" fill="none" style={{ animationDuration: "1s" }}>
                <path d="M16.5 2.8A13.7 13.7 0 0 1 30.2 16.5" stroke="#5D5FEF" strokeWidth="5.5" strokeLinecap="round" />
              </svg>
            </>
          ) : (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" fill="#22c55e" />
              <path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <animate attributeName="stroke-dasharray" from="0 20" to="20 20" dur="0.4s" fill="freeze" />
              </path>
            </svg>
          )}
        </div>
        <p className="text-white/60 text-[12px] transition-all duration-300" style={{ fontFamily: F2 }}>
          {loadingPhase === "done" ? "Order processed" : "Processing order…"}
        </p>
      </div>
    );
  }

  if (type === "reschedule-confirm") {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 w-[360px] border border-white/10 space-y-3">
        <div className="bg-green-500/15 border border-green-400/30 rounded-lg px-4 py-3">
          <p className="text-green-300 text-[13px]" style={{ fontFamily: F2 }}>✓ Flu Shot — Rescheduled to next week</p>
        </div>
        <div className="bg-green-500/15 border border-green-400/30 rounded-lg px-4 py-3">
          <p className="text-green-300 text-[13px]" style={{ fontFamily: F2 }}>✓ Paper Towels Delivery — Rescheduled</p>
        </div>
        <div className="pt-1">
          <button onClick={handleButtonClick} className={`${pillBase} ${pillActive}`} style={{ fontFamily: F2 }}>
            {clicked ? "✓ Confirmed" : "Done"}
          </button>
        </div>
      </div>
    );
  }

  if (type === "date-picker") {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 w-[360px] border border-white/10 space-y-3">
        <p className="text-white text-[14px]" style={{ fontFamily: F2, fontWeight: 600 }}>Select Date & Time</p>
        <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-white/40" style={{ fontFamily: F2 }}>
          {["S","M","T","W","T","F","S"].map((d,i)=><div key={`h-${i}`}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[11px]" style={{ fontFamily: F2 }}>
          {Array.from({length:28},(_,i)=>(
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setSelectedDate(i); }}
              className={`py-1 rounded cursor-pointer transition-all duration-150 ${
                i === selectedDate
                  ? "bg-gradient-to-b from-[#5b6dde] to-[#273489] text-white scale-110"
                  : "text-white/60 hover:bg-white/10 hover:text-white/90"
              }`}
            >
              {i+1}
            </button>
          ))}
        </div>
        <div className="pt-1">
          <button onClick={handleButtonClick} className={`${pillBase} ${pillActive}`} style={{ fontFamily: F2 }}>
            {clicked ? "✓ Date Confirmed" : "Confirm Selection"}
          </button>
        </div>
      </div>
    );
  }

  if (type === "shopping-cart") {
    const items = [
      { name: "Batteries (24-pack)", price: 14.99 },
      { name: "Spring Water (Case)", price: 6.49 },
      { name: "Premium Dog Food", price: 28.99 },
      { name: "Pre-cooked Meals (6pk)", price: 24.99 },
    ];
    const total = items.reduce((sum, item, i) => sum + item.price * quantities[i], 0);

    const updateQty = (idx: number, delta: number, e: React.MouseEvent) => {
      e.stopPropagation();
      setQuantities(prev => prev.map((q, i) => i === idx ? Math.max(0, q + delta) : q));
    };

    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 w-[360px] border border-white/10 space-y-2">
        <p className="text-white text-[14px] mb-1" style={{ fontFamily: F2, fontWeight: 600 }}>Shopping Cart</p>
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between border border-white/10 rounded-lg px-3 py-2">
            <div className="flex-1">
              <p className="text-white/90 text-[12px]" style={{ fontFamily: F2 }}>{item.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={(e) => updateQty(i, -1, e)}
                  className="w-[20px] h-[20px] rounded-full bg-white/10 text-white/60 text-[11px] flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                >−</button>
                <span className="text-white/60 text-[11px] w-[16px] text-center" style={{ fontFamily: F2 }}>{quantities[i]}</span>
                <button
                  onClick={(e) => updateQty(i, 1, e)}
                  className="w-[20px] h-[20px] rounded-full bg-white/10 text-white/60 text-[11px] flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                >+</button>
              </div>
            </div>
            <p className="text-white/80 text-[12px]" style={{ fontFamily: F2 }}>${(item.price * quantities[i]).toFixed(2)}</p>
          </div>
        ))}
        <div className="border-t border-white/10 pt-2 flex justify-between">
          <span className="text-white/50 text-[12px]" style={{ fontFamily: F2 }}>Total</span>
          <span className="text-white text-[13px]" style={{ fontFamily: F2, fontWeight: 600 }}>${total.toFixed(2)}</span>
        </div>
        <div className="pt-1">
          <button onClick={handleButtonClick} className={`${pillBase} ${pillActive}`} style={{ fontFamily: F2 }}>
            {clicked ? "✓ Order Placed" : "Checkout"}
          </button>
        </div>
      </div>
    );
  }

  if (type === "approve-order") {
    const orders = [
      { name: "Candles (Emergency)", detail: "1,200 units", status: "critical" },
      { name: "Food (Perishable)", detail: "850 units", status: "critical" },
      { name: "Pet Food", detail: "420 units", status: "warning" },
    ];
    const toggleOrder = (idx: number, e: React.MouseEvent) => {
      e.stopPropagation();
      setCheckedSuppliers(prev => prev.map((v, i) => i === idx ? !v : v));
    };
    const handleExpand = (e: React.MouseEvent) => {
      e.stopPropagation();
      setExpanded(true);
    };

    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 w-[360px] border border-white/10 space-y-3">
        {/* Alert header — clickable to expand */}
        <button
          onClick={handleExpand}
          className={`w-full bg-red-500/15 border border-red-400/30 rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer transition-all hover:bg-red-500/25`}
          style={{ background: "none", backgroundColor: "rgba(239,68,68,0.15)" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <p className="text-red-300 text-[12px]" style={{ fontFamily: F2, fontWeight: 600 }}>Critical SKU Understock Alert</p>
          </div>
          <svg className={`w-3 h-3 text-red-300 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Expanded content */}
        <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="space-y-3">
            <p className="text-white text-[14px]" style={{ fontFamily: F2, fontWeight: 600 }}>Demand Approval</p>
            <div className="bg-blue-500/15 border border-blue-400/30 rounded-lg px-4 py-2">
              <p className="text-blue-300 text-[11px]" style={{ fontFamily: F2 }}>Planning Agent Recommendation</p>
            </div>
            <div className="space-y-2 text-[12px]" style={{ fontFamily: F2 }}>
              {orders.map((o, i) => (
                <button
                  key={i}
                  onClick={(e) => toggleOrder(i, e)}
                  className={`w-full flex justify-between items-center px-2 py-1.5 rounded-lg cursor-pointer transition-all duration-200 ${
                    checkedSuppliers[i] ? "bg-green-500/15 border border-green-400/30" : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span className="text-white/50 flex items-center gap-2">
                    <span className={`inline-block w-3 h-3 rounded-sm border transition-all flex items-center justify-center ${
                      checkedSuppliers[i] ? "bg-green-500 border-green-400" : "border-white/30"
                    }`}>
                      {checkedSuppliers[i] && <svg viewBox="0 0 12 12" className="w-2.5 h-2.5"><path d="M3 6l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>}
                    </span>
                    {o.name}
                  </span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full ${o.status === "critical" ? "bg-red-500/20 text-red-300" : "bg-amber-500/20 text-amber-300"}`} style={{ fontWeight: 600 }}>
                    {o.detail}
                  </span>
                </button>
              ))}
              <div className="flex justify-between px-2 pt-1 border-t border-white/10 mt-1">
                <span className="text-white/50">Fulfillment ETA</span>
                <span className="text-green-400">6-8 hours</span>
              </div>
            </div>
            <div className="pt-2">
              <button onClick={handleButtonClick} className={`${pillBase} ${pillActive}`} style={{ fontFamily: F2 }}>
                {clicked ? "✓ Demand Approved" : "Approve Demand"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "resolve") {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 w-[360px] border border-white/10 space-y-3">
        <div className="bg-red-500/15 border border-red-400/30 rounded-lg px-4 py-3">
          <p className="text-red-300 text-[13px]" style={{ fontFamily: F2, fontWeight: 600 }}>Revenue at Risk: $2.4M</p>
          <p className="text-red-300/70 text-[11px] mt-1" style={{ fontFamily: F2 }}>Stock across DCs and stores calculated</p>
        </div>
        <div className="space-y-2 text-[12px]" style={{ fontFamily: F2 }}>
          <div className="flex justify-between"><span className="text-white/50">DC Coverage</span><span className="text-amber-400">38%</span></div>
          <div className="flex justify-between"><span className="text-white/50">Store Coverage</span><span className="text-red-400">22%</span></div>
          <div className="flex justify-between"><span className="text-white/50">Risk Window</span><span className="text-red-400">Closes 2:00 PM</span></div>
        </div>
        <div className="pt-1">
          <button
            onClick={handleButtonClick}
            className={`text-white text-[12px] py-2 px-5 rounded-full inline-block transition-all duration-300 cursor-pointer ${
              clicked
                ? "bg-gradient-to-b from-[#22c55e] to-[#16a34a]"
                : "bg-gradient-to-b from-[#dc2626] to-[#991b1b] hover:from-[#ef4444] hover:to-[#b91c1c]"
            }`}
            style={{ fontFamily: F2, fontWeight: 600 }}
          >
            {clicked ? "✓ Resolving..." : "Resolve Now"}
          </button>
        </div>
      </div>
    );
  }

  if (type === "approve-reorder") {
    const suppliers = [
      { name: "Supplier A - SKU 1243", detail: "1,200 units — $18K" },
      { name: "Supplier B - SKU 6789", detail: "850 units — $12.7K" },
      { name: "Supplier C - SKU 9012", detail: "420 units — $7.5K" },
    ];
    const toggleSupplier = (idx: number, e: React.MouseEvent) => {
      e.stopPropagation();
      setCheckedSuppliers(prev => prev.map((v, i) => i === idx ? !v : v));
    };

    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 w-[360px] border border-white/10 space-y-3">
        <p className="text-white text-[14px]" style={{ fontFamily: F2, fontWeight: 600 }}>Emergency Reorder Plan</p>
        <div className="bg-blue-500/15 border border-blue-400/30 rounded-lg px-4 py-2">
          <p className="text-blue-300 text-[11px]" style={{ fontFamily: F2 }}>Inventory Analysis Agent + Logistics Agent</p>
        </div>
        <div className="space-y-2 text-[12px]" style={{ fontFamily: F2 }}>
          {suppliers.map((s, i) => (
            <button
              key={i}
              onClick={(e) => toggleSupplier(i, e)}
              className={`w-full flex justify-between items-center px-2 py-1.5 rounded-lg cursor-pointer transition-all duration-200 ${
                checkedSuppliers[i] ? "bg-green-500/15 border border-green-400/30" : "hover:bg-white/5"
              }`}
            >
              <span className="text-white/50 flex items-center gap-2">
                <span className={`inline-block w-3 h-3 rounded-sm border transition-all ${
                  checkedSuppliers[i] ? "bg-green-500 border-green-400" : "border-white/30"
                }`}>
                  {checkedSuppliers[i] && <svg viewBox="0 0 12 12" className="w-3 h-3"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" fill="none"/></svg>}
                </span>
                {s.name}
              </span>
              <span className="text-white/90">{s.detail}</span>
            </button>
          ))}
          <div className="flex justify-between px-2"><span className="text-white/50">ETA</span><span className="text-green-400">4-6 hours</span></div>
        </div>
        <div className="pt-1">
          <button onClick={handleButtonClick} className={`${pillBase} ${pillActive}`} style={{ fontFamily: F2 }}>
            {clicked ? "✓ Approved" : "Approve Recommendation"}
          </button>
        </div>
      </div>
    );
  }

  return null;
}

// Chapter route config
export const chapterRoutes: { path: string; label: string; chapterFilter: (s: Screen, i: number) => boolean; nextRoute?: string; prevRoute?: string }[] = [
  {
    path: "opening",
    label: "Opening",
    chapterFilter: (s) => s.id === "opening",
    nextRoute: "/chapter-1",
  },
  {
    path: "chapter-1",
    label: "Chapter 1",
    chapterFilter: (s) => s.chapter === 1 && s.id !== "opening",
    nextRoute: "/chapter-2",
    prevRoute: "/opening",
  },
  {
    path: "chapter-2",
    label: "Chapter 2",
    chapterFilter: (s) => s.chapter === 2,
    nextRoute: "/chapter-3",
    prevRoute: "/chapter-1",
  },
  {
    path: "chapter-3",
    label: "Chapter 3",
    chapterFilter: (s) => s.chapter === 3 && s.type !== "closing" && s.type !== "closingLogo",
    nextRoute: "/closing",
    prevRoute: "/chapter-2",
  },
  {
    path: "closing",
    label: "Closing",
    chapterFilter: (s) => s.type === "closing" || s.type === "closingLogo",
    prevRoute: "/chapter-3",
  },
];

export function SlideViewer({ chapterPath }: { chapterPath: string }) {
  const navigate = useNavigate();
  const routeConfig = chapterRoutes.find((r) => r.path === chapterPath)!;
  const chapterScreens = screens.filter((s, i) => routeConfig.chapterFilter(s, i));
  const totalSlides = screens.length;

  const [localIndex, setLocalIndex] = useState(0);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const screen = chapterScreens[localIndex];

  // Reset state when slide changes
  useEffect(() => {
    setTooltipOpen(false);
  }, [localIndex, chapterPath]);

  // Reset index when chapter changes (check for stored index from back-navigation)
  useEffect(() => {
    const stored = sessionStorage.getItem("slideIndex");
    if (stored) {
      setLocalIndex(Number(stored));
      sessionStorage.removeItem("slideIndex");
    } else {
      setLocalIndex(0);
    }
  }, [chapterPath]);

  const advance = useCallback(() => {
    if (localIndex < chapterScreens.length - 1) {
      setLocalIndex(localIndex + 1);
    } else {
      // Move to the first slide of the next chapter
      const globalIdx = screens.indexOf(chapterScreens[localIndex]);
      if (globalIdx < screens.length - 1) {
        const nextScreen = screens[globalIdx + 1];
        const nextRoute = chapterRoutes.find((r) => r.chapterFilter(nextScreen, globalIdx + 1));
        if (nextRoute) navigate("/" + nextRoute.path);
      }
    }
  }, [localIndex, chapterScreens, navigate]);

  const goBack = useCallback(() => {
    if (localIndex > 0) {
      setLocalIndex(localIndex - 1);
    } else {
      // Move to the last slide of the previous chapter
      const globalIdx = screens.indexOf(chapterScreens[0]);
      if (globalIdx > 0) {
        const prevScreen = screens[globalIdx - 1];
        const prevRoute = chapterRoutes.find((r) => r.chapterFilter(prevScreen, globalIdx - 1));
        if (prevRoute) {
          const prevChapterScreens = screens.filter((s, i) => prevRoute.chapterFilter(s, i));
          // Navigate and set index to last slide — use sessionStorage to pass the index
          sessionStorage.setItem("slideIndex", String(prevChapterScreens.length - 1));
          navigate("/" + prevRoute.path);
        }
      }
    }
  }, [localIndex, chapterScreens, navigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); advance(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goBack(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [advance, goBack]);

  if (!screen) return null;

  const globalIndex = screens.indexOf(screen);
  const isRedBg = screen.background === "red";
  const isSceneBg = screen.background === "scene" || screen.background === "dark" || screen.background === "storm";
  const isFirst = globalIndex === 0;
  const isLast = globalIndex === screens.length - 1;

  // Determine if explainer card should show based on tooltip state
  const hasOverlayCard = !!screen.overlayCard;
  const hasOverlayIframe = !!screen.overlayIframeUrl;
  const showExplainer = (hasOverlayCard || hasOverlayIframe) && tooltipOpen;

  // Determine persistent background video/image (lives outside AnimatePresence)
  const bgVideo = screen.backgroundVideo;
  const bgImage = screen.backgroundImage;
  const showBgVideo = !!bgVideo;
  const showBgImage = !bgVideo && bgImage && isSceneBg;

  // Reset video ready state when video source changes
  useEffect(() => {
    setVideoReady(false);
  }, [bgVideo]);

  const handleTooltipToggle = () => {
    if (hasOverlayCard || hasOverlayIframe) {
      setTooltipOpen(!tooltipOpen);
    }
  };

  const handleChapterClick = (chapter: number) => {
    const routeMap: Record<number, string> = { 1: "/chapter-1", 2: "/chapter-2", 3: "/chapter-3" };
    const target = routeMap[chapter];
    if (target && target !== `/${chapterPath}`) {
      navigate(target);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center transition-colors duration-500" style={{ backgroundColor: screen.backgroundVideo && (screen.backgroundVideo.includes("Screen_Recording") || screen.backgroundVideo.includes("chicago_trips")) ? "white" : "black" }}>
      <div className="relative w-full overflow-hidden" style={{ maxWidth: 1194, aspectRatio: "1194/834", backgroundColor: screen.backgroundVideo && (screen.backgroundVideo.includes("Screen_Recording") || screen.backgroundVideo.includes("chicago_trips")) ? "white" : "black" }}>
        {/* Persistent background video layer — lives outside AnimatePresence so it never restarts */}
        {showBgVideo && (
          <div className={`absolute inset-0 z-0 ${bgVideo?.includes("Screen_Recording") || bgVideo?.includes("chicago_trips") ? "bg-white" : ""}`}>
            <video
              key={bgVideo}
              autoPlay
              loop
              muted
              playsInline
              onCanPlay={() => setVideoReady(true)}
              className={`absolute inset-0 w-full h-full ${bgVideo?.includes("Screen_Recording") ? "object-contain" : "object-cover"} transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"} ${screen.chapter === 2 ? "saturate-50 contrast-75" : ""}`}
            >
              <source src={bgVideo} />
            </video>
          </div>
        )}
        {/* Persistent background image layer */}
        {showBgImage && (
          <img
            key={bgImage}
            src={bgImage}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover z-0 ${screen.chapter === 2 ? "saturate-50 contrast-75" : ""}`}
          />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={screen.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0"
          >
            {/* Background overlays */}
            <div className="absolute inset-0" style={{ background: isRedBg ? "#ff462d" : "transparent" }}>
              {screen.type === "opening" ? (
                <>
                  {!screen.backgroundVideo && <TimelapseBackground />}
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)] backdrop-blur-[0.5px]" />
                </>
              ) : screen.chapter === 3 ? (
                <>
                  {isSceneBg && <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />}
                  {screen.type === "chapterIntro" && <div className="absolute inset-0 backdrop-blur-2xl bg-[rgba(0,0,0,0.3)]" />}
                </>
              ) : (
                <>
                  {isSceneBg && <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />}
                  {screen.type === "chapterIntro" && <div className="absolute inset-0 backdrop-blur-2xl bg-[rgba(0,0,0,0.3)]" />}
                  {screen.id === "ch3-s11" && <div className="absolute inset-0 backdrop-blur-2xl bg-[rgba(0,0,0,0.3)]" />}
                  {!isRedBg && !isSceneBg && screen.type !== "closing" && screen.type !== "transition" && (
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />
                  )}
                </>
              )}
            </div>

            <div className="relative z-10 w-full h-full">
              {screen.type === "transition" && <div className="absolute inset-0" />}

              {/* Kyndryl Logo */}
              {screen.type !== "transition" && screen.type !== "closing" && screen.type !== "closingLogo" && (
                <div className="absolute left-[47px] top-[48px] w-[156px] h-[50px]">
                  <KyndrylLogoSVG color={screen.type === "chapterCard" ? "white" : isRedBg ? "black" : "white"} />
                </div>
              )}

              {/* Bottom Nav */}
              {screen.type !== "transition" && screen.type !== "closingLogo" && (
                <div className="absolute left-[calc(37.5%+121.25px)] top-[750px]">
                  <UpdatedNav activeChapter={screen.chapter} onChapterClick={handleChapterClick} />
                </div>
              )}

              {/* Voice Command Bar */}
              {screen.voiceCommand && (
                <div className="absolute right-[80px] top-[50px]">
                  <VoiceCommandBar text={screen.voiceCommand} />
                </div>
              )}

              {/* === OPENING === */}
              {screen.type === "opening" && (
                <div className="absolute left-[47px] bottom-[140px]">
                  <p className="text-white text-[48px] leading-[1.1]" style={{ fontFamily: F, fontWeight: 300 }}>
                    Agentic Orchestration Center
                  </p>
                </div>
              )}

              {/* === CHAPTER CARD (Red) === */}
              {screen.type === "chapterCard" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-start gap-[40px] max-w-[700px]">
                    <p className="text-black text-[20px] text-right whitespace-nowrap shrink-0" style={{ fontFamily: F, fontWeight: 400 }}>
                      {screen.title}
                    </p>
                    <div className="text-black text-[14px] leading-[24px] whitespace-pre-line" style={{ fontFamily: F, fontWeight: 400 }}>
                      {screen.body}
                    </div>
                  </div>
                </div>
              )}

              {/* === CHAPTER INTRO === */}
              {screen.type === "chapterIntro" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    {screen.title && <p className="text-white/60 text-[14px] tracking-[3px] uppercase mb-3" style={{ fontFamily: F, letterSpacing: "3px" }}>{screen.title}</p>}
                    <p className="text-white text-[48px] leading-[1.1]" style={{ fontFamily: F, fontWeight: 300 }}>{screen.subtitle}</p>
                  </div>
                </div>
              )}

              {/* === PERSONA === */}
              {screen.type === "persona" && screen.personaImage && (
                <>
                  <div className="absolute left-[47px] top-[187px]">
                    <PersonaCircle src={screen.personaImage} size={460} />
                  </div>
                  <p className="absolute text-white text-[20px] leading-[28px] tracking-[0.064px] w-[498px]"
                    style={{ fontFamily: F, fontWeight: 400, left: "calc(50% + 30px)", top: "calc(50% - 14px)" }}
                  >{screen.body}</p>
                </>
              )}

              {/* === NARRATIVE === */}
              {screen.type === "narrative" && (
                <>
                  {screen.personaSmall && screen.personaImage && (
                    <div className="absolute left-[47px] top-[141px]">
                      <PersonaSmall src={screen.personaImage} />
                    </div>
                  )}
                  <p className="absolute text-white text-[20px] leading-[28px] tracking-[0.064px] whitespace-pre-wrap"
                    style={{ fontFamily: F, fontWeight: 400, left: "47px", top: "calc(50% - 100px)", width: "485px" }}
                  >{screen.body}</p>

                  {/* RedTooltip + Explainer */}
                  {hasOverlayCard ? (
                    <>
                      <div className={`absolute transition-all duration-300 ${screen.chapter === 3 ? "left-[200px] top-[545px]" : "left-[calc(12.5%+101.75px)]"} ${screen.chapter !== 3 ? (showExplainer ? "top-[451px]" : "top-[533px]") : ""}`}>
                        <RedTooltip onClick={handleTooltipToggle} active={tooltipOpen} />
                      </div>
                      <div
                        className={`absolute transition-all duration-300 ${screen.chapter === 3 ? "left-[160px] top-[600px]" : "left-[86px] top-[524px]"}`}
                        style={{
                          opacity: showExplainer ? 1 : 0,
                          transform: showExplainer ? "scaleY(1)" : "scaleY(0)",
                          transformOrigin: "top",
                          pointerEvents: showExplainer ? "auto" : "none",
                        }}
                      >
                        <ExplainerCard text={screen.overlayCard!.text} />
                      </div>
                    </>
                  ) : null}

                  {screen.appUIType && (
                    <div className="absolute right-[calc(12.5%+28px)] top-1/2 -translate-y-1/2">
                      {(screen.chapter === 1 || screen.id === "ch3-s11") ? (
                        <div className="scale-[0.95] origin-right cursor-pointer" onClick={advance}>
                          <PhoneMockup>
                            <div className="w-full h-full relative">
                              <HarvestAppUI type={screen.appUIType} onAction={advance} />
                            </div>
                          </PhoneMockup>
                        </div>
                      ) : (
                        <AppUI type={screen.appUIType} onAction={advance} />
                      )}
                    </div>
                  )}
                </>
              )}

              {/* === NOTIFICATION === */}
              {screen.type === "notification" && (
                <>
                  {screen.personaSmall && screen.personaImage && (
                    <div className="absolute left-[47px] top-[141px]">
                      <PersonaSmall src={screen.personaImage} />
                    </div>
                  )}
                  <p className="absolute text-white text-[20px] leading-[28px] tracking-[0.064px] w-[485px] whitespace-pre-wrap"
                    style={{ fontFamily: F, fontWeight: 400, left: "47px", top: "calc(50% - 100px)" }}
                  >{screen.body}</p>
                  {screen.notificationCard && (
                    <div className={`absolute ${screen.chapter === 1 ? "right-[calc(12.5%+28px)] top-1/2 -translate-y-1/2" : "right-[80px] top-[138px]"}`}>
                      {screen.chapter === 1 ? (
                        <PhoneMockup>
                          <div className="w-full h-full flex flex-col justify-center items-center px-4">
                            <GlassNotification
                              icon={screen.notificationCard.icon}
                              title={screen.notificationCard.title}
                              message={screen.notificationCard.message}
                              action={screen.notificationCard.action}
                              onAction={advance}
                            />
                          </div>
                        </PhoneMockup>
                      ) : (
                        <GlassAlertNotification
                          title={screen.notificationCard.title}
                          message={screen.notificationCard.message}
                          action={screen.notificationCard.action}
                          onAction={advance}
                        />
                      )}
                    </div>
                  )}
                </>
              )}

              {/* === DASHBOARD === */}
              {screen.type === "dashboard" && (
                <>
                  {screen.personaSmall && screen.personaImage && (
                    <div className="absolute left-[47px] top-[141px]">
                      <PersonaSmall src={screen.personaImage} />
                    </div>
                  )}
                  <p className="absolute text-white text-[20px] leading-[28px] tracking-[0.064px] w-[485px] whitespace-pre-wrap"
                    style={{ fontFamily: F, fontWeight: 400, left: "47px", top: "calc(50% - 100px)" }}
                  >{screen.body}</p>

                  {/* RedTooltip + Explainer (overlay iframe or text) */}
                  {screen.overlayIframeUrl ? (
                    <>
                      <div className={`absolute transition-all duration-300 ${screen.chapter === 3 ? "left-[200px] top-[545px]" : "left-[calc(12.5%+101.75px)]"} ${screen.chapter !== 3 ? (showExplainer ? "top-[451px]" : "top-[533px]") : ""}`}>
                        <RedTooltip onClick={handleTooltipToggle} active={tooltipOpen} />
                      </div>
                      <div
                        className={`absolute transition-all duration-300 ${screen.chapter === 3 ? "left-[160px] top-[575px]" : "left-[86px] top-[524px]"}`}
                        style={{
                          opacity: showExplainer ? 1 : 0,
                          transform: showExplainer ? "scaleY(1)" : "scaleY(0)",
                          transformOrigin: "top",
                          pointerEvents: showExplainer ? "auto" : "none",
                        }}
                      >
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden" style={{ width: 420, height: 160 }}>
                          <video src="/src/imports/Screen_Recording_2026-04-09_at_12.48.10 PM.mp4" className="w-full h-full object-cover border-0" autoPlay loop muted playsInline title="CDP Dashboard" />
                        </div>
                      </div>
                    </>
                  ) : hasOverlayCard ? (
                    <>
                      <div className={`absolute transition-all duration-300 ${screen.chapter === 3 ? "left-[200px] top-[545px]" : "left-[calc(12.5%+101.75px)]"} ${screen.chapter !== 3 ? (showExplainer ? "top-[451px]" : "top-[533px]") : ""}`}>
                        <RedTooltip onClick={handleTooltipToggle} active={tooltipOpen} />
                      </div>
                      <div
                        className={`absolute transition-all duration-300 ${screen.chapter === 3 ? "left-[160px] top-[600px]" : "left-[86px] top-[524px]"}`}
                        style={{
                          opacity: showExplainer ? 1 : 0,
                          transform: showExplainer ? "scaleY(1)" : "scaleY(0)",
                          transformOrigin: "top",
                          pointerEvents: showExplainer ? "auto" : "none",
                        }}
                      >
                        <ExplainerCard text={screen.overlayCard!.text} />
                      </div>
                    </>
                  ) : null}

                  {/* Dashboard: custom panel, iframe, or DashboardUI */}
                  {screen.customPanel === "reorder-approval" ? (
                    <div className="absolute right-[40px] top-[100px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-[rgba(10,10,18,0.4)] flex flex-col" style={{ width: 580, maxHeight: 'calc(100% - 200px)' }}>
                      <div className="flex items-center justify-between px-4 h-[44px] border-b border-white/10 bg-white/[0.02]">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5b6dde] animate-pulse" />
                          <span className="text-white/90 text-[11px] tracking-wider uppercase" style={{ fontWeight: 600 }}>Agentic Orchestration Center</span>
                        </div>
                      </div>
                      <div className="flex-1 w-full relative overflow-auto bg-[#f5f5f5] p-4">
                        <ReorderApprovalPanel onNext={advance} />
                      </div>
                    </div>
                  ) : screen.customPanel === "sku-alert" ? (
                    <div className="absolute right-[40px] top-[100px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-[rgba(10,10,18,0.4)] flex flex-col" style={{ width: 580, maxHeight: 'calc(100% - 200px)' }}>
                      <div className="flex items-center justify-between px-4 h-[44px] border-b border-white/10 bg-white/[0.02]">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5b6dde] animate-pulse" />
                          <span className="text-white/90 text-[11px] tracking-wider uppercase" style={{ fontWeight: 600 }}>Agentic Orchestration Center</span>
                        </div>
                      </div>
                      <div className="flex-1 w-full relative overflow-auto bg-[#f5f5f5] p-4">
                        <SKUAlertPanel onResolve={advance} />
                      </div>
                    </div>
                  ) : screen.iframeUrl ? (
                    <div className="absolute right-[40px] top-[100px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-[rgba(10,10,18,0.4)] flex flex-col" style={{ width: 580, height: 620 }}>
                      {screen.id === "ch2-s3" ? (
                        <ControlTowerDashboard />
                      ) : (
                        <>
                          <div className="flex items-center justify-between px-4 h-[44px] border-b border-white/10 bg-white/[0.02]">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#5b6dde] animate-pulse" />
                              <span className="text-white/90 text-[11px] tracking-wider uppercase" style={{ fontWeight: 600 }}>{screen.iframeTitle || "Supply Chain Resolution Dashboard"}</span>
                            </div>
                            {screen.demoLink && (
                              <a href={screen.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors" title="Open Interactive Demo">
                                <span className="text-[10px] uppercase tracking-wider">Demo</span>
                                <MonitorPlay className="w-[14px] h-[14px]" />
                              </a>
                            )}
                          </div>
                          <div className="flex-1 w-full relative overflow-hidden bg-white">
                            <iframe 
                              src={screen.iframeUrl} 
                              className="absolute inset-0 w-full h-full border-0" 
                              style={screen.iframeZoom ? {
                                transform: `scale(${screen.iframeZoom})`,
                                transformOrigin: 'center center'
                              } : undefined}
                              title="Dashboard"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  ) : screen.dashboardData && (
                    <div className="absolute right-[80px] top-[138px]">
                      <DashboardUI metrics={screen.dashboardData.metrics} type={screen.dashboardData.type} title={screen.dashboardData.title} onAction={advance} />
                    </div>
                  )}
                </>
              )}

              {/* === DISRUPTION === */}
              {screen.type === "disruption" && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-[900px]">
                      <p className="text-[#ff462d] text-[14px] tracking-[3px] uppercase mb-3" style={{ fontFamily: F, letterSpacing: "3px" }}>Disruption</p>
                      <p className="text-white text-[48px] leading-[1.1]" style={{ fontFamily: F, fontWeight: 300 }}>{screen.title}</p>
                    </div>
                  </div>
                  {screen.disruptionImages && screen.disruptionImages.length > 0 && (
                    <div className="absolute right-[60px] bottom-[120px] z-10 flex gap-4">
                      {screen.disruptionImages.map((img, i) => (
                        <div key={i} className="w-[200px] aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group cursor-pointer">
                          <img src={img} alt="" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* === CLOSING === */}
              {screen.type === "closing" && (
                <div className="absolute inset-0 bg-[#ff462d]">
                  {/* Kyndryl Logo */}
                  <div className="absolute left-[47px] top-[48px] w-[156px] h-[50px]">
                    <KyndrylLogoSVG color="white" />
                  </div>
                  {/* "Why Kyndryl?" fixed higher */}
                  <p
                    className="absolute text-black text-[20px] text-right whitespace-nowrap"
                    style={{ fontFamily: "'TWK Everett', sans-serif", fontWeight: 400, right: "calc(50% + 20px)", top: "320px", letterSpacing: "0.064px", lineHeight: "28px" }}
                  >
                    {screen.title}
                  </p>
                  {/* Subtitle drops down from the title */}
                  <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    className="absolute text-black text-[14px] w-[322px]"
                    style={{ fontFamily: "'TWK Everett', sans-serif", fontWeight: 400, left: "calc(50% + 20px)", top: "326px", letterSpacing: "0.0448px", lineHeight: "24px" }}
                  >
                    {screen.subtitle}
                  </motion.p>
                </div>
              )}

              {/* === CLOSING LOGO === */}
              {screen.type === "closingLogo" && (
                <div className="absolute inset-0 bg-[#ff462d] flex flex-col items-center justify-center">
                  <div className="w-[266.6px] h-[85.5px]">
                    <KyndrylWhiteLogo />
                  </div>
                  <p className="text-white text-[24px] tracking-[0.5px] mt-[24px] w-[266.6px] text-center" style={{ fontFamily: "'TWK Everett Light', 'TWK Everett', 'DM Sans', 'Helvetica Neue', Arial, sans-serif", fontWeight: 300 }}>
                    The Heart of Progress
                  </p>
                </div>
              )}

              {/* Slide counter */}
              {screen.type !== "transition" && screen.type !== "closing" && screen.type !== "closingLogo" && (
                <div className="absolute left-[47px] bottom-[58px] text-[11px] tracking-wider"
                  style={{ fontFamily: F, color: isRedBg ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.35)" }}
                >
                  {globalIndex + 1} / {totalSlides}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-[54px] right-[47px] z-20 flex items-center gap-3">
          <button
            onClick={goBack}
            disabled={isFirst}
            className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all"
            style={{
              background: isFirst ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.12)',
              cursor: isFirst ? 'not-allowed' : 'pointer',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6L8 10" stroke={isFirst ? 'rgba(255,255,255,0.2)' : 'white'} strokeWidth="1.5" />
            </svg>
          </button>
          {isLast ? (
            <a
              href="https://unifiedaicontroltowerforretail.replit.app"
              target="_blank"
              rel="noreferrer"
              className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all hover:bg-white/20"
              style={{
                background: 'rgba(255,255,255,0.12)',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              title="Open Interactive Demo"
            >
              <MonitorPlay className="w-[16px] h-[16px] text-white" />
            </a>
          ) : (
            <button
              onClick={advance}
              className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all"
              style={{
                background: 'rgba(255,255,255,0.12)',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M4 2L8 6L4 10" stroke="white" strokeWidth="1.5" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
