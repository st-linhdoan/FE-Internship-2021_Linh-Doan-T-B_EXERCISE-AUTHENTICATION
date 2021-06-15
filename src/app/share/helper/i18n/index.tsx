import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "../../../core/translatetion/en.json";
import vi from "../../../core/translatetion/vi.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false }, 
    lng: "en", 
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    fallbackLng: ["vi", "en"],
  });

export default i18n;
