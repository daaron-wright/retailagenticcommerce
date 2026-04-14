import { useState, useEffect } from "react";

export function VoiceCommandBar({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [listening, setListening] = useState(true);

  // Typewriter effect
  useEffect(() => {
    setDisplayText("");
    setListening(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setListening(false), 500);
      }
    }, 35);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="flex items-center gap-3 bg-[rgba(41,112,122,0.65)] rounded-[60px] px-6 py-3 max-w-[400px] backdrop-blur-sm">
      {/* Pulsating mic indicator */}
      <div className="relative w-[10px] h-[10px] shrink-0">
        <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${listening ? "bg-green-400 animate-pulse" : "bg-white/80"}`} />
        {listening && (
          <div className="absolute inset-[-4px] rounded-full border border-green-400/40 animate-ping" />
        )}
      </div>
      <p
        className="text-white text-[14px] leading-[normal]"
        style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
      >
        {displayText}
        {listening && <span className="inline-block w-[2px] h-[14px] bg-white/80 ml-[2px] animate-pulse align-middle" />}
      </p>
    </div>
  );
}
