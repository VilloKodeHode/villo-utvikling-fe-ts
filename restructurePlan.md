Here's a best practice setup for serving a website in Norwegian and English using Next.js App Router, while utilizing .no and .com domains for localization.

✅ Goal:
Norwegian site on www.example.no

English site on www.example.com

SEO-friendly, localized routing (/om-oss vs /about)

Shared codebase using Next.js App Router

Automatic locale detection optional

🛠️ Step-by-Step Setup
1. Directory Structure (App Router)
bash
Kopier
Rediger
/app
  /[locale]
    /about
      page.tsx
    /contact
      page.tsx
    layout.tsx
    page.tsx
  layout.tsx
  page.tsx
/i18n
  en.json
  no.json
/middleware.ts
/next.config.js
2. Configure next.config.js
ts
Kopier
Rediger
// next.config.js
const nextConfig = {
  i18n: {
    locales: ['en', 'no'],
    defaultLocale: 'no',
    domains: [
      {
        domain: 'example.no',
        defaultLocale: 'no',
      },
      {
        domain: 'example.com',
        defaultLocale: 'en',
      },
    ],
  },
};

module.exports = nextConfig;
3. Create Middleware for Locale Redirection (Optional)
ts
Kopier
Rediger
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  if (pathname === '/') {
    if (hostname.endsWith('.no')) {
      return NextResponse.redirect(new URL('/no', request.url));
    } else {
      return NextResponse.redirect(new URL('/en', request.url));
    }
  }

  return NextResponse.next();
}
4. Dynamic layout.tsx for Locale Switching
tsx
Kopier
Rediger
// app/[locale]/layout.tsx
import { notFound } from 'next/navigation';
import '../globals.css';

export async function generateStaticParams() {
  return [{ locale: 'no' }, { locale: 'en' }];
}

export default function LocaleLayout({ children, params }: any) {
  const { locale } = params;
  if (!['en', 'no'].includes(locale)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
5. i18n Translation Setup (Optional but Recommended)
Use next-intl or react-i18next to load translations based on the locale param:

tsx
Kopier
Rediger
// Example using next-intl
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');
  return <h1>{t('title')}</h1>;
}
6. Create Translation Files
json
Kopier
Rediger
// /i18n/en.json
{
  "About": {
    "title": "About Us"
  }
}
json
Kopier
Rediger
// /i18n/no.json
{
  "About": {
    "title": "Om oss"
  }
}
🌐 Domain + Deployment Tips
Deploy both .no and .com via Vercel or your hosting provider with domain mapping.

Make sure .no and .com domains are added in your Next.js deployment config as custom domains.

✨ UX Enhancements
Language Switcher: Add a button that links to /en/... or /no/... using next/link.

SEO: Use <link rel="alternate" hreflang="..."> headers for search engines.

Would you like a working repo template or language switcher component next?






Du sa:
How will the different urls be on the domains?


ChatGPT sa:
Great question! With your setup — Next.js App Router, example.no for Norwegian, and example.com for English, and the i18n.domains config — the URLs will be clean, localized, and domain-based.

🌍 URL Structure by Domain
✅ On example.no (Norwegian site)
Page	URL
Home	https://example.no/
About	https://example.no/om-oss
Contact	https://example.no/kontakt
Any other	https://example.no/[norwegian-path]

➡️ This uses locale: 'no' as the default without showing /no in the path on example.no.

✅ On example.com (English site)
Page	URL
Home	https://example.com/
About	https://example.com/about
Contact	https://example.com/contact
Any other	https://example.com/[english-path]

➡️ This uses locale: 'en' as the default without showing /en in the path on example.com.

🔁 How This Works
This is achieved using the i18n.domains setting in your next.config.js:

ts
Kopier
Rediger
i18n: {
  locales: ['no', 'en'],
  defaultLocale: 'no',
  domains: [
    { domain: 'example.no', defaultLocale: 'no' },
    { domain: 'example.com', defaultLocale: 'en' },
  ],
}
Next.js will:

Serve / as no on .no and en on .com.

Automatically resolve correct locale and path based on domain.

Keep URLs clean (no /no or /en path prefixes needed).

⚠️ Important Notes
If someone visits example.com/om-oss, they’ll get a 404 unless you handle cross-locale routes explicitly.

For internal navigation, use next/link with locale option:

tsx
Kopier
Rediger
<Link href="/about" locale="en">English</Link>
<Link href="/om-oss" locale="no">Norsk</Link>
Would you like help setting up route aliases like /om-oss for About on Norwegian only?






Du sa:
How will this work when developing locally? Will the urls work?


ChatGPT sa:
Great follow-up! When developing locally with Next.js + i18n + domain-based routing, you'll not have .no or .com domains — so some adjustments are needed.

🧪 Local Development Behavior
✅ What happens locally (e.g. http://localhost:3000):
By default, Next.js uses locale prefixes in the URL when you're developing locally:

Locale	URL locally
Norwegian	http://localhost:3000/no → /no/om-oss
English	http://localhost:3000/en → /en/about

This is normal and expected because you don't have domain-based routing locally.

🛠️ How to handle this
1. ✅ Use localhost:3000/no/... and localhost:3000/en/... in dev
All routes work normally with locale prefixes:

/no/om-oss

/en/about

Your layout file (app/[locale]/layout.tsx) handles this correctly.

2. (Optional) 🧪 Simulate Domains Locally
If you want to simulate example.no and example.com locally, you can do this:

🗂️ Add to /etc/hosts (Mac/Linux) or C:\Windows\System32\drivers\etc\hosts (Windows):
pgsql
Kopier
Rediger
127.0.0.1 example.no
127.0.0.1 example.com
🧰 Then run your dev server like this:
bash
Kopier
Rediger
next dev -p 3000
Now visit:

http://example.no:3000 → will resolve to locale: 'no'

http://example.com:3000 → will resolve to locale: 'en'

You’ll see the clean URLs (without /no or /en) like in production!

✅ Summary
Environment	.no / .com Domain?	URL Format	Locale Detection
Localhost (default)	❌	/no/... and /en/...	via URL prefix
Localhost (simulated)	✅ via /etc/hosts	Clean URLs (/about)	via domain
Production	✅ real domains	Clean URLs	via domain

Would you like a script to automate hosts + dev proxy setup locally?






Du sa:
How would a page.tsx look with this implemented?


ChatGPT sa:
Here’s a minimal page.tsx example in a domain-based multilingual setup using the App Router with folder structure like /app/[locale]/about/page.tsx.

It assumes:

You’ve configured i18n in next.config.js

You’re using folder-based routing like /[locale]/about

You're optionally using next-intl or simple manual translations

🧾 Example: app/[locale]/about/page.tsx (with next-intl)
tsx
Kopier
Rediger
// app/[locale]/about/page.tsx
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-4 text-lg">{t('description')}</p>
    </main>
  );
}
🌐 Example translation files
/i18n/en.json
json
Kopier
Rediger
{
  "About": {
    "title": "About Us",
    "description": "Welcome to our website. We build great things."
  }
}
/i18n/no.json
json
Kopier
Rediger
{
  "About": {
    "title": "Om oss",
    "description": "Velkommen til nettsiden vår. Vi bygger flotte ting."
  }
}
🛠️ If you're not using next-intl (basic manual approach)
You can get the locale from params and hardcode translations:

