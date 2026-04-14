import { useState, useEffect } from "react";

const F = "'Open Sans', sans-serif";

function PulsingDot({ color }: { color: string }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`} style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: color }} />
    </span>
  );
}

function KPICard({ label, value, delta, status }: { label: string; value: string; delta: string; status: "red" | "amber" | "green" }) {
  const colors = {
    red: { bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.3)", text: "#f87171", dot: "#ef4444" },
    amber: { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)", text: "#fbbf24", dot: "#f59e0b" },
    green: { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.3)", text: "#4ade80", dot: "#22c55e" },
  };
  const c = colors[status];
  return (
    <div className="rounded-lg px-3 py-2.5 border" style={{ background: c.bg, borderColor: c.border }}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-white/50 text-[10px] uppercase tracking-wider" style={{ fontFamily: F }}>{label}</span>
        <PulsingDot color={c.dot} />
      </div>
      <p className="text-white text-[18px]" style={{ fontFamily: F, fontWeight: 600 }}>{value}</p>
      <p className="text-[10px] mt-0.5" style={{ fontFamily: F, color: c.text }}>{delta}</p>
    </div>
  );
}

function MiniBar({ values, max, color }: { values: number[]; max: number; color: string }) {
  return (
    <div className="flex items-end gap-[3px] h-[32px]">
      {values.map((v, i) => (
        <div
          key={i}
          className="w-[6px] rounded-sm transition-all"
          style={{ height: `${(v / max) * 100}%`, backgroundColor: color, opacity: 0.5 + (i / values.length) * 0.5 }}
        />
      ))}
    </div>
  );
}

export function ControlTowerDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  const alerts = [
    { time: "2m ago", msg: "DC-Southeast water inventory below threshold", severity: "CRITICAL" as const },
    { time: "5m ago", msg: "Route FL-I95 flagged — flooding risk", severity: "WARNING" as const },
    { time: "8m ago", msg: "Supplier B lead time extended +6hrs", severity: "WARNING" as const },
    { time: "12m ago", msg: "Store #847 generator fuel at 18%", severity: "CRITICAL" as const },
  ];

  const storeData = [
    { region: "FL Southeast", stores: 142, atRisk: 89, coverage: "38%" },
    { region: "FL Central", stores: 96, atRisk: 41, coverage: "57%" },
    { region: "GA South", stores: 64, atRisk: 12, coverage: "81%" },
  ];

  return (
    <div className="w-full h-full bg-[rgba(10,10,18,0.4)] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ fontFamily: F }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white/90 text-[11px] tracking-wider uppercase" style={{ fontWeight: 600 }}>Supply Chain Dashboard</span>
        </div>
        <span className="text-white/30 text-[10px]">LIVE — Severe Weather Event</span>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2 px-3 pt-3 pb-2">
        <KPICard label="Revenue at Risk" value="$2.4M" delta="↑ 18% in 1hr" status="red" />
        <KPICard label="Store Coverage" value="38%" delta="↓ from 72% baseline" status="red" />
        <KPICard label="DC Fulfillment" value="54%" delta="↓ 12% last 30min" status="amber" />
      </div>

      {/* Middle row */}
      <div className="flex-1 grid grid-cols-2 gap-2 px-3 pb-2 min-h-0">
        {/* Live Alert Feed */}
        <div className="rounded-lg border border-white/8 bg-white/[0.03] p-2.5 overflow-hidden flex flex-col">
          <p className="text-white/40 text-[9px] uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>Live Alerts</p>
          <div className="flex-1 space-y-1.5 overflow-hidden">
            {alerts.map((a, i) => (
              <div key={i} className="flex items-start gap-2 rounded px-2 py-1.5" style={{ background: a.severity === "CRITICAL" ? "rgba(239,68,68,0.08)" : "rgba(245,158,11,0.08)" }}>
                <span className="text-[8px] mt-0.5 px-1 py-0.5 rounded shrink-0" style={{
                  fontWeight: 600,
                  color: a.severity === "CRITICAL" ? "#f87171" : "#fbbf24",
                  background: a.severity === "CRITICAL" ? "rgba(239,68,68,0.15)" : "rgba(245,158,11,0.15)",
                }}>{a.severity}</span>
                <div className="min-w-0">
                  <p className="text-white/70 text-[10px] leading-tight truncate">{a.msg}</p>
                  <p className="text-white/25 text-[8px] mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Impact */}
        <div className="rounded-lg border border-white/8 bg-white/[0.03] p-2.5 overflow-hidden flex flex-col">
          <p className="text-white/40 text-[9px] uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>Regional Impact</p>
          <div className="flex-1 space-y-2">
            {storeData.map((r, i) => (
              <div key={i}>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-white/60">{r.region}</span>
                  <span style={{ color: parseInt(r.coverage) < 50 ? "#f87171" : parseInt(r.coverage) < 70 ? "#fbbf24" : "#4ade80" }}>{r.coverage}</span>
                </div>
                <div className="w-full h-[4px] rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: r.coverage,
                      background: parseInt(r.coverage) < 50 ? "linear-gradient(90deg, #ef4444, #f87171)" : parseInt(r.coverage) < 70 ? "linear-gradient(90deg, #f59e0b, #fbbf24)" : "linear-gradient(90deg, #22c55e, #4ade80)",
                    }}
                  />
                </div>
                <div className="flex justify-between text-[8px] mt-0.5 text-white/25">
                  <span>{r.atRisk} at-risk</span>
                  <span>{r.stores} total</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between">
            <span className="text-white/30 text-[8px]">Demand surge</span>
            <MiniBar values={[3, 5, 4, 7, 9, 12, 15, 18, 14, 20, 22, 19]} max={24} color="#f59e0b" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 pb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[8px] text-white/20">SKUs affected: <span className="text-amber-400">847</span></span>
          <span className="text-[8px] text-white/20">Active agents: <span className="text-blue-400">3</span></span>
        </div>
        <span className="text-[8px] text-white/20" key={tick}>Updated {tick === 0 ? "just now" : `${tick * 2}s ago`}</span>
      </div>
    </div>
  );
}
