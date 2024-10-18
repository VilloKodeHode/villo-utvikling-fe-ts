import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import CookiePopup from "@components/ui/cookies/CookiePopup";
import { AppUserProvider } from "@contexts/UserContext";
import NavItem from "@components/navigation/molecules/NavItem";
// import LanguageSwitcher from "@components/ui/header/languageswitcher/LanguageSwitcher";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Villo Utvikling",
  description:
    "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider for bedrifter, klubber og privatpersoner."
,
  keywords:
    "webutvikling, frontend utvikling, SEO tjenester, webdesign, nettsider, hjemmeside, bedriftside, klubbside, headless CMS, Sanity, MongoDB, JavaScript, freelance utvikler, rimelige webutvikling priser, profesjonell webutvikler, Vestfold, Tønsberg, Sandefjord, Oslo, Norge",
  authors: [{ name: "Joakim Villo - Villo Utvikling" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.villoutvikling.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.villoutvikling.com/",
    siteName: "Villo Utvikling", 
    title:
      "Villo Utvikling",
    description:
      "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider for bedrifter, klubber og privatpersoner.",
    locale: "no-NO",
    images: [
      {
        url: "/logo/WindLogoNoTextLightMode.svg",
        width: 1200,
        height: 630,
        alt: "Villo Utvikling Logo",
        type: "image/svg",
      },
    ],
  },
  icons: {
    icon: "/logo/WindLogoNoTextLightMode.svg",
    apple: "/logo/WindLogoNoTextLightMode.svg",
  },
};

// interface AppProps extends NextAppProps {
//   children: React.ReactNode;
// }
interface PageProps {
  children: React.ReactNode;
}

export function RootLayout({
  children,
}: PageProps) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} transition-colors duration-1000 bg-Villo-light-white dark:bg-Villo-dark-black antialiased`}
      >
        <AppUserProvider>
          <nav className="p-8">
          <NavItem
          text="about"
          href="/about"
          textSize="text-sm"
          className="text-Villo-light-black dark:text-Villo-dark-white"
          />
               <NavItem
          text="home"
          href="/"
          textSize="text-sm"
          className="text-Villo-light-black dark:text-Villo-dark-white"
          />
             <NavItem
          text="SEO"
          href="/services/SEO"
          textSize="text-sm"
          className="text-Villo-light-black dark:text-Villo-dark-white"
          />
          {/* <LanguageSwitcher/> */}
          </nav>
          {children}
          <CookiePopup />
        </AppUserProvider>
      </body>
    </html>
  );
}

// export default appWithTranslation(RootLayout);
export default RootLayout;
