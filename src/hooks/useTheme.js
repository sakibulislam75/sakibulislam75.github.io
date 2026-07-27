import { useEffect, useState } from "react";

// Reads/writes the saved preference and keeps <html data-theme="..."> in sync.
// "system" follows the OS color scheme, just like the original script.
export default function useTheme() {
  const [mode, setMode] = useState(() => localStorage.getItem("theme-mode") || "dark");

  useEffect(() => {
    const apply = () => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const resolved = mode === "system" ? (prefersDark ? "dark" : "light") : mode;
      document.documentElement.setAttribute("data-theme", resolved);
    };

    apply();
    localStorage.setItem("theme-mode", mode);

    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }
  }, [mode]);

  return [mode, setMode];
}
