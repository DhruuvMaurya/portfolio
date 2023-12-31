import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Data
import data from "./data";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // init data
    resources: {
      fr: {
        translation: data.fr,
      },
      en: {
        translation: data.en,
      },
    },
    fallbackLng: "en",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
