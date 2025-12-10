import { useCallback, useEffect, useMemo, useState } from 'react'
import i18n, { LANGUAGE_STORAGE_KEY } from '@/i18n/config'
import { LanguageContext } from './LanguageContext.js'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(i18n.language ?? 'de')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setLanguage(lng)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lng)
      }
    }

    i18n.on('languageChanged', handleLanguageChanged)
    return () => {
      i18n.off('languageChanged', handleLanguageChanged)
    }
  }, [])

  const changeLanguage = useCallback(
    async (lng) => {
      if (!lng || lng === language) return
      setIsLoading(true)
      try {
        await i18n.changeLanguage(lng)
      } finally {
        setIsLoading(false)
      }
    },
    [language],
  )

  const value = useMemo(
    () => ({
      language,
      isGerman: language?.startsWith('de'),
      isEnglish: language?.startsWith('en'),
      changeLanguage,
      isLoading,
    }),
    [language, changeLanguage, isLoading],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
