import { enUS, srLatn } from "date-fns/locale"
import { Language } from "./types"

export const languages: Language[] = [
  {
    code: "en",
    display_name: "English",
    ltr: true,
    date_locale: enUS,
  },
  {
    code: "sr",
    display_name: "Srpski",
    ltr: true,
    date_locale: srLatn,
  },
]
