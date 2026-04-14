// Harvest House phone screens for Chapter 1 — white bg, spruce primary
import React, { useState } from "react";
const hhLogo = "https://cdn.builder.io/api/v1/image/assets%2F4f55495a54b1427b9bd40ba1c8f3c8aa%2F831b365cc9f34f0bb4bf8c624416f298?format=webp&width=800&height=1200";
import {
  CalendarDays, Truck, AlertTriangle, CheckCircle, Pill, Store,
  PiggyBank, Lightbulb, DollarSign, Syringe, Package, ShoppingCart,
  MapPin, Clock, Home, Calendar, Heart, ShoppingBag, User
} from "lucide-react";

const SPRUCE = "#2C4A3E";
const SPRUCE_LIGHT = "#3D6B5A";
const F = "'Open Sans', sans-serif";

function HHLogo({ size = 36 }: { size?: number }) {
  return (
    <div className="rounded-full flex items-center justify-center" style={{ width: size, height: size, background: SPRUCE }}>
      <img src={hhLogo} alt="H" className="w-[65%] h-[65%] object-contain" />
    </div>
  );
}

function AppBtn({ label, onClick, variant = "primary" }: { label: string; onClick?: (e: React.MouseEvent) => void; variant?: "primary" | "danger" }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-2.5 rounded-full text-white text-[12px] cursor-pointer transition-all hover:brightness-110 active:scale-[0.97]"
      style={{ fontFamily: F, fontWeight: 600, background: variant === "danger" ? "#D93025" : SPRUCE }}
    >
      {label}
    </button>
  );
}

// Card wrapper
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

// Splash
function HarvestSplash() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white">
      <HHLogo size={64} />
      <p className="text-[16px] mt-3" style={{ fontFamily: F, fontWeight: 700, color: SPRUCE }}>Harvest House</p>
    </div>
  );
}

// Rewards home
function HarvestRewardsUI() {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="px-4 pt-[44px] pb-4 flex items-center gap-3" style={{ background: SPRUCE }}>
        <HHLogo size={32} />
        <div>
          <p className="text-white text-[13px]" style={{ fontFamily: F, fontWeight: 700 }}>Harvest Rewards</p>
          <p className="text-white/70 text-[10px]" style={{ fontFamily: F }}>Welcome Back Elena!</p>
        </div>
      </div>
      <div className="px-4 pt-4 flex-1 space-y-3">
        <p className="text-gray-800 text-[13px]" style={{ fontFamily: F, fontWeight: 700 }}>Enjoy these great benefits.</p>
        <Card className="p-3 space-y-2">
          <div className="flex items-start gap-2">
            <PiggyBank className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: SPRUCE }} />
            <p className="text-gray-600 text-[10px] leading-[15px]" style={{ fontFamily: F }}>Earn 1% when you shop to redeem at Harvest House later.</p>
          </div>
          <div className="flex items-start gap-2">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-gray-600 text-[10px] leading-[15px]" style={{ fontFamily: F }}>Get hundreds of deals, a birthday gift and more.</p>
          </div>
        </Card>
        <p className="text-[11px]" style={{ fontFamily: F, fontWeight: 700, color: SPRUCE }}>My Rewards</p>
        <Card className="overflow-hidden">
          <div className="px-3 py-1.5 text-white text-[11px] flex items-center gap-1.5" style={{ fontFamily: F, fontWeight: 600, background: SPRUCE }}>
            <DollarSign className="w-3.5 h-3.5" /> $20 OFF
          </div>
          <div className="px-3 py-2">
            <p className="text-[10px] leading-[14px]" style={{ fontFamily: F, color: SPRUCE_LIGHT }}>Get $20 OFF your next online order over $75</p>
            <p className="text-[8px] text-gray-400 mt-1" style={{ fontFamily: F, fontWeight: 700 }}>Valid till 14 Nov 2026</p>
          </div>
        </Card>
        <AppBtn label="Shop Now" />
      </div>
    </div>
  );
}

// Flu shot
function FluShotUI({ onAction }: { onAction?: () => void }) {
  const [clicked, setClicked] = useState(false);
  const go = (e: React.MouseEvent) => { e.stopPropagation(); setClicked(true); setTimeout(() => onAction?.(), 500); };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 bg-white">
      <Card className="p-5 w-full text-center space-y-3">
        <div className="flex justify-center"><CalendarDays className="w-6 h-6" style={{ color: SPRUCE }} /></div>
        <p className="text-gray-800 text-[13px] leading-[20px]" style={{ fontFamily: F, fontWeight: 700 }}>
          Your flu shot is scheduled<br />for 9am on 04/07/26<br />with Harvest Pharmacy
        </p>
        <AppBtn label={clicked ? "Confirmed" : "Confirm"} onClick={go} />
      </Card>
    </div>
  );
}

