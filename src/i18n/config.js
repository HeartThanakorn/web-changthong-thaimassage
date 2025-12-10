import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import de from './locales/de.json'

export const LANGUAGE_STORAGE_KEY = 'changThongThaimassageLanguage'

const resources = {
  en: { translation: en },
  de: { translation: de },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    supportedLngs: ['de', 'en'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'cookie'],
      caches: ['localStorage'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
    },
    interpolation: {
      escapeValue: false,
    },
    returnEmptyString: false,
    defaultNS: 'translation',
  })

export default i18n
