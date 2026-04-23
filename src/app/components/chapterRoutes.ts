import { Screen } from "./screens";

export const chapterRoutes: { path: string; label: string; chapterFilter: (s: Screen, i: number) => boolean; nextRoute?: string; prevRoute?: string }[] = [
  {
    path: "opening",
    label: "Opening",
    chapterFilter: (s) => s.id === "opening",
    nextRoute: "/chapter-1",
  },
  {
    path: "chapter-1",
    label: "Chapter 1",
    chapterFilter: (s) => s.chapter === 1 && s.id !== "opening",
    nextRoute: "/chapter-2",
    prevRoute: "/opening",
  },
  {
    path: "chapter-2",
    label: "Chapter 2",
    chapterFilter: (s) => s.chapter === 2,
    nextRoute: "/chapter-3",
    prevRoute: "/chapter-1",
  },
  {
    path: "chapter-3",
    label: "Chapter 3",
    chapterFilter: (s) => s.chapter === 3 && s.type !== "closing" && s.type !== "closingLogo",
    nextRoute: "/closing",
    prevRoute: "/chapter-2",
  },
  {
    path: "closing",
    label: "Closing",
    chapterFilter: (s) => s.type === "closing" || s.type === "closingLogo",
    prevRoute: "/chapter-3",
  },
];
