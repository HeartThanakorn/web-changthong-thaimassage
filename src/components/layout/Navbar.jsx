import { useCallback, useState } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button.jsx'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.jsx'
import { SETMORE_BOOKING_URL } from '@/constants.js'

const NAV_LINKS = [
  { id: 'home', labelKey: 'navigation.home', href: '/' },
  { id: 'services', labelKey: 'navigation.services', href: '#treatments' },
  { id: 'about', labelKey: 'navigation.about', href: '/about-us' },
  { id: 'contact', labelKey: 'navigation.contact', href: '/contact-us' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = useCallback((hash) => {
    if (!hash) return
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const handleNavClick = (event, href) => {
    setOpen(false)

    if (href.startsWith('#')) {
      event.preventDefault()
      const goToSection = () => scrollToSection(href)
      if (location.pathname !== '/') {
        navigate('/', { replace: false })
        setTimeout(goToSection, 120)
      } else {
        goToSection()
      }
      return
    }

    navigate(href)
  }

  return (
    <header className={clsx(
      "sticky top-0 z-50 bg-background-light/80 backdrop-blur-sm dark:bg-background-dark/80",
      location.pathname !== '/' && "border-b-2 border-primary-accent/30"
    )}>
      <div className="w-full px-0 sm:px-2">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4 pl-2 sm:pl-4">
            <img
              src="/images/logo.png"
              alt={t('brand.name')}
              className="h-56 w-auto"
            />
          </div>
          <div className="ml-auto hidden items-center justify-end gap-8 pr-2 sm:pr-4 xl:flex">
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="text-sm font-medium transition-colors hover:text-primary-accent"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </nav>
            <LanguageSwitcher />
            <Button href={SETMORE_BOOKING_URL} external>
              {t('cta.book')}
            </Button>
          </div>
          <div className="pr-2 sm:pr-4 xl:hidden">
            <button
              type="button"
              className="rounded-md p-2"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="material-symbols-outlined text-primary-accent">
                menu
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'xl:hidden',
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none hidden opacity-0',
        )}
      >
        <div className="bg-background-light px-6 py-4 shadow-lg dark:bg-background-dark">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-base font-semibold uppercase tracking-wide text-primary transition hover:text-primary-accent dark:text-text-dark"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-4">
            <LanguageSwitcher />
            <Button href={SETMORE_BOOKING_URL} external className="w-full">
              {t('cta.book')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
