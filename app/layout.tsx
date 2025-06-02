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
export const figtree = Figtree({ subsets: ["latin"], display: "swap" });
export const noto_emoji = Noto_Color_Emoji({
  weight: "400",
  subsets: ["emoji"],
  display: "swap",
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
  const baseUrl = "https://www.villoutvikling.no";

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
          type: "image/jpg",
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

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.villoutvikling.com"),
//   title: {
//     default: "Villo Utvikling",
//     template: "%s | Villo Utvikling",
//   },
//   description:
//     "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider for bedrifter, klubber og privatpersoner.",
//   keywords:
//     "webutvikling, frontend utvikling, SEO tjenester, webdesign, nettsider, hjemmeside, bedriftside, klubbside, headless CMS, Sanity, MongoDB, JavaScript, freelance utvikler, rimelige webutvikling priser, profesjonell webutvikler, Vestfold, Tønsberg, Sandefjord, Oslo, Norge",
//   authors: [{ name: "Joakim Villo - Villo Utvikling" }],
//   robots: "index, follow",
//   alternates: {
//     canonical: "https://www.villoutvikling.com/no",
//     languages: {
//       no: "https://www.villoutvikling.com/no",
//       en: "https://www.villoutvikling.com/en",
//     },
//   },
//   openGraph: {
//     title: "Villo Utvikling",
//     description:
//       "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider for bedrifter, klubber og privatpersoner.",
//     url: "https://www.villoutvikling.com",
//     siteName: "Villo Utvikling",
//     locale: "no-NO",
//     type: "website",
//     images: [
//       {
//         url: "/images/logo/Villo_Utvikling_full-Logo.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Villo Utvikling logo",
//         type: "image/png",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Villo Utvikling",
//     description:
//       "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider.",
//     images: ["/images/logo/Villo_Utvikling_full-Logo.jpg"],
//   },
//   icons: {
//     icon: "/images/logo/logo-lightmode.svg",
//     apple: "/images/logo/logo-lightmode.svg",
//   },
//   generator: "Next.js 15",
// };
