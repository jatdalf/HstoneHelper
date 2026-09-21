import { useEffect, useState } from "react";
import type { Language } from "../types";
import { uiTranslations } from "./ui";

const LANGUAGE_STORAGE_KEY = "hs-helper-language";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    return savedLanguage === "en" || savedLanguage === "es"
      ? savedLanguage
      : "es";
  });

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return {
    language,
    setLanguage,
    text: uiTranslations[language],
  };
}