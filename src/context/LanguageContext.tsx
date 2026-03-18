"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Lang } from "@/i18n/translations";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggleLang: () => {},
});

const SESSION_KEY = "artgallery_lang";

function detectInitialLang(): Lang {
  // Server-side: default to English
  if (typeof window === "undefined") return "en";

  // Existing session preference wins
  const stored = sessionStorage.getItem(SESSION_KEY);
  if (stored === "en" || stored === "ja") return stored;

  // First visit: check device/browser language
  const deviceLang = navigator.language || "";
  return deviceLang.toLowerCase().startsWith("ja") ? "ja" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en"); // SSR-safe default

  useEffect(() => {
    // Runs only on the client after hydration
    setLang(detectInitialLang());
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "ja" : "en";
      sessionStorage.setItem(SESSION_KEY, next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Convenience hook
export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
