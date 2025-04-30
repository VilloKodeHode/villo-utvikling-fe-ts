import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your custom Next.js config here (i18n, images, etc)
};

// Enable analyzer conditionally
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Wrap the config
const configWithAnalyzer = withBundleAnalyzer(nextConfig);

export default configWithAnalyzer;
