import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/hooks/useLanguage.js'

const LANGUAGES = [
  { code: 'de', badge: 'DE', labelKey: 'language.german' },
  { code: 'en', badge: 'EN', labelKey: 'language.english' },
]

export default function LanguageSwitcher({ className }) {
  const { language, changeLanguage, isLoading } = useLanguage()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)
  const panelRef = useRef(null)

  const currentLanguage = useMemo(
    () =>
      LANGUAGES.find((item) => language?.startsWith(item.code)) ??
      LANGUAGES[0],
    [language],
  )

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (event) => {
      if (
        panelRef.current?.contains(event.target) ||
        buttonRef.current?.contains(event.target)
      ) {
        return
      }
      setIsOpen(false)
    }
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  const handleToggle = () => setIsOpen((prev) => !prev)

  const handleSelect = (code) => {
    changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className={clsx('relative inline-flex', className)}>
      <button
        ref={buttonRef}
        type="button"
        disabled={isLoading}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={clsx(
          'flex items-center gap-2 rounded-full border border-white/20 bg-primary/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-text-dark shadow-lg backdrop-blur transition hover:bg-primary',
          'dark:bg-white/10 dark:border-white/20',
        )}
        aria-label={t('language.switchLabel')}
      >
        <span className="material-symbols-outlined text-base">language</span>
        <span>{currentLanguage?.badge}</span>
        <span
          className={clsx(
            'material-symbols-outlined text-base transition-transform',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
        >
          expand_more
        </span>
      </button>

      <div
        ref={panelRef}
        role="listbox"
        aria-activedescendant={currentLanguage?.code}
        className={clsx(
          'absolute right-0 top-full mt-2 min-w-[160px] rounded-2xl border border-primary/10 bg-white/95 p-2 shadow-xl ring-1 ring-black/5 transition',
          'dark:bg-primary dark:text-text-dark',
          isOpen
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0',
        )}
      >
        {LANGUAGES.map((item) => (
          <button
            key={item.code}
            id={item.code}
            type="button"
            onClick={() => handleSelect(item.code)}
            disabled={isLoading}
            className={clsx(
              'flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition',
              item.code === currentLanguage?.code
                ? 'bg-primary/10 font-semibold text-primary dark:bg-white/20 dark:text-text-dark'
                : 'text-primary hover:bg-primary/10 dark:text-text-dark dark:hover:bg-white/10',
            )}
          >
            <span className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-2 py-1 text-[0.65rem] font-bold tracking-widest text-primary dark:bg-white/20 dark:text-text-dark">
                {item.badge}
              </span>
              {t(item.labelKey)}
            </span>
            {item.code === currentLanguage?.code && (
              <span className="material-symbols-outlined text-lg text-primary dark:text-text-dark">
                check
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
