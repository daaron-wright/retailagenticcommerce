import { useState } from "react";

interface Props {
  icon?: string;
  title: string;
  message: string;
  action: string;
  onAction?: () => void;
}

export function NotificationCard({ title, message, action, onAction }: Props) {
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
      <div className="rounded-2xl overflow-hidden max-w-[460px] shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        {/* Red header */}
        <div className="bg-[#dc2626] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <p
              className="text-white text-[13px] font-semibold"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {title}
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors cursor-pointer text-[16px] leading-none"
          >
            ✕
          </button>
        </div>

        {/* White body */}
        <div className="bg-white px-5 py-4">
          <p
            className="text-[#333] text-[13px] leading-[20px]"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            {message}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={handleAction}
              className="text-white text-[13px] font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                background: clicked ? "#16a34a" : "#dc2626",
                transform: clicked ? "scale(0.97)" : "scale(1)",
              }}
            >
              {clicked ? "✓ Done" : action}
            </button>
            <button
              onClick={handleDismiss}
              className="text-[#666] text-[13px] font-medium px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
