import type { Metadata } from "next";
import { Figtree, Noto_Color_Emoji } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import CookiePopup from "@components/ui/cookies/CookiePopup";
import { AppUserProvider } from "@contexts/UserContext";
import { NavBar } from "@components/ui/navigation/navbar/NavBar";
import { Header } from "@components/ui/header/Header";
import Footer from "@components/ui/footer/Footer";
import { FloatingUtilsBar } from "@components/ui/header/floatingUtilBar/FloatingUtilBar";
import type { RootProps } from "@app-types/PageProps";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.villoutvikling.no"),
  title: {
    default: "Villo Utvikling",
    template: "%s | Villo Utvikling",
  },
  description: "Profesjonell frontend- og webutvikling ...",
};

export default async function RootLayout({ children, params }: RootProps) {
  const { lang } = await params;
  const messages = await getMessages();

  // Cast messages to any for legacy component compatibility
  const dictionary = messages as any;

  return (
    <html lang={lang ? lang : "no"}>
      <body
        className={`${figtree.className} relative min-h-[100vh] transition-colors duration-1000 bg-light-snow dark:bg-dark-midnight overflow-x-hidden antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <AppUserProvider>
            <DynamicTheCosmos />
            <Header />
            <FloatingUtilsBar />
            <NavBar
              params={{ lang }}
              content={dictionary.menu_items}
            />

            <main
              className={` flex flex-col animate-appear items-center px-4 sm:px-6 lg:px-12 justify-start overflow-x-hidden sm:mb-24 mb-12 sm:gap-28 gap-14`}>
              {children}
            </main>
            <Footer content={dictionary.footer} />
            <CookiePopup content={dictionary.cookie} />
            <DynamicFloatingArrowUp />
          </AppUserProvider>
          <SpeedInsights />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
