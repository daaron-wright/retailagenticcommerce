import { useState } from "react";
import { ShoppingCart, AlertTriangle, Pill, Truck, CheckCircle, Bell } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  store: <ShoppingCart className="w-5 h-5 text-white" />,
  alert: <AlertTriangle className="w-5 h-5 text-white" />,
  pharmacy: <Pill className="w-5 h-5 text-white" />,
  delivery: <Truck className="w-5 h-5 text-white" />,
  success: <CheckCircle className="w-5 h-5 text-white" />,
  default: <Bell className="w-5 h-5 text-white" />,
};

interface Props {
  icon?: string;
  title: string;
  message: string;
  action: string;
  onAction?: () => void;
}

export function NotificationCard({ icon = "default", title, message, action, onAction }: Props) {
  const [clicked, setClicked] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClicked(true);
    setTimeout(() => {
      if (onAction) onAction();
    }, 400);
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissed(true);
  };

  return (
    <div
      className="transition-all duration-300"
      style={{
        opacity: dismissed ? 0 : 1,
        transform: dismissed ? "translateX(40px)" : "translateX(0)",
      }}
    >
      <div className={`bg-gradient-to-b from-white to-[#f2f1ee] rounded-[20px] shadow-[0_0_10px_10px_rgba(0,0,0,0.07)] p-5 max-w-[500px] transition-all duration-300 ${clicked ? "ring-2 ring-green-400/50" : ""}`}>
        {/* Swipe hint / dismiss */}
        <div className="flex justify-end mb-1">
          <button
            onClick={handleDismiss}
            className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Dismiss ✕
          </button>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#5b6dde] to-[#273489] flex items-center justify-center shrink-0">
            <div className="text-white">{iconMap[icon] || iconMap.default}</div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#282b3e] text-[14px] font-semibold" style={{ fontFamily: "'Open Sans', sans-serif" }}>{title}</p>
            <p className="text-[#282b3e] text-[14px] mt-1 leading-[19px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>{message}</p>
          </div>
          <button
            onClick={handleAction}
            className="shrink-0 text-white text-[12px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              background: clicked
                ? "linear-gradient(to bottom, #22c55e, #16a34a)"
                : "linear-gradient(to bottom, #5b6dde, #273489)",
              transform: clicked ? "scale(0.95)" : "scale(1)",
            }}
          >
            {clicked ? "✓ Done" : action}
          </button>
        </div>
      </div>
    </div>
  );
}