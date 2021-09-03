import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../../../translations';

export const LocalizedLink = ({ href, locale, children }) => {
  const { locale: contextLocale  } = useContext(LanguageContext);
  const currentLocale = locale ?? contextLocale;
  const hasAbsolutePath = href[0] === '/';
  const url = hasAbsolutePath ? `/${currentLocale}${href}` : href;

  return (
    <Link href={url}>
      {children}
    </Link>
  )
}