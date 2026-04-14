import { MonitorPlay } from "lucide-react";

interface Props {
  href: string;
  color?: string;
}

export function DemoTooltip({ href, color = "#F2F1EF" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative block w-[28px] h-[28px] cursor-pointer group transition-transform duration-200 hover:scale-110"
      style={{ background: "transparent", border: "none", padding: 0 }}
      title="View Demo"
    >
      <MonitorPlay className="block w-full h-full" color={color} strokeWidth={0.7} />
    </a>
  );
}
