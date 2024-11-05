// src/i18n/languages.ts
import { enUS, srLatn } from "date-fns/locale";
var languages = [
  {
    code: "en",
    display_name: "English",
    ltr: true,
    date_locale: enUS
  },
  {
    code: "sr",
    display_name: "Srpski",
    ltr: true,
    date_locale: srLatn
  }
];

export {
  languages
};
