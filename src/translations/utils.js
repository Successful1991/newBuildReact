import { locales } from './config';

export const getStaticPaths = () => ({
  paths: locales.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export const isLocale = (value) => locales.some((locale) => locale === value);