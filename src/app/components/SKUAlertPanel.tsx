import { useState } from "react";

const F = "'Open Sans', sans-serif";

interface SKUAlertPanelProps {
  onResolve?: () => void;
}

const skuItems = [
  {
    name: "Yankee Candle: Large Jar Candles",
    sku: "SKU-3371",
    location: "Southeast DC",
    cover: "2 days cover remaining",
    priority: "high" as const,
  },
  {
    name: "Fancy Feast Wet Cat Food: 12pk",
    sku: "SKU-4482",
    location: "Southeast DC",
    cover: "2.1 days cover remaining",
    priority: "high" as const,
  },
  {
    name: "Dannon Greek Yogurt: 12pk",
    sku: "SKU-5590",
    location: "Southeast DC",
    cover: "1.9 days cover remaining",
    priority: "critical" as const,
  },
];

export function SKUAlertPanel({ onResolve }: SKUAlertPanelProps) {
  const [view, setView] = useState<"notification" | "detail">("notification");
  const [resolved, setResolved] = useState(false);

  const handleResolve = () => {
    setResolved(true);
    setTimeout(() => {
      if (onResolve) onResolve();
    }, 600);
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.25)]" style={{ width: 540 }}>
      {/* Red header */}
      <div className="sku-alert-header flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <p className="text-white text-[13px] font-semibold" style={{ fontFamily: F }}>
            {view === "notification"
              ? "Critical : Revenue Impact Due to Understock of SKUs"
              : "SKU Understock Alert, Action Required"}
          </p>
        </div>
        <button
          className="text-white/70 hover:text-white transition-colors cursor-pointer text-[16px] leading-none"
          onClick={() => setView("notification")}
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="bg-white">
        {view === "notification" ? (
          <div className="px-5 py-5">
            <p className="text-[#333] text-[13px] leading-[21px]" style={{ fontFamily: F }}>
              3 Critical SKUs at Southeast DC are understocked due to severe weather disruptions at key suppliers, combined with fuel price spikes.
            </p>

            <div className="sku-alert-impact-highlight mt-4 rounded-lg px-4 py-3">
              <p className="text-[#dc2626] text-[13px] font-semibold leading-[20px]" style={{ fontFamily: F }}>
                Projected revenue impact: $2.4M per day · Ordering window closes at 2:00 PM today.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <button
                onClick={() => setView("detail")}
                className="sku-alert-resolve-btn text-white text-[13px] font-semibold px-6 py-2.5 rounded-lg cursor-pointer transition-all"
                style={{ fontFamily: F }}
              >
                View Details & Resolve →
              </button>
              <button
                className="text-[#666] text-[13px] font-medium px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                style={{ fontFamily: F }}
              >
                Dismiss
              </button>
            </div>
          </div>
        ) : (
          <div className="px-5 py-5">
            {/* Overview section */}
            <div className="sku-alert-overview-box rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#dc2626] text-[11px] font-bold tracking-wider uppercase" style={{ fontFamily: F }}>
                  Overview
                </span>
                <span className="sku-alert-overview-dashes" />
                <span className="text-[#cc8844] text-[10px] font-semibold tracking-wider uppercase" style={{ fontFamily: F }}>
                  Supplier Risk Monitoring Agent
                </span>
              </div>

              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <span className="sku-alert-bullet mt-[7px]" />
                  <p className="text-[#333] text-[12px] leading-[18px]" style={{ fontFamily: F }}>
                    3 critical suppliers are disrupted because of the incoming severe weather and rising fuel prices.
                  </p>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="sku-alert-bullet mt-[7px]" />
                  <p className="text-[#333] text-[12px] leading-[18px]" style={{ fontFamily: F }}>
                    3 perishable SKUs coming from those 3 suppliers have been affected, are running low and are nearing expected reordering window.
                  </p>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="sku-alert-bullet-red mt-[7px]" />
                  <p className="text-[#dc2626] text-[12px] leading-[18px]" style={{ fontFamily: F }}>
                    Emergency reorder approval is required before the 2:00 PM cut-off.
                  </p>
                </li>
              </ul>
            </div>

            {/* SKUs section */}
            <div className="mt-5">
              <p className="text-[#333] text-[11px] font-bold tracking-wider uppercase mb-3" style={{ fontFamily: F }}>
                SKUs Requiring Attention
              </p>

              <div className="space-y-2.5">
                {skuItems.map((item, i) => (
                  <div
                    key={i}
                    className="sku-alert-sku-card rounded-xl px-4 py-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-[#222] text-[13px] font-bold" style={{ fontFamily: F }}>
                        {item.name}
                      </p>
                      <p className="text-[#888] text-[11px] mt-0.5" style={{ fontFamily: F }}>
                        {item.sku}, {item.location},{" "}
                        <span className="font-semibold text-[#555]">{item.cover}</span>
                      </p>
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                        item.priority === "critical"
                          ? "sku-alert-badge-critical"
                          : "sku-alert-badge-high"
                      }`}
                      style={{ fontFamily: F }}
                    >
                      {item.priority === "critical" ? "Critical Priority" : "High Priority"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <p className="text-[#888] text-[11px] leading-[17px] mt-4" style={{ fontFamily: F }}>
              Emergency reorder quantities calculated by the Inventory Analysis Agent. Click below to approve.
            </p>

            <button
              onClick={handleResolve}
              className="sku-alert-resolve-btn-full w-full text-white text-[15px] font-bold py-3.5 rounded-xl mt-4 cursor-pointer transition-all"
              style={{
                fontFamily: F,
                background: resolved ? "#16a34a" : "#dc2626",
                transform: resolved ? "scale(0.98)" : "scale(1)",
              }}
            >
              {resolved ? "✓ Resolving..." : "Resolve"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