tsx
Kopier
Rediger
// app/[locale]/about/page.tsx
export default function AboutPage({ params }: { params: { locale: string } }) {
  const isNorwegian = params.locale === 'no';

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        {isNorwegian ? 'Om oss' : 'About Us'}
      </h1>
      <p className="mt-4 text-lg">
        {isNorwegian
          ? 'Velkommen til nettsiden vår. Vi bygger flotte ting.'
          : 'Welcome to our website. We build great things.'}
      </p>
    </main>
  );
}
Would you like a full working example with shared layout, translations, and a language switcher too?






Du sa:
Yes


ChatGPT sa:
Here’s a complete working example for a bilingual Next.js App Router site (Norwegian + English), with:

✅ Domain-based routing (example.no, example.com)

✅ Shared layout with header

✅ Localized about page

✅ Locale-aware Link component

✅ Language switcher

✅ next-intl setup (recommended)

🗂 Folder Structure
bash
Kopier
Rediger
/app
  /[locale]
    /about
      page.tsx
    layout.tsx
    page.tsx
/locales
  en.json
  no.json
/next.config.js
/middleware.ts
🔧 1. next.config.js
ts
Kopier
Rediger
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['no', 'en'],
    defaultLocale: 'no',
    domains: [
      { domain: 'example.no', defaultLocale: 'no' },
      { domain: 'example.com', defaultLocale: 'en' },
    ],
  },
};

module.exports = nextConfig;
📚 2. Translation Files
/locales/en.json
json
Kopier
Rediger
{
  "Navigation": {
    "about": "About Us",
    "home": "Home",
    "language": "Norsk"
  },
  "About": {
    "title": "About Us",
    "description": "We create meaningful experiences for the web."
  }
}
/locales/no.json
json
Kopier
Rediger
{
  "Navigation": {
    "about": "Om oss",
    "home": "Hjem",
    "language": "English"
  },
  "About": {
    "title": "Om oss",
    "description": "Vi skaper meningsfulle opplevelser på nettet."
  }
}
🌍 3. middleware.ts (optional redirect from / to default locale)
ts
Kopier
Rediger
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host') || '';

  if (pathname === '/') {
    const locale = host.includes('.no') ? 'no' : 'en';
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}
🌐 4. app/[locale]/layout.tsx
tsx
Kopier
Rediger
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Link from 'next/link';

export async function generateStaticParams() {
  return [{ locale: 'no' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!['no', 'en'].includes(locale)) notFound();
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="p-6 font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="flex gap-4 mb-6">
            <Link href={`/${locale}`} className="underline">
              🌍 Home
            </Link>
            <Link href={`/${locale}/about`} className="underline">
              📖 About
            </Link>
            <LocaleSwitcher locale={locale} />
          </header>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

function LocaleSwitcher({ locale }: { locale: string }) {
  const other = locale === 'no' ? 'en' : 'no';
  return (
    <Link href={`/${other}`} locale={other} className="underline ml-auto">
      Switch to {other.toUpperCase()}
    </Link>
  );
}
🏠 5. app/[locale]/page.tsx (Home)
tsx
Kopier
Rediger
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Navigation');

  return (
    <main>
      <h1 className="text-4xl font-bold">{t('home')}</h1>
      <p className="mt-4 text-gray-600">🏡 Welcome to our homepage!</p>
    </main>
  );
}
📄 6. app/[locale]/about/page.tsx
tsx
Kopier
Rediger
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <main>
      <h1 className="text-3xl font-semibold">{t('title')}</h1>
      <p className="mt-2 text-gray-700">{t('description')}</p>
    </main>
  );
}
📦 7. Install dependencies
bash
Kopier
Rediger
npm install next-intl
🚀 Resulting URLs
Page	example.no	example.com
Home	https://example.no/	https://example.com/
About	https://example.no/om-oss (optional)	https://example.com/about
Language	Switches with /no and /en	Works automatically