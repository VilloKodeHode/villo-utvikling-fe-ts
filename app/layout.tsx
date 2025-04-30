// app/layout.tsx
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
    canonical: "https://www.villoutvikling.com/no",
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
    // ✅ No 'images' field – uses app/opengraph-image.png automatically
  },
  twitter: {
    card: "summary_large_image",
    title: "Villo Utvikling",
    description:
      "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider.",
    // ✅ No 'images' field – uses app/twitter-image.png automatically
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
      <body>{children}</body>
    </html>
  );
}
