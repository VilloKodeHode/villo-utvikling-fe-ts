/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://www.villoutvikling.com/';

const languages = ['no', 'en']; // Add more if needed

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin', '/404', '/500'],
  transform: async (config, path) => {
    // Only include language-prefixed paths
    if (!/^\/(no|en)(\/|$)/.test(path)) {
      return null;
    }

    const langMatch = path.match(/^\/(no|en)(\/.*)?$/);
    const lang = langMatch?.[1];
    const subPath = langMatch?.[2] || '';

    return {
      loc: `${siteUrl}/${lang}${subPath}`,
      changefreq: 'weekly',
      priority: 0.7,
      alternateRefs: languages.map((lng) => ({
        href: `${siteUrl}/${lng}${subPath}`,
        hreflang: lng,
      })),
    };
  },
};
