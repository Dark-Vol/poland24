import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ruFaq from "./public/static/locales/ru/faq.json";
import ukFaq from "./public/static/locales/uk/faq.json";
import ruBanner from "./public/static/locales/ru/banner.json";
import ukBanner from "./public/static/locales/uk/banner.json";
import ruNavigation from "./public/static/locales/ru/navigation.json";
import ukNavigation from "./public/static/locales/uk/navigation.json";
import ruAbout from "./public/static/locales/ru/about.json";
import ukAbout from "./public/static/locales/uk/about.json";
import ruReviews from "./public/static/locales/ru/reviews.json";
import ukReviews from "./public/static/locales/uk/reviews.json";
import ruContacts from "./public/static/locales/ru/contacts.json";
import ukContacts from "./public/static/locales/uk/contacts.json";
import ruHeader from "./public/static/locales/ru/header.json";
import ukHeader from "./public/static/locales/uk/header.json";
import ruProfile from "./public/static/locales/ru/profile.json";
import ukProfile from "./public/static/locales/uk/profile.json";
import ruOrder from "./public/static/locales/ru/order.json";
import ukOrder from "./public/static/locales/uk/order.json";
import ruHowItWorks from "./public/static/locales/ru/howItWorks.json";
import ukHowItWorks from "./public/static/locales/uk/howItWorks.json";
import ruHome from "./public/static/locales/ru/home.json";
import ukHome from "./public/static/locales/uk/home.json";
import ruCommon from "./public/static/locales/ru/common.json";
import ukCommon from "./public/static/locales/uk/common.json";
import ruRequest from "./public/static/locales/ru/request.json";
import ukRequest from "./public/static/locales/uk/request.json";
import ruCountry from "./public/static/locales/ru/country.json";
import ukCountry from "./public/static/locales/uk/country.json";
import ruAdmin from "./public/static/locales/ru/admin.json";
import ukAdmin from "./public/static/locales/uk/admin.json";
import ukShopsFilter from "./public/static/locales/uk/shopsFilter.json";
import ruShopsFilter from "./public/static/locales/ru/shopsFilter.json";
import enFaq from "./public/static/locales/en/faq.json";
import plFaq from "./public/static/locales/pl/faq.json";
import enBanner from "./public/static/locales/en/banner.json";
import plBanner from "./public/static/locales/pl/banner.json";
import enNavigation from "./public/static/locales/en/navigation.json";
import plNavigation from "./public/static/locales/pl/navigation.json";
import enAbout from "./public/static/locales/en/about.json";
import plAbout from "./public/static/locales/pl/about.json";
import enReviews from "./public/static/locales/en/reviews.json";
import plReviews from "./public/static/locales/pl/reviews.json";
import enContacts from "./public/static/locales/en/contacts.json";
import plContacts from "./public/static/locales/pl/contacts.json";
import enHeader from "./public/static/locales/en/header.json";
import plHeader from "./public/static/locales/pl/header.json";
import enProfile from "./public/static/locales/en/profile.json";
import plProfile from "./public/static/locales/pl/profile.json";
import enOrder from "./public/static/locales/en/order.json";
import plOrder from "./public/static/locales/pl/order.json";
import enHowItWorks from "./public/static/locales/en/howItWorks.json";
import plHowItWorks from "./public/static/locales/pl/howItWorks.json";
import enHome from "./public/static/locales/en/home.json";
import plHome from "./public/static/locales/pl/home.json";
import enCommon from "./public/static/locales/en/common.json";
import plCommon from "./public/static/locales/pl/common.json";
import enRequest from "./public/static/locales/en/request.json";
import plRequest from "./public/static/locales/pl/request.json";
import enCountry from "./public/static/locales/en/country.json";
import plCountry from "./public/static/locales/pl/country.json";
import enAdmin from "./public/static/locales/en/admin.json";
import plAdmin from "./public/static/locales/pl/admin.json";
import plShopsFilter from "./public/static/locales/pl/shopsFilter.json";
import enShopsFilter from "./public/static/locales/en/shopsFilter.json";
import ukShops from "./public/static/locales/uk/shop.json";
import ruShops from "./public/static/locales/ru/shop.json";
import plShops from "./public/static/locales/pl/shop.json";
import enShops from "./public/static/locales/en/shop.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      banner: ruBanner,
      faq: ruFaq,
      navigation: ruNavigation,
      about: ruAbout,
      reviews: ruReviews,
      contacts: ruContacts,
      header: ruHeader,
      profile: ruProfile,
      order: ruOrder,
      howItWorks: ruHowItWorks,
      home: ruHome,
      common: ruCommon,
      request: ruRequest,
      country: ruCountry,
      admin: ruAdmin,
      shopsFilter: ruShopsFilter,
      shops: ruShops,
    },
    uk: {
      banner: ukBanner,
      faq: ukFaq,
      navigation: ukNavigation,
      about: ukAbout,
      reviews: ukReviews,
      contacts: ukContacts,
      header: ukHeader,
      profile: ukProfile,
      order: ukOrder,
      howItWorks: ukHowItWorks,
      home: ukHome,
      common: ukCommon,
      request: ukRequest,
      country: ukCountry,
      admin: ukAdmin,
      shopsFilter: ukShopsFilter,
      shops: ukShops,
    },
    pl: {
      banner: plBanner,
      faq: plFaq,
      navigation: plNavigation,
      about: plAbout,
      reviews: plReviews,
      contacts: plContacts,
      header: plHeader,
      profile: plProfile,
      order: plOrder,
      howItWorks: plHowItWorks,
      home: plHome,
      common: plCommon,
      request: plRequest,
      country: plCountry,
      admin: plAdmin,
      shopsFilter: plShopsFilter,
      shops: plShops,
    },
    en: {
      banner: enBanner,
      faq: enFaq,
      navigation: enNavigation,
      about: enAbout,
      reviews: enReviews,
      contacts: enContacts,
      header: enHeader,
      profile: enProfile,
      order: enOrder,
      howItWorks: enHowItWorks,
      home: enHome,
      common: enCommon,
      request: enRequest,
      country: enCountry,
      admin: enAdmin,
      shopsFilter: enShopsFilter,
      shops: enShops,
    },
  },
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
