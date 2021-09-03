import { useContext } from "react";
import { LanguageContext } from "./context";

export const useTranslation = () => {
  const { locale, locales, translations } = useContext(LanguageContext);

  const t = (key) => {
    if (!translations[key]) {
      console.warn(
        `Translation '${key}' for locale '${locale}' not found.`
      );
    }
    return translations[key] || "";
  }

  return {
    t,
    locale,
    locales,
    translations
  };
}