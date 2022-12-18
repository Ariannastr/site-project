import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );


  return (
    <span className="cursor-pointer">
      {otherLocales?.map((locale) => {
        
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link legacyBehavior href={{ pathname, query }} as={asPath} locale={locale}>
              <a style={{ textDecoration: 'none' }} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-teal-600 '>
                {locale === "fr" ? <span className="fi fi-fr"></span>: locale === "en" ? <span className="fi fi-gb"></span> : null}
              </a>
            </Link>
          </span>
        );
      })}
    </span>
  );
}
