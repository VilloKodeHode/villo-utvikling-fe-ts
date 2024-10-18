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
      { text: "Kontakt", href: "/contact", },
      { text: "Tjenester", href: "/services_provided", },
      // { text: "Laster", href: "/loading",},
    ],
    drop_down: {
      text: "Tjenester",
      drop_down_items: [
        { text: "Ny nettside", href: "/services_provided/website" },
        { text: "Forbedre SEO", href: "/services_provided/SEO" },
        { text: "Nytt nettinnhold", href: "/services_provided/webcontent" },
        { text: "Content management system", href: "/services_provided/CMS" },
        { text: "Sosiale media integrasjon", href: "/services_provided/sosialmedia_integration" },
      ]
    }
  },
  {
    language: "English",
    menu_items: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about", },
      { text: "Portfolio", href: "/portfolio", },
      // { text: "Work", href: "/work", },
      // { text: "AI art", href: "/aiArt", },
      { text: "Contact", href: "/contact", },
      { text: "Services", href: "/services_provided", },
      // { text: "Loading", href: "/loading",},
    ],
    drop_down: {
      text: "Services",
      drop_down_items: [
        { text: "New website", href: "/services_provided/website" },
        { text: "Improved SEO", href: "/services_provided/SEO" },
        { text: "New webcontent", href: "/services_provided/webcontent" },
        { text: "Content management system", href: "/services_provided/CMS" },
        { text: "Social media integration", href: "/services_provided/sosialmedia_integration" },
      ]
    }
  },
];

export const LOGO = [
  {
    light: {
      text: "Home",
      href: "/",
      imageSrc: "/logo/WindLogoLightmode.svg",
      imageWidth: 200,
      imageHeight: 200,
    },
  },
  {
    dark: {
      text: "Home",
      href: "/",
      imageSrc: "/logo/WindLogoDarkmode.svg",
      imageWidth: 200,
      imageHeight: 200,
    },
  },
];

export default MENU_LIST;