// Subscription
function SubscriptionUI({ onAction }: { onAction?: () => void }) {
  const [clicked, setClicked] = useState(false);
  const go = (e: React.MouseEvent) => { e.stopPropagation(); setClicked(true); setTimeout(() => onAction?.(), 500); };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 bg-white">
      <Card className="p-5 w-full text-center space-y-3">
        <div className="flex justify-center"><Truck className="w-6 h-6" style={{ color: SPRUCE }} /></div>
        <p className="text-gray-800 text-[13px] leading-[20px]" style={{ fontFamily: F, fontWeight: 700 }}>
          Your subscription of paper<br />towels is scheduled<br />for delivery on 04/8/26
        </p>
        <AppBtn label={clicked ? "Confirmed" : "Confirm"} onClick={go} />
      </Card>
    </div>
  );
}

// Reschedule storm warning
function RescheduleUI({ onAction }: { onAction?: () => void }) {
  const [clicked, setClicked] = useState(false);
  const go = (e: React.MouseEvent) => { e.stopPropagation(); setClicked(true); setTimeout(() => onAction?.(), 500); };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 bg-white">
      <Card className="p-5 w-full text-center space-y-3">
        <div className="flex justify-center"><AlertTriangle className="w-6 h-6 text-red-500" /></div>
        <p className="text-red-600 text-[12px] leading-[18px]" style={{ fontFamily: F, fontWeight: 700 }}>
          Due to the winter storm, some deliveries and appointments could be delayed and may need to be rescheduled for next week.
        </p>
        <p className="text-gray-400 text-[10px]" style={{ fontFamily: F }}>Would you like to reschedule your flu shot and delivery now?</p>
        <AppBtn label={clicked ? "Rescheduling..." : "Yes"} onClick={go} variant="danger" />
      </Card>
    </div>
  );
}

// Reschedule confirmed
function RescheduleConfirmUI({ onAction }: { onAction?: () => void }) {
  const [clicked, setClicked] = useState(false);
  const go = (e: React.MouseEvent) => { e.stopPropagation(); setClicked(true); setTimeout(() => onAction?.(), 500); };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 bg-white">
      <Card className="p-5 w-full text-center space-y-3">
        <div className="flex justify-center"><CheckCircle className="w-6 h-6" style={{ color: SPRUCE }} /></div>
        <p className="text-gray-800 text-[13px] leading-[20px]" style={{ fontFamily: F, fontWeight: 700 }}>
          Thank you!<br />Your delivery and flu shot<br />has been rescheduled<br />for 04/15/26
        </p>
        <p className="text-gray-400 text-[10px]" style={{ fontFamily: F }}>You will receive an email confirmation shortly.</p>
        <AppBtn label={clicked ? "Done" : "Confirm"} onClick={go} />
      </Card>
    </div>
  );
}

