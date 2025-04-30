/** @type {import('next-sitemap').IConfig} */
const siteUrl = "https://www.villoutvikling.com";
const languages = ["no", "en"];

const staticPaths = [
  "", // homepage
  "/about",
  "/contact",
  "/portfolio",
  "/services",
  "/services/website",
  "/services/SEO",
  "/services/webcontent",
  "/services/CMS",
  "/services/sosialmedia_integration",
];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/admin", "/404", "/500"],

  additionalPaths: async () => {
    const allPaths = [];

    for (const lang of languages) {
      for (const path of staticPaths) {
        const fullPath = `/${lang}${path}`;
        allPaths.push({
          loc: `${siteUrl}${fullPath}`,
          changefreq: "weekly",
          priority: 0.7,
          alternateRefs: languages.map((lng) => ({
            href: `${siteUrl}/${lng}${path}`,
            hreflang: lng,
          })),
        });
      }
    }

    return allPaths;
  },
};
