// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.villoutvikling.com"),
  title: "Villo Utvikling",
  description:
    "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider.",
  openGraph: {
    title: "Villo Utvikling",
    description:
      "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider.",
    url: "https://www.villoutvikling.com",
    siteName: "Villo Utvikling",
    locale: "no-NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villo Utvikling",
    description:
      "Profesjonell frontend- og webutvikling med fokus på responsive, brukervennlige og visuelt tiltalende nettsider.",
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