// Date picker
function DatePickerUI({ onAction }: { onAction?: () => void }) {
  const [selectedDate, setSelectedDate] = useState(14);
  const [clicked, setClicked] = useState(false);
  const go = (e: React.MouseEvent) => { e.stopPropagation(); setClicked(true); setTimeout(() => onAction?.(), 500); };
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="px-4 pt-[44px] pb-2 flex items-center gap-2" style={{ background: SPRUCE }}>
        <HHLogo size={28} />
        <p className="text-white text-[12px]" style={{ fontFamily: F, fontWeight: 700 }}>Select New Date</p>
      </div>
      <div className="px-4 pt-3 flex-1 space-y-2">
        <p className="text-gray-800 text-[11px]" style={{ fontFamily: F, fontWeight: 600 }}>April 2026</p>
        <div className="grid grid-cols-7 gap-0.5 text-center text-[8px] text-gray-400" style={{ fontFamily: F }}>
          {["S","M","T","W","T","F","S"].map((d,i) => <div key={`h-${i}`}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-0.5 text-center text-[9px]" style={{ fontFamily: F }}>
          {Array.from({length: 30}, (_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setSelectedDate(i); }}
              className={`py-1 rounded-full cursor-pointer transition-all ${
                i === selectedDate ? "text-white" : i < 5 ? "text-gray-300" : "text-gray-600 hover:bg-gray-100"
              }`}
              style={i === selectedDate ? { background: SPRUCE } : {}}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <Card className="p-2">
          <p className="text-gray-400 text-[9px]" style={{ fontFamily: F }}>Selected</p>
          <p className="text-gray-800 text-[11px]" style={{ fontFamily: F, fontWeight: 600 }}>April {selectedDate + 1}, 2026 — 9:00 AM</p>
        </Card>
        <div className="space-y-1">
          <div className="flex items-center gap-2 p-1.5 rounded-lg border" style={{ background: `${SPRUCE}0D`, borderColor: `${SPRUCE}30` }}>
            <Syringe className="w-3 h-3 shrink-0" style={{ color: SPRUCE }} />
            <p className="text-[9px]" style={{ fontFamily: F, color: SPRUCE }}>Flu shot rescheduled</p>
          </div>
          <div className="flex items-center gap-2 p-1.5 rounded-lg border" style={{ background: `${SPRUCE}0D`, borderColor: `${SPRUCE}30` }}>
            <Package className="w-3 h-3 shrink-0" style={{ color: SPRUCE }} />
            <p className="text-[9px]" style={{ fontFamily: F, color: SPRUCE }}>Paper towels rescheduled</p>
          </div>
        </div>
        <AppBtn label={clicked ? "Confirmed" : "Confirm Selection"} onClick={go} />
      </div>
    </div>
  );
}

// Shopping cart
function ShoppingCartUI({ onAction }: { onAction?: () => void }) {
  const [quantities, setQuantities] = useState([1, 1, 1, 1, 1, 1]);
  const [clicked, setClicked] = useState(false);
  const items = [
    { name: "Grade A Large Eggs - 12ct", price: 1.69 },
    { name: "Duracell AA Batteries - 24pk", price: 21.75 },
    { name: "Purified Water - 32pk", price: 4.99 },
    { name: "Blue Buffalo Dog Food - 5lbs", price: 15.49 },
    { name: "Rao's Frozen Lasagna - 27oz", price: 10.99 },
    { name: "Lactaid 2% Milk - 0.5gal", price: 4.49 },
  ];
  const total = items.reduce((sum, item, i) => sum + item.price * quantities[i], 0);
  const totalItems = quantities.reduce((s, q) => s + q, 0);

  const go = (e: React.MouseEvent) => { e.stopPropagation(); setClicked(true); setTimeout(() => onAction?.(), 500); };
  const updateQty = (idx: number, delta: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantities(prev => prev.map((q, i) => i === idx ? Math.max(0, q + delta) : q));
  };

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="px-4 pt-[44px] pb-2 flex items-center gap-2" style={{ background: SPRUCE }}>
        <HHLogo size={28} />
        <p className="text-white text-[12px]" style={{ fontFamily: F, fontWeight: 700 }}>My Cart</p>
      </div>
      {/* Checkout options */}
      <div className="px-3 pt-2 pb-1 flex gap-1.5">
        {[
          { label: "Pickup", sub: "2hrs", active: true },
          { label: "Delivery", sub: "8am", active: false },
          { label: "Shipping", sub: "Apr 10", active: false },
        ].map((opt, i) => (
          <div
            key={i}
            className={`flex-1 rounded-lg p-1.5 text-center border ${opt.active ? "" : "border-gray-200 bg-gray-50"}`}
            style={opt.active ? { borderColor: `${SPRUCE}50`, background: `${SPRUCE}0D` } : {}}
          >
            <p className="text-gray-800 text-[9px]" style={{ fontFamily: F, fontWeight: 700 }}>{opt.label}</p>
            <p className="text-[7px]" style={{ fontFamily: F, color: opt.active ? SPRUCE : "#9ca3af" }}>{opt.sub}</p>
          </div>
        ))}
      </div>
      {/* Items */}
      <div className="flex-1 overflow-y-auto px-3 space-y-0">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-100">
            <div className="flex-1 min-w-0">
              <p className="text-gray-800 text-[10px]" style={{ fontFamily: F, fontWeight: 700 }}>${item.price.toFixed(2)}</p>
              <p className="text-gray-400 text-[8px] leading-[11px] truncate" style={{ fontFamily: F }}>{item.name}</p>
            </div>
            <div className="flex items-center gap-0.5 border rounded-full px-1.5 py-0.5 shrink-0 ml-2" style={{ borderColor: `${SPRUCE}60` }}>
              <button onClick={(e) => updateQty(i, -1, e)} className="text-[10px] cursor-pointer w-3 text-center" style={{ color: SPRUCE }}>-</button>
              <span className="text-gray-800 text-[9px] w-3 text-center" style={{ fontFamily: F }}>{quantities[i]}</span>
              <button onClick={(e) => updateQty(i, 1, e)} className="text-[10px] cursor-pointer w-3 text-center" style={{ color: SPRUCE }}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="px-3 pb-3 pt-1">
        <AppBtn label={clicked ? "Order Placed" : `Checkout — $${total.toFixed(2)} (${totalItems})`} onClick={go} />
      </div>
    </div>
  );
}

// Insulin
function InsulinUI({ onAction }: { onAction?: () => void }) {
  const [clicked, setClicked] = useState(false);
  const go = (e: React.MouseEvent) => { e.stopPropagation(); setClicked(true); setTimeout(() => onAction?.(), 500); };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 bg-white">
      <Card className="p-5 w-full text-center space-y-3">
        <div className="flex justify-center"><Pill className="w-6 h-6" style={{ color: SPRUCE }} /></div>
        <p className="text-gray-800 text-[13px] leading-[20px]" style={{ fontFamily: F, fontWeight: 700 }}>
          Would you like to renew<br />your insulin prescription with<br />Harvest Pharmacy now<br />and add to your order?
        </p>
        <AppBtn label={clicked ? "Added to Order" : "Yes"} onClick={go} />
      </Card>
    </div>
  );
}

