import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import esMessages from "./es.json";
import enMessages from "./en.json";

type Locale = "es" | "en";
const messagesMap: Record<Locale, typeof esMessages> = { es: esMessages, en: enMessages };

interface I18nCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  ta: (key: string) => string[];
}

const I18nContext = createContext<I18nCtx>({ locale: "es", setLocale: () => {}, t: (k) => k, ta: () => [] });

function get(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((o, k) => (o && typeof o === "object" ? (o as Record<string, unknown>)[k] : undefined), obj);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const stored = localStorage.getItem("syntek-lang");
    if (stored === "en") setLocaleState("en");
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("syntek-lang", l);
  }, []);

  const t = useCallback((key: string): string => {
    const val = get(messagesMap[locale] as unknown as Record<string, unknown>, key);
    return typeof val === "string" ? val : key;
  }, [locale]);

  const ta = useCallback((key: string): string[] => {
    const val = get(messagesMap[locale] as unknown as Record<string, unknown>, key);
    return Array.isArray(val) ? val as string[] : [];
  }, [locale]);

  return <I18nContext.Provider value={{ locale, setLocale, t, ta }}>{children}</I18nContext.Provider>;
}

export const useT = () => useContext(I18nContext).t;
export const useTa = () => useContext(I18nContext).ta;
export const useLocale = () => { const c = useContext(I18nContext); return { locale: c.locale, setLocale: c.setLocale }; };
