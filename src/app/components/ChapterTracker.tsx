export function ChapterTracker({ activeChapter = 1, totalChapters = 3 }: { activeChapter?: number; totalChapters?: number }) {
  return (
    <div className="flex items-center gap-0">
      {Array.from({ length: totalChapters }, (_, i) => {
        const num = i + 1;
        const isActive = num === activeChapter;
        return (
          <div key={num} className="flex items-center">
            {i > 0 && <div className="w-[80px] h-[1px] bg-[#F2F1EE]" />}
            <div
              className={`w-[36px] h-[36px] rounded-full flex items-center justify-center text-[12px] font-bold tracking-[-0.36px] uppercase ${
                isActive
                  ? "bg-[#F2F1EE] text-[#042315]"
                  : "border border-[#F2F1EE] text-[#F2F1EE]"
              }`}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {num}
            </div>
          </div>
        );
      })}
    </div>
  );
}