// Pickup
function PickupUI({ onAction }: { onAction?: () => void }) {
  const [clicked, setClicked] = useState(false);
  const go = (e: React.MouseEvent) => { e.stopPropagation(); setClicked(true); setTimeout(() => onAction?.(), 500); };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 bg-white">
      <Card className="p-5 w-full text-center space-y-3">
        <div className="flex justify-center"><AlertTriangle className="w-6 h-6 text-gray-600" /></div>
        <p className="text-[#ff462d] text-[12px] leading-[18px]" style={{ fontFamily: F, fontWeight: 700 }}>
          Due to the winter storm,<br />home delivery is unavailable.<br />You may pick your order up<br />in-store between 8pm - 10am.
        </p>
        <p className="text-gray-500 text-[9px]" style={{ fontFamily: F }}>Would you like to reschedule your flu shot and delivery now?</p>
        <AppBtn label={clicked ? "Confirmed" : "Confirm"} onClick={go} variant="danger" />
      </Card>
    </div>
  );
}

// Insulin Confirmation
function InsulinConfirmUI({ onAction }: { onAction?: () => void }) {
  const [clicked, setClicked] = useState(false);
  const go = (e: React.MouseEvent) => { e.stopPropagation(); setClicked(true); setTimeout(() => onAction?.(), 500); };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 bg-white">
      <Card className="p-5 w-full text-center space-y-3">
        <div className="flex justify-center"><Pill className="w-6 h-6 text-gray-600" /></div>
        <p className="text-gray-800 text-[13px] leading-[20px]" style={{ fontFamily: F, fontWeight: 700 }}>
          Great!<br />Your prescription order of $35 will be added to<br />your cart at checkout.
        </p>
        <AppBtn label={clicked ? "Confirmed" : "Confirm"} onClick={go} />
      </Card>
    </div>
  );
}

