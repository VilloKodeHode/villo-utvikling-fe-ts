import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.villoutvikling.com"),
  title: {
    default: "Villo Utvikling",
    template: "%s | Villo Utvikling",
  },
  description:
    "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider for bedrifter, klubber og privatpersoner.",
  keywords:
    "webutvikling, frontend utvikling, SEO tjenester, webdesign, nettsider, hjemmeside, bedriftside, klubbside, headless CMS, Sanity, MongoDB, JavaScript, freelance utvikler, rimelige webutvikling priser, profesjonell webutvikler, Vestfold, Tønsberg, Sandefjord, Oslo, Norge",
  authors: [{ name: "Joakim Villo - Villo Utvikling" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.villoutvikling.com/en",
    languages: {
      no: "https://www.villoutvikling.com/no",
      en: "https://www.villoutvikling.com/en",
    },
  },
  openGraph: {
    title: "Villo Utvikling",
    description:
      "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider for bedrifter, klubber og privatpersoner.",
    url: "https://www.villoutvikling.com",
    siteName: "Villo Utvikling",
    locale: "no-NO",
    type: "website",
    images: [
      {
        url: "https://github.com/VilloKodeHode/villo-utvikling-fe-ts/blob/main/public/images/logo/Villo_Utvikling_full-Logo.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Villo Utvikling logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villo Utvikling",
    description:
      "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider.",
    images: [
      "https://github.com/VilloKodeHode/villo-utvikling-fe-ts/blob/main/public/images/logo/Villo_Utvikling_full-Logo.png?raw=true",
    ],
  },
  icons: {
    icon: "/images/logo/logo-lightmode.svg",
    apple: "/images/logo/logo-lightmode.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
