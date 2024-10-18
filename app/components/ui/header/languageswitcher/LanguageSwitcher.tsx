"use client";

//! currently not working. Figure out!

import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function LanguageSwitcher() {
  const pathname = usePathname(); // Get the current pathname
  
  const locales = ['en', 'no']; // List of available locales

  return (
    <div>
      {locales.map((loc) => (
        <Link style={{ marginRight: '10px' }} key={loc} href={pathname} locale={loc}>
            {loc === 'en' ? 'English' : 'Norsk'}
        </Link>
      ))}
    </div>
  );
}