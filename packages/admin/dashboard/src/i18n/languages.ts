import { srLatn } from "date-fns/locale"
import { Language } from "./types"

export const languages: Language[] = [
  {
    code: "sr",
    display_name: "Srpski",
    ltr: true,
    date_locale: srLatn,
  },
]
