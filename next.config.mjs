import createNextIntlPlugin from 'next-intl/plugin';
import bundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin('./next-intl.config.mjs');
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // your custom Next.js config here (i18n, images, etc)
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
