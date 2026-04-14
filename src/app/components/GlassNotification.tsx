// Glassmorphic notification card for Chapter 1 phone screens
import { useState } from "react";
import hhLogo from "../../imports/image-8.png";
import { ShoppingCart, AlertTriangle, Pill, Truck, CheckCircle, Bell } from "lucide-react";

const F = "'Open Sans', sans-serif";

const iconMap: Record<string, React.ReactNode> = {
  store: <ShoppingCart className="w-4 h-4 text-green-400" />,
  alert: <AlertTriangle className="w-4 h-4 text-amber-400" />,
  pharmacy: <Pill className="w-4 h-4 text-blue-400" />,
  delivery: <Truck className="w-4 h-4 text-green-400" />,
  success: <CheckCircle className="w-4 h-4 text-green-400" />,
  default: <Bell className="w-4 h-4 text-white/60" />,
};

interface Props {
  icon?: string;
  title: string;
  message: string;
  action: string;
  onAction?: () => void;
}

export function GlassNotification({ icon = "default", title, message, action, onAction }: Props) {
  const [clicked, setClicked] = useState(false);

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClicked(true);
    setTimeout(() => onAction?.(), 400);
  };

  return (
    <div className="w-full bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 p-4 space-y-3">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shrink-0">
          <img src={hhLogo} alt="" className="w-[60%] h-[60%] object-contain" />
        </div>
        <p className="text-white text-[12px]" style={{ fontFamily: F, fontWeight: 700 }}>{title}</p>
      </div>
      {/* Icon + Message */}
      <div className="flex items-start gap-2">
        <span className="text-[16px] shrink-0 mt-0.5">{iconMap[icon] || iconMap.default}</span>
        <p className="text-white/80 text-[11px] leading-[16px]" style={{ fontFamily: F }}>{message}</p>
      </div>
      {/* Action */}
      <button
        onClick={handleAction}
        className="w-full py-2 rounded-full text-white text-[11px] cursor-pointer transition-all hover:brightness-110 active:scale-[0.97]"
        style={{
          fontFamily: F,
          fontWeight: 600,
          background: clicked ? "rgba(34,197,94,0.8)" : "rgba(18,99,4,0.85)",
          backdropFilter: "blur(8px)",
        }}
      >
        {clicked ? "✓ Done" : action}
      </button>
    </div>
  );
}