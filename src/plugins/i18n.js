import { createI18n } from "vue-i18n";
import en from "./locales/en";
import yr from "./locales/yr";

const messages = {
  en: en,
  yr: yr,
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
