import { useState } from "react";

const F = "'Open Sans', sans-serif";

interface ReorderApprovalPanelProps {
  onNext?: () => void;
}

type SkuAction = "none" | "approved" | "conditional" | "rejected";

interface SkuState {
  action: SkuAction;
  conditionText?: string;
  showConditions?: boolean;
  customCondition?: string;
}

const skuData = [
  {
    supplier: "Regional Supply Co",
    name: "Purified Water: 32pk Cases",
    sku: "SKU-1243",
    location: "Southeast DC",
    cover: "2 days cover remaining",
    stock: "280 cases",
    reorder: "10,000 cases",
    unitCost: "$4.20",
    total: "$42,000",
    priority: "high" as const,
    conditions: [
      "Approve only if chilled transport (≤39°F) is confirmed by supplier",
      "Auto-cancel if temperature log is not attached on delivery",
      "Reduce to 5,000 cases if confirmed delivery ETA exceeds 18 days",
    ],
  },
  {
    supplier: "National Distributors",
    name: "Duracell Batteries: 24pk",
    sku: "SKU-6789",
    location: "Southeast DC",
    cover: "2.1 days cover remaining",
    stock: "150 cases",
    reorder: "6,000 cases",
    unitCost: "$8.50",
    total: "$51,000",
    priority: "high" as const,
    conditions: [
      "Approve only if chilled transport (≤39°F) is confirmed by supplier",
      "Auto-cancel if temperature log is not attached on delivery",
      "Reduce to 3,000 cases if confirmed delivery ETA exceeds 18 days",
    ],
  },
  {
    supplier: "PetCare Direct",
    name: "Blue Buffalo Dog Food: 5lb",
    sku: "SKU-9012",
    location: "Southeast DC",
    cover: "1.8 days cover remaining",
    stock: "110 cases",
    reorder: "5,000 cases",
    unitCost: "$12.40",
    total: "$62,000",
    priority: "critical" as const,
    conditions: [
      "Approve only if chilled transport (≤39°F) is confirmed by supplier",
      "Auto-cancel if temperature log is not attached on delivery",
      "Reduce to 2,500 cases if confirmed delivery ETA exceeds 18 days",
    ],
  },
];

const auditTimeline = [
  { time: "06:15", agent: "Supplier Risk Monitoring Agent", color: "#dc2626", text: "Severe weather event detected: primary regional supplier affected by incoming storm. 2 backup suppliers flagged due to supply chain delays and rising fuel prices. 3 suppliers suspended." },
  { time: "06:18", agent: "Inventory Analysis Agent", color: "#dc2626", text: "3 critical SKUs at Southeast DC identified below threshold: SKU-9012 at 1.8 days cover, SKU-6789 at 2.1 days, SKU-1243 at 2.0 days. Avg supplier fulfilment: 12 days. Stock-out risk confirmed." },
  { time: "06:19", agent: "Inventory Analysis Agent", color: "#dc2626", text: "Emergency reorder quantities calculated to restore 20-day cover: SKU-9012: 5,000 cases (PetCare Direct), SKU-6789: 6,000 cases (National Distributors), SKU-1243: 10,000 cases (Regional Supply Co). Projected revenue loss if unapproved: $576k." },
  { time: "06:20", agent: "Alert Dispatch Agent", color: "#dc2626", text: "SKU Understock Alert dispatched to Supply Chain Manager dashboard. Ordering window closes 2:00 PM." },
  { time: "11:05", agent: "Supply Chain Manager", color: "#2d6a6a", text: "Notification viewed, expanded for detail" },
  { time: "11:08", agent: "Supply Chain Manager", color: "#2d6a6a", text: "Emergency Reorder Approval modal opened" },
  { time: "11:12", agent: "Supply Chain Manager", color: "#2d6a6a", text: "Decisions submitted: 3 of 3 approved. Ref: REPR-1775" },
];

