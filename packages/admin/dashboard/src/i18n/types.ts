import type { Locale } from "date-fns"
import enUS from "./translations/en.json"
import srLtn from "./translations/sr.json"

const resources = {
  translation: srLtn,
} as const

export type Resources = typeof resources

export type Language = {
  code: string
  display_name: string
  ltr: boolean
  date_locale: Locale
}