// Order Total
function OrderTotalUI({ onAction }: { onAction?: () => void }) {
  const [clicked, setClicked] = useState(false);
  const go = (e: React.MouseEvent) => { e.stopPropagation(); setClicked(true); setTimeout(() => onAction?.(), 500); };
  const rows = [
    { label: "Subtotal", value: "$122.28", bold: false },
    { label: "Shipping", value: "Free", bold: false },
    { label: "Estimated taxes", value: "$4.17", bold: false },
    { label: "Total", value: "$126.45", bold: true },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 bg-white">
      <Card className="p-5 w-full space-y-3">
        <p className="text-gray-800 text-[13px]" style={{ fontFamily: F, fontWeight: 700 }}>Order summary</p>
        <div className="space-y-1">
          {rows.map((r) => (
            <div key={r.label} className="flex justify-between text-[12px] text-gray-800" style={{ fontFamily: F, fontWeight: r.bold ? 700 : 400 }}>
              <span>{r.label}</span>
              <span>{r.value}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-[8px] text-center pt-1" style={{ fontFamily: F }}>
          Order confirmation and receipt will<br />be emailed to your email on file
        </p>
        <AppBtn label={clicked ? "Order Placed" : "Place your order"} onClick={go} />
      </Card>
    </div>
  );
}

// Order confirmed
function OrderConfirmedUI() {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="px-5 pt-[44px] pb-5 flex justify-center" style={{ background: SPRUCE }}>
        <HHLogo size={44} />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-5">
        <p className="text-gray-800 text-[16px] leading-[24px] text-center mb-3" style={{ fontFamily: F, fontWeight: 700 }}>
          Thank you for<br />your order!
        </p>
        <p className="text-gray-400 text-[11px] leading-[17px] text-center mb-4" style={{ fontFamily: F }}>
          We will notify you by email of any updates or changes.
        </p>
        <p className="text-[12px] text-center mb-1" style={{ fontFamily: F, fontWeight: 700, color: SPRUCE }}>Congratulations Elena!</p>
        <p className="text-gray-400 text-[11px] text-center" style={{ fontFamily: F }}>
          You've earned <span className="text-gray-800" style={{ fontWeight: 700 }}>25</span> loyalty points with your online order.
        </p>
      </div>
    </div>
  );
}

// Loading
function LoadingUI() {
  const [phase, setPhase] = useState<"loading" | "confirmed">("loading");

  React.useEffect(() => {
    const timer = setTimeout(() => setPhase("confirmed"), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Loading phase */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700"
        style={{
          opacity: phase === "loading" ? 1 : 0,
          transform: phase === "loading" ? "scale(1)" : "scale(0.9)",
        }}
      >
        <HHLogo size={44} />
        <div className="mt-4 relative w-[24px] h-[24px]">
          <svg className="w-full h-full animate-spin" viewBox="0 0 33 33" fill="none">
            <circle cx="16.5" cy="16.5" r="13.7" stroke="#e5e7eb" strokeWidth="4" />
          </svg>
          <svg className="absolute top-0 left-0 w-full h-full animate-spin" viewBox="0 0 33 33" fill="none" style={{ animationDuration: "0.8s" }}>
            <path d="M16.5 2.8A13.7 13.7 0 0 1 30.2 16.5" stroke={SPRUCE} strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-gray-400 text-[10px] mt-2" style={{ fontFamily: F }}>Processing order...</p>
      </div>

      {/* Confirmed phase */}
      <div
        className="absolute inset-0 transition-all duration-700 delay-100"
        style={{
          opacity: phase === "confirmed" ? 1 : 0,
          transform: phase === "confirmed" ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <OrderConfirmedUI />
      </div>
    </div>
  );
}

// Thank You / Pickup Confirmation
function ThankYouUI() {
  const navItems = [
    { icon: Home, label: "Home" },
    { icon: Calendar, label: "Schedule" },
    { icon: Heart, label: "Favorites" },
    { icon: ShoppingBag, label: "Shop" },
    { icon: User, label: "My Profile" },
  ];
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="px-5 pt-[44px] pb-5 flex justify-center" style={{ background: SPRUCE }}>
        <div className="bg-white rounded-full flex items-center justify-center" style={{ width: 44, height: 44 }}>
          <img src={hhLogo} alt="H" className="w-[65%] h-[65%] object-contain" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <p className="text-black text-[18px] text-center mb-3" style={{ fontFamily: F, fontWeight: 700 }}>
          Hi Elena
        </p>
        <p className="text-black text-[13px] leading-[20px] text-center" style={{ fontFamily: F }}>
          This is the confirmation<br />
          for your in-store pick-up.<br />
          Your order will be available<br />
          between 8pm - 10am<br />
          (the following day)
        </p>
        <p className="text-black text-[13px] leading-[20px] text-center mt-4" style={{ fontFamily: F }}>
          Thank you for shopping with us!
        </p>
      </div>
      <div className="flex items-end justify-around px-2 py-2" style={{ background: SPRUCE }}>
        {navItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <Icon className="w-4 h-4 text-white" />
            <span className="text-white text-[7px]" style={{ fontFamily: F }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HarvestAppUI({ type, onAction }: { type?: string; onAction?: () => void }) {
  switch (type) {
    case "harvest-splash": return <HarvestSplash />;
    case "harvest-rewards": return <HarvestRewardsUI />;
    case "flu-shot": return <FluShotUI onAction={onAction} />;
    case "subscription": return <SubscriptionUI onAction={onAction} />;
    case "reschedule-storm": return <RescheduleUI onAction={onAction} />;
    case "reschedule-confirm": return <RescheduleConfirmUI onAction={onAction} />;
    case "date-picker": return <DatePickerUI onAction={onAction} />;
    case "shopping-cart": return <ShoppingCartUI onAction={onAction} />;
    case "insulin": return <InsulinUI onAction={onAction} />;
    case "pickup-select": return <PickupUI onAction={onAction} />;
    case "insulin-confirm": return <InsulinConfirmUI onAction={onAction} />;
    case "order-total": return <OrderTotalUI onAction={onAction} />;
    case "order-confirmed": return <OrderConfirmedUI />;
    case "loading": return <LoadingUI />;
    case "thank-you": return <ThankYouUI />;
    default: return null;
  }
}
