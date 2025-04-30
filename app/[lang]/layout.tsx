import type { Metadata } from "next";
import { Figtree, Noto_Color_Emoji } from "next/font/google";
import "./globals.css";
import CookiePopup from "@components/ui/cookies/CookiePopup";
import { AppUserProvider } from "app/contexts/UserContext";
import { NavBar } from "@components/ui/navigation/navbar/NavBar";
import { Header } from "@components/ui/header/Header";
import Footer from "@components/ui/footer/Footer";
import { getDictionary } from "get-dictionary";
import { FloatingUtilsBar } from "@components/ui/header/floatingUtilBar/FloatingUtilBar";
import { RootProps } from "app/interfaces/PageProps";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  DynamicFloatingArrowUp,
  DynamicTheCosmos,
} from "@components/animation/Dynamic3DExports";
export const figtree = Figtree({ subsets: ["latin"] });
export const noto_emoji = Noto_Color_Emoji({
  weight: "400",
  subsets: ["emoji"],
});

//TODO: Lag pris underside (tydeligvis lovpålagt!)
//TODO: Legg til CTAs nederst på hver side for enklere navigasjon

export async function RootLayout({ children, params }: RootProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang ? lang : "no"}>
      <body
        className={`${figtree.className} relative min-h-[100vh] transition-colors duration-1000 bg-light-snow dark:bg-dark-midnight overflow-x-hidden antialiased`}>
        <AppUserProvider>
          <DynamicTheCosmos />
          <Header />
          <FloatingUtilsBar />
          <NavBar
            params={{ lang }}
            content={dictionary.menu_items}
          />

          <main
            //TODO fix the has selector:
            className={` flex flex-col animate-appear items-center px-4 sm:px-6 lg:px-12 justify-start overflow-x-hidden sm:mb-24 mb-12 sm:gap-28 gap-14`}>
            {children}
          </main>
          <Footer content={dictionary.footer} />
          <CookiePopup content={dictionary.cookie} />
          <DynamicFloatingArrowUp />
        </AppUserProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.villoutvikling.com/en"),
  title: "Villo Utvikling",
  description:
    "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider for bedrifter, klubber og privatpersoner.",
  keywords:
    "webutvikling, frontend utvikling, SEO tjenester, webdesign, nettsider, hjemmeside, bedriftside, klubbside, headless CMS, Sanity, MongoDB, JavaScript, freelance utvikler, rimelige webutvikling priser, profesjonell webutvikler, Vestfold, Tønsberg, Sandefjord, Oslo, Norge",
  authors: [{ name: "Joakim Villo - Villo Utvikling" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.villoutvikling.com/en",
  },
  openGraph: {
    type: "website",
    url: "https://www.villoutvikling.com/en",
    siteName: "Villo Utvikling",
    title: "Villo Utvikling",
    description:
      "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider for bedrifter, klubber og privatpersoner.",
    locale: "no-NO",
    images: [
      {
        url: "https://www.villoutvikling.com/images/logo/meta/full-logo.png", // now resolves with metadataBase
        width: 1200,
        height: 630,
        alt: "Villo Utvikling Logo",
        type: "image/svg",
      },
    ],
  },
  icons: {
    icon: "https://www.villoutvikling.com/images/logo/meta/full-logo.png",
    apple: "https://www.villoutvikling.com/images/logo/meta/full-logo.png",
  },
};
