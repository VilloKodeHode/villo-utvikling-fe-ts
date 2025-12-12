import bundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your custom Next.js config here (i18n, images, etc)
};

// Enable analyzer conditionally
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Wrap the config
const configWithAnalyzer = withBundleAnalyzer(withNextIntl(nextConfig));

export default configWithAnalyzer;
