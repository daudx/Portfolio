"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return localStorage.getItem("theme") ?? "dark";
}

function getServerSnapshot() {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  const toggleTheme = () => {
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // Dispatch storage event to trigger snapshot update
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="p-2 rounded-lg border border-[#D8D4C9] dark:border-[#2A2A28] bg-white dark:bg-[#1A1A18] text-[#121212] dark:text-[#F6F4EF] hover:border-[#D96C3A] dark:hover:border-[#D96C3A] hover:text-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
    >
      {isDark ? (
        <Sun className="w-4 h-4 stroke-[2] text-[#D96C3A]" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 stroke-[2]" aria-hidden="true" />
      )}
    </button>
  );
}
