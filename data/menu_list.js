// This file contains the menu list for the navigation

export const MENU_LIST = [
  {
    language: "Norwegian",
    menu_items: [
      { text: "Hjem", href: "/" },
      { text: "Om", href: "/about" },
      {
        text: "Portofølje",
        href: "/portfolio",
      },
      // { text: "Arbeid", href: "/work", },
      // { text: "AI kunst", href: "/aiArt", },
      { text: "Kontakt", href: "/contact" },
      { text: "Tjenester", href: "/services" },
      // { text: "Laster", href: "/loading",},
    ],
    drop_down: {
      text: "Tjenester",
      drop_down_items: [
        { text: "Ny nettside", href: "/services/website" },
        { text: "Forbedre SEO", href: "/services/SEO" },
        { text: "Nytt nettinnhold", href: "/services/webcontent" },
        { text: "Content management system", href: "/services/CMS" },
        {
          text: "Sosiale media integrasjon",
          href: "/services/sosialmedia_integration",
        },
      ],
    },
  },
  {
    language: "English",
    menu_items: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Portfolio", href: "/portfolio" },
      // { text: "Work", href: "/work", },
      // { text: "AI art", href: "/aiArt", },
      { text: "Contact", href: "/contact" },
      { text: "Services", href: "/services" },
      // { text: "Loading", href: "/loading",},
    ],
    drop_down: {
      text: "Services",
      drop_down_items: [
        { text: "New website", href: "/services/website" },
        { text: "Improved SEO", href: "/services/SEO" },
        { text: "New webcontent", href: "/services/webcontent" },
        { text: "Content management system", href: "/services/CMS" },
        {
          text: "Social media integration",
          href: "/services/sosialmedia_integration",
        },
      ],
    },
  },
];

export default MENU_LIST;
