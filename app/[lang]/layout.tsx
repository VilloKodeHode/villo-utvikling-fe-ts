import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import CookiePopup from "@components/ui/cookies/CookiePopup";
import { AppUserProvider } from "@contexts/UserContext";
import { Locale } from "i18next.config";
import { NavBar } from "@components/ui/navigation/navbar/NavBar";
import { Header } from "@components/ui/header/Header";
import { SplashScreen } from "@components/ui/splashscreen/SplashScreen";
import THREESpace from "@components/animation/Space";
import Footer from "@components/ui/footer/Footer";
import { getDictionary } from "get-dictionary";
// import LanguageSwitcher from "@components/ui/header/languageswitcher/LanguageSwitcher";

const figtree = Figtree({ subsets: ["latin"] });

interface PageProps {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export async function RootLayout({ children, params }: PageProps) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang ? params.lang : "no"}>
      <body
        className={`${figtree.className} min-h-[100vh] transition-colors duration-1000 bg-light-white dark:bg-dark-black overflow-x-hidden antialiased`}
      >
        <AppUserProvider>
          <THREESpace />
          <Header />
          <NavBar params={params} />
          <main
            className={`flex flex-col animate-Appear items-center px-4 sm:px-6 lg:px-12 justify-start overflow-x-hidden gap-28`}
          >
            {children}
          </main>
          <Footer params={params} />
          <SplashScreen />
          <CookiePopup dictionary={dictionary} />
        </AppUserProvider>
      </body>
    </html>
  );
}

export default RootLayout;

export const metadata: Metadata = {
  title: "Villo Utvikling",
  description:
    "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider for bedrifter, klubber og privatpersoner.",
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
    title: "Villo Utvikling",
    description:
      "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider for bedrifter, klubber og privatpersoner.",
    locale: "no-NO",
    images: [
      {
        url: "/images/logo/WindLogoNoTextLightMode.svg",
        width: 1200,
        height: 630,
        alt: "Villo Utvikling Logo",
        type: "image/svg",
      },
    ],
  },
  icons: {
    icon: "/images/logo/WindLogoNoTextLightMode.svg",
    apple: "/images/logo/WindLogoNoTextLightMode.svg",
  },
};
