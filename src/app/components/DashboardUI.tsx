import { useState } from "react";

interface Metric {
  label: string;
  value: string;
  status: "good" | "warning" | "critical";
}

interface Props {
  metrics: Metric[];
  type: string;
  title?: string;
  onAction?: () => void;
}

const F = "'Open Sans', sans-serif";

function PulsingDot({ color }: { color: string }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`} style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: color }} />
    </span>
  );
}

function MetricDetail({ metric }: { metric: Metric }) {
  const detailMap: Record<string, string[]> = {
    "SKU 1243 (Water)": ["Current Inventory: 300 units", "Daily Demand: +850 units", "Reorder Threshold Breached"],
    "SKU 6789 (Batteries)": ["Current Inventory: 150 units", "Daily Demand: +600 units", "Critical Shortage Expected"],
    "SKU 9012 (Generators)": ["Current Inventory: 12 units", "Daily Demand: +150 units", "High Value Risk"],
    "Impact on SKUs %": ["847 priority items affected", "High risk: 312 SKUs", "Medium risk: 535 SKUs"],
    "Inventory Levels": ["Stock depleted across 12 DCs", "Priority SKUs at 8% coverage", "Reorder threshold breached 4h ago"],
    "Logistics/Delivery": ["3 major routes disrupted", "Carrier capacity at 41%", "Avg delay: 6.2 hours"],
    "Warehouse/DC": ["2 DCs offline (weather)", "Picking efficiency down 62%", "Backlog: 2,400 orders"],
    "Supplier Forecast": ["7 suppliers non-responsive", "Lead time extended to 48h", "Alt. suppliers identified: 3"],
    "System Uptime": ["All primary systems online", "Failover tested 2h ago", "No incidents in 24h"],
    "Active Incidents": ["47 weather-related", "32 supply chain", "23 logistics delays"],
    "System Performance": ["CPU utilization: 78%", "Memory: 64% allocated", "Queue depth: 1,847"],
    "Avg Response Time": ["P50: 4.2 hours", "P95: 18.6 hours", "SLA breaches: 14"],
    "Root Cause": ["Category 3 winter storm", "12 counties affected", "Duration: 48-72 hours"],
    "Impacted SKUs": ["Water/beverages: 312", "Food/essentials: 298", "Medical/pharmacy: 237"],
    "Risk Window": ["Current time: 11:47 AM", "Decision deadline: 2:00 PM", "Auto-escalation at 1:30 PM"],
    "Revenue at Risk": ["Online channel: $1.4M", "In-store channel: $680K", "Pharmacy: $320K"],
  };
  const details = detailMap[metric.label] || ["Detailed analytics loading...", "Real-time data aggregation", "View full report →"];
  return (
    <div className="mt-2.5 space-y-1.5 text-[10px] text-white/60 border-t border-white/10 pt-2.5 text-left" style={{ fontFamily: F }}>
      {details.map((d, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-1 h-1 rounded-full ${metric.status === "critical" ? "bg-red-400" : metric.status === "warning" ? "bg-amber-400" : "bg-green-400"}`} />
          <span className="truncate">{d}</span>
        </div>
      ))}
    </div>
  );
}

export function DashboardUI({ metrics, type, title, onAction }: Props) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [actionTaken, setActionTaken] = useState(false);

  const toggleMetric = (i: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded(expanded === i ? null : i);
  };

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActionTaken(true);
    setTimeout(() => {
      if (onAction) onAction();
    }, 600);
  };

  const colors = {
    critical: { bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.3)", text: "#f87171", dot: "#ef4444" },
    warning: { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)", text: "#fbbf24", dot: "#f59e0b" },
    good: { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.3)", text: "#4ade80", dot: "#22c55e" },
  };

  return (
    <div className="w-[520px] bg-[rgba(10,10,18,0.4)] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#5b6dde] animate-pulse" />
          <span className="text-white/90 text-[11px] tracking-wider uppercase" style={{ fontFamily: F, fontWeight: 600 }}>{title || "System Overview"}</span>
        </div>
        <span className="text-white/30 text-[10px]" style={{ fontFamily: F }}>LIVE — Analysis</span>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((m, i) => {
            const c = colors[m.status];
            const isExpanded = expanded === i;
            return (
              <button
                key={i}
                onClick={(e) => toggleMetric(i, e)}
                className={`rounded-lg px-3 py-2.5 border text-left transition-all duration-200 cursor-pointer ${isExpanded ? "scale-[1.02]" : "hover:scale-[1.01]"}`}
                style={{ background: c.bg, borderColor: c.border }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white/50 text-[10px] uppercase tracking-wider truncate mr-2" style={{ fontFamily: F }}>{m.label}</span>
                  <PulsingDot color={c.dot} />
                </div>
                <p className="text-white text-[20px]" style={{ fontFamily: F, fontWeight: 600 }}>{m.value}</p>
                <p className="text-[9px] mt-0.5 text-white/30" style={{ fontFamily: F }}>{isExpanded ? "▲ Collapse" : "▼ Details"}</p>
                {isExpanded && <MetricDetail metric={m} />}
              </button>
            );
          })}
        </div>

        {type === "before" && (
          <div className="mt-2 flex gap-1.5 h-[40px]">
            {[40, 65, 30, 80, 55, 45, 70].map((h, i) => (
              <div key={i} className="flex-1 bg-red-500/40 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }} />
            ))}
          </div>
        )}
        
        {type === "planning" && (
          <div className="mt-2 flex items-end gap-1 h-[40px]">
            {[60, 45, 75, 50, 85, 40, 70, 55, 65].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm transition-all duration-500" style={{ height: `${h}%`, background: i > 5 ? "#5b6dde" : "rgba(255,255,255,0.2)" }} />
            ))}
          </div>
        )}

        {type === "incident" && (
          <button
            onClick={handleAction}
            className="mt-2 w-full p-3 rounded-lg text-left transition-all duration-300 cursor-pointer border"
            style={{
              background: actionTaken ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)",
              borderColor: actionTaken ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)",
            }}
          >
            <div className="flex items-center gap-2">
              <PulsingDot color={actionTaken ? "#22c55e" : "#ef4444"} />
              <p className="text-[12px] font-semibold" style={{ fontFamily: F, color: actionTaken ? "#4ade80" : "#f87171" }}>
                {actionTaken ? "✓ Action acknowledged — Escalating to resolution" : "CRITICAL: Action required before 2:00 PM"}
              </p>
            </div>
          </button>
        )}
      </div>
      
      {/* Footer */}
      <div className="px-4 pb-3 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <span className="text-[8px] text-white/20" style={{ fontFamily: F }}>SKUs affected: <span className="text-amber-400">847</span></span>
          <span className="text-[8px] text-white/20" style={{ fontFamily: F }}>Active agents: <span className="text-[#5b6dde]">3</span></span>
        </div>
        <span className="text-[8px] text-white/20" style={{ fontFamily: F }}>Updated just now</span>
      </div>
    </div>
  );
}