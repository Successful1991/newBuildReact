import React from "react";
import { locales, DEFAULT_LOCALE } from "./config";


export const LanguageContext = React.createContext({
  locales,
  locale: DEFAULT_LOCALE, // default lang
  translations: {},
  setLocale: () => null,
});

/**
 * Language Context: Provider
 */

export const LanguageProvider = ({ localization, children }) => {
  const [localizationState, setLocalizationState] = React.useState({
    locale: localization?.locale ?? DEFAULT_LOCALE,
    translations: localization?.translations,
  });

  const value = {
    locales,
    locale: localizationState?.locale,
    setLocale: setLocalizationState,
    translations: {}
  }

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  );
};