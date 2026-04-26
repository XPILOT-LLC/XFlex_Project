"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import enMessages from "@/messages/en.json";
import arMessages from "@/messages/ar.json";

type Locale = "en" | "ar";

const messages: Record<Locale, typeof enMessages> = {
  en: enMessages,
  ar: arMessages as unknown as typeof enMessages,
};

// Resolve a dot-notation path (supports numeric indices for arrays)
function resolve(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

type I18nContextType = {
  locale: Locale;
  /** Return a string value for a dot-notation key */
  t: (key: string) => string;
  /** Return a raw value (array or object) at a dot-notation key */
  tRaw: (key: string) => unknown;
  setLocale: (locale: Locale) => void;
  isRTL: boolean;
};

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "xflex-locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Locale | null) ?? "en";
    const valid: Locale = saved === "ar" ? "ar" : "en";
    setLocaleState(valid);
    document.documentElement.lang = valid;
    document.documentElement.dir = valid === "ar" ? "rtl" : "ltr";
  }, []);

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next);
    setLocaleState(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }, []);

  const t = useCallback(
    (key: string): string => {
      const val = resolve(messages[locale], key);
      return typeof val === "string" ? val : key;
    },
    [locale]
  );

  const tRaw = useCallback(
    (key: string): unknown => resolve(messages[locale], key),
    [locale]
  );

  return (
    <I18nContext.Provider
      value={{ locale, t, tRaw, setLocale, isRTL: locale === "ar" }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
