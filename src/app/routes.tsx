import { createBrowserRouter, Navigate } from "react-router";
import { SlideViewer } from "./components/SlideViewer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <Navigate to="/opening" replace />,
  },
  {
    path: "/opening",
    Component: () => <SlideViewer chapterPath="opening" />,
  },
  {
    path: "/chapter-1",
    Component: () => <SlideViewer chapterPath="chapter-1" />,
  },
  {
    path: "/chapter-2",
    Component: () => <SlideViewer chapterPath="chapter-2" />,
  },
  {
    path: "/chapter-3",
    Component: () => <SlideViewer chapterPath="chapter-3" />,
  },
  {
    path: "/closing",
    Component: () => <SlideViewer chapterPath="closing" />,
  },
  {
    path: "*",
    Component: () => <Navigate to="/opening" replace />,
  },
]);
