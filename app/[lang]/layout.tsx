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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const baseUrl = "https://www.villoutvikling.com";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Villo Utvikling",
      template: "%s | Villo Utvikling",
    },
    description: "Profesjonell frontend- og webutvikling ...",
    openGraph: {
      url: `${baseUrl}/${lang}`,
      locale: lang === "no" ? "no-NO" : "en-US",
      images: [
        {
          url: "/images/logo/Villo_Utvikling_full-Logo.jpg",
          width: 1200,
          height: 630,
          alt: "Villo Utvikling logo",
          type: "image/png",
        },
      ],
    },
    twitter: {
      images: ["/images/logo/Villo_Utvikling_full-Logo.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        no: `${baseUrl}/no`,
        en: `${baseUrl}/en`,
      },
    },
    icons: {
      icon: "/images/logo/logo-lightmode.svg",
      apple: "/images/logo/logo-lightmode.svg",
    },
  };
}
