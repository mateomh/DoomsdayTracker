import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath:
        `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json?v=` +
        new Date().getTime(),
    },
    detection: {
      caches: [],
      lookupQueryString: "lng",
      order: ["querystring", "navigator"]
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n;