export function ReorderApprovalPanel({ onNext }: ReorderApprovalPanelProps) {
  const [view, setView] = useState<"approval" | "submitted">("approval");
  const [skuStates, setSkuStates] = useState<SkuState[]>(
    skuData.map(() => ({ action: "none" }))
  );
  const [activeTab, setActiveTab] = useState<"summary" | "audit">("summary");

  const actionedCount = skuStates.filter((s) => s.action !== "none").length;

  const updateSku = (index: number, update: Partial<SkuState>) => {
    setSkuStates((prev) =>
      prev.map((s, i) => (i === index ? { ...s, ...update } : s))
    );
  };

  const handleApprove = (i: number) => {
    updateSku(i, { action: "approved", showConditions: false });
  };

  const handleUndo = (i: number) => {
    updateSku(i, { action: "none", conditionText: undefined, showConditions: false, customCondition: undefined });
  };

  const handleToggleConditions = (i: number) => {
    updateSku(i, { showConditions: !skuStates[i].showConditions });
  };

  const handleApplyCondition = (i: number, condition: string) => {
    updateSku(i, { action: "conditional", conditionText: condition, showConditions: false });
  };

  const handleSubmit = () => {
    if (actionedCount > 0) setView("submitted");
  };

  return (
    <div className="reorder-panel" style={{ fontFamily: F }}>
      {/* Teal header */}
      <div className="reorder-header">
        <p className="reorder-header-title">
          SKU Understock Alert: Emergency Reorder Approval
        </p>
        <button
          className="reorder-close-btn"
          onClick={() => setView("approval")}
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="reorder-body">
        {view === "approval" ? (
          <>
            {/* Overview */}
            <div className="reorder-overview-box">
              <div className="reorder-overview-header">
                <span className="reorder-overview-label">Overview</span>
                <span className="reorder-overview-dashes" />
                <span className="reorder-agent-label">Inventory Analysis Agent</span>
              </div>
              <ul className="reorder-overview-list">
                <li className="reorder-overview-item">
                  <span className="reorder-bullet" />
                  <p className="reorder-overview-text">
                    Your primary <strong>regional supplier</strong> is affected by the incoming severe weather event. Two key <strong>backup suppliers</strong> are disrupted due to supply chain delays and rising fuel prices.
                  </p>
                </li>
                <li className="reorder-overview-item">
                  <span className="reorder-bullet" />
                  <p className="reorder-overview-text">
                    <strong>3 critical SKUs at Southeast DC</strong> are running below threshold stock levels and are at risk of stock-out within 2 days. Average supplier fulfilment time is <strong>12 days</strong>.
                  </p>
                </li>
                <li className="reorder-overview-item">
                  <span className="reorder-bullet" />
                  <p className="reorder-overview-text">
                    Emergency reorder quantities have been pre-calculated to restore <strong>20 days cover</strong> for each SKU without overstocking.
                  </p>
                </li>
                <li className="reorder-overview-item">
                  <span className="reorder-bullet" />
                  <p className="reorder-overview-text">
                    Current projected revenue loss due to understock is around <strong>$576k</strong>.
                  </p>
                </li>
              </ul>
            </div>

            {/* SKUs */}
            <div className="reorder-skus-section">
              <p className="reorder-skus-title">SKUs Requiring Attention</p>
              <p className="reorder-skus-subtitle">Approve, set conditions, or reject each reorder below.</p>

              <div className="reorder-sku-list">
                {skuData.map((sku, i) => {
                  const state = skuStates[i];
                  return (
                    <div key={i} className="reorder-sku-card">
                      {/* Supplier label + priority */}
                      <div className="reorder-sku-top-row">
                        <span className="reorder-supplier-label">Alt. Supplier: {sku.supplier}</span>
                        <span className={`reorder-priority-badge ${sku.priority === "critical" ? "reorder-badge-critical" : "reorder-badge-high"}`}>
                          {sku.priority === "critical" ? "Critical Priority" : "High Priority"}
                        </span>
                      </div>

                      {/* Product name + status */}
                      <div className="reorder-sku-name-row">
                        <p className="reorder-sku-name">{sku.name}</p>
                        {state.action === "approved" && (
                          <span className="reorder-status-approved">✓ Approved</span>
                        )}
                        {state.action === "conditional" && (
                          <span className="reorder-status-conditional">▸ Conditional</span>
                        )}
                      </div>

                      {/* Details */}
                      <p className="reorder-sku-detail">
                        {sku.sku}, {sku.location} · {sku.cover}
                      </p>

                      {/* Stats row */}
                      <div className="reorder-stats-row">
                        <span>Stock: <strong>{sku.stock}</strong></span>
                        <span>Reorder: <strong>{sku.reorder}</strong></span>
                        <span>Unit cost: <strong>{sku.unitCost}</strong></span>
                        <span>Total: <strong>{sku.total}</strong></span>
                      </div>

                      {/* Condition applied text */}
                      {state.action === "conditional" && state.conditionText && (
                        <div className="reorder-condition-applied">
                          <p><strong>Condition:</strong> {state.conditionText}</p>
                        </div>
                      )}

                      {/* Action buttons */}
                      {state.action === "none" ? (
                        <div className="reorder-action-buttons">
                          <button className="reorder-btn-approve" onClick={() => handleApprove(i)}>✓ Approve Reorder</button>
                          <button className="reorder-btn-conditions" onClick={() => handleToggleConditions(i)}>▸ Set Conditions</button>
                          <button className="reorder-btn-reject" onClick={() => updateSku(i, { action: "rejected" })}>✕ Reject</button>
                        </div>
                      ) : (
                        <div className="reorder-action-buttons">
                          {state.action === "approved" && (
                            <button className="reorder-btn-conditions" onClick={() => handleToggleConditions(i)}>▸ Set Conditions</button>
                          )}
                          <button className="reorder-btn-undo" onClick={() => handleUndo(i)}>Undo</button>
                        </div>
                      )}

                      {/* Conditions panel */}
                      {state.showConditions && (
                        <div className="reorder-conditions-panel">
                          <p className="reorder-conditions-title">Suggested Conditions</p>
                          {sku.conditions.map((c, ci) => (
                            <div
                              key={ci}
                              className="reorder-condition-option"
                              onClick={() => handleApplyCondition(i, c)}
                            >
                              {c}
                            </div>
                          ))}
                          <input
                            type="text"
                            className="reorder-condition-custom"
                            placeholder="Or type a custom condition..."
                            value={state.customCondition || ""}
                            onChange={(e) => updateSku(i, { customCondition: e.target.value })}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && state.customCondition?.trim()) {
                                handleApplyCondition(i, state.customCondition.trim());
                              }
                            }}
                          />
                          <div className="reorder-conditions-actions">
                            <button className="reorder-btn-apply" onClick={() => {
                              if (state.customCondition?.trim()) {
                                handleApplyCondition(i, state.customCondition.trim());
                              }
                            }}>Apply Condition</button>
                            <button className="reorder-btn-cancel" onClick={() => updateSku(i, { showConditions: false })}>Cancel</button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="reorder-footer">
              <p className="reorder-footer-note">
                Approvals are logged to the audit trail · Conditional approvals trigger policy-as-code enforcement · Relevant agents notified on approval
              </p>
              <div className="reorder-footer-actions">
                <span className="reorder-actioned-count">{actionedCount} of 3 actioned</span>
                <button
                  className={`reorder-submit-btn ${actionedCount > 0 ? "reorder-submit-active" : ""}`}
                  disabled={actionedCount === 0}
                  onClick={handleSubmit}
                >
                  Confirm & Submit →
                </button>
              </div>
            </div>
          </>
        ) : (
          /* ===== SUBMITTED VIEW ===== */
          <>
            {/* Success banner */}
            <div className="reorder-success-banner">
              <div className="reorder-success-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" stroke="#2d6a6a" strokeWidth="2" />
                  <path d="M9 14.5L12.5 18L19 11" stroke="#2d6a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="reorder-success-title">Decisions Submitted</p>
                <p className="reorder-success-meta">Logged at 21:36 · Ref: REPR-1775</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="reorder-tabs">
              <button
                className={`reorder-tab ${activeTab === "summary" ? "reorder-tab-active" : ""}`}
                onClick={() => setActiveTab("summary")}
              >
                Decision Summary
              </button>
              <button
                className={`reorder-tab ${activeTab === "audit" ? "reorder-tab-active" : ""}`}
                onClick={() => setActiveTab("audit")}
              >
                Audit Trail & Agent Flow
              </button>
            </div>

            {activeTab === "summary" ? (
              <div className="reorder-summary-content">
                {/* Summary cards */}
                {skuData.map((sku, i) => {
                  const state = skuStates[i];
                  return (
                    <div key={i} className="reorder-summary-card">
                      <div className="reorder-summary-left">
                        <span className="reorder-supplier-label">Alt. Supplier: {sku.supplier}</span>
                        <div className="reorder-summary-name-row">
                          {state.action === "approved" && <span className="reorder-check-icon">✓</span>}
                          {state.action === "conditional" && <span className="reorder-flag-icon">▸</span>}
                          <p className="reorder-summary-product">{sku.name}</p>
                        </div>
                        <p className={`reorder-summary-status ${state.action === "conditional" ? "reorder-status-cond-text" : "reorder-status-approved-text"}`}>
                          {state.action === "approved" ? "Approved" : state.action === "conditional" ? "Conditional Approval" : "Rejected"}
                        </p>
                        {state.action === "conditional" && state.conditionText && (
                          <p className="reorder-summary-condition">{state.conditionText}</p>
                        )}
                      </div>
                      <div className="reorder-summary-right">
                        <p className="reorder-summary-qty">{sku.reorder}</p>
                        <p className="reorder-summary-cost">{sku.unitCost} / case</p>
                        <p className="reorder-summary-total">{sku.total}</p>
                      </div>
                    </div>
                  );
                })}

                {/* What happens next */}
                <div className="reorder-next-box">
                  <p className="reorder-next-title">What Happens Next</p>
                  <ul className="reorder-next-list">
                    <li>→ Relevant agents notified, emergency delivery slots being confirmed</li>
                    <li>→ Policy engine activated, conditions monitored in real time, auto-cancel if breached</li>
                    <li>→ Projected revenue loss reduced by 100%, from $576,000 to $0</li>
                  </ul>
                </div>

                {/* Next button */}
                <div className="reorder-next-btn-row">
                  <button className="reorder-next-btn" onClick={onNext}>
                    Next →
                  </button>
                </div>
              </div>
            ) : (
              /* Audit Trail */
              <div className="reorder-audit-content">
                <div className="reorder-timeline-box">
                  <p className="reorder-timeline-title">Event Timeline</p>
                  <div className="reorder-timeline">
                    {auditTimeline.map((entry, i) => (
                      <div key={i} className="reorder-timeline-entry">
                        <div className="reorder-timeline-dot-col">
                          <div className="reorder-timeline-dot" style={{ background: entry.color }} />
                          {i < auditTimeline.length - 1 && <div className="reorder-timeline-line" />}
                        </div>
                        <div className="reorder-timeline-content">
                          <div className="reorder-timeline-header">
                            <span className="reorder-timeline-time">{entry.time}</span>
                            <span className="reorder-timeline-agent" style={{ color: entry.color }}>{entry.agent}</span>
                          </div>
                          <p className="reorder-timeline-text">{entry.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
