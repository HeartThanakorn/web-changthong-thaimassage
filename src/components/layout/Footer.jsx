import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="relative bg-primary dark:bg-background-dark text-white">
      {/* subtle gold accent strip to separate footer from content (match container width and copyright border) */}
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* separator that matches the copyright border width */}
        <div className="mx-auto mb-6 w-full border-t border-primary-accent/30" />

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 xl:gap-40">
          <div className="text-center md:text-left">
            <h3 className="mb-4 font-bold text-primary-accent">
              {t('footer.contactTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>{t('footer.address.line1')}</li>
              <li>{t('footer.address.line2')}</li>
              <li>{t('footer.address.phone')}</li>
              <li>{t('footer.address.email')}</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 font-bold text-primary-accent">
              {t('footer.hoursTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>{t('footer.hours.monSat')}</li>
              <li>{t('footer.hours.sunday')}</li>
            </ul>
          </div>

          {/* Temporarily hidden - social media not active yet
          <div className="text-center md:text-left">
            <h3 className="mb-4 font-bold text-primary-accent">
              {t('footer.socialTitle')}
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                className="text-white/80 transition-colors hover:text-primary-accent"
                href="#"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7.02h-2.53v-2.89h2.53V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v7.02c4.78-.75 8.44-4.9 8.44-9.9C22 6.53 17.5 2.04 12 2.04z" />
                </svg>
              </a>
              <a
                className="text-white/80 transition-colors hover:text-primary-accent"
                href="#"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.55 2.5c.3 0 .58.05.84.15.24.1.48.25.68.45.2.2.35.44.45.68.1.26.15.53.15.84v15.86c0 .3-.05.58-.15.84-.1.24-.25.48-.45.68-.2.2-.44.35-.68.45-.26.1-.53.15-.84.15H5.62c-.3 0-.58-.05-.84-.15-.24-.1-.48-.25-.68-.45-.2-.2-.35-.44-.45-.68-.1-.26-.15-.53-.15-.84V4.62c0-.3.05-.58.15-.84.1-.24.25-.48.45-.68.2-.2.44-.35.68-.45.26-.1.53-.15.84-.15h1.93zm9.9 0c.3 0 .58.05.84.15.24.1.48.25.68.45.2.2.35.44.45.68.1.26.15.53.15.84v15.86c0 .3-.05.58-.15.84-.1.24-.25.48-.45.68-.2.2-.44.35-.68.45-.26.1-.53.15-.84-.15h-1.93c-.3 0-.58-.05-.84-.15-.24-.1-.48-.25-.68-.45-.2-.2-.35-.44-.45-.68-.1-.26-.15-.53-.15-.84V4.62c0-.3.05-.58.15-.84.1-.24.25-.48.45-.68.2-.2.44-.35.68-.45.26-.1.53-.15.84-.15h1.93zm-4.95 0c.3 0 .58.05.84.15.24.1.48.25.68.45.2.2.35.44.45.68.1.26.15.53.15.84v15.86c0 .3-.05.58-.15.84-.1.24-.25.48-.45.68-.2.2-.44.35-.68.45-.26.1-.53.15-.84.15h-1.93c-.3 0-.58-.05-.84-.15-.24-.1-.48-.25-.68-.45-.2-.2-.35-.44-.45-.68-.1-.26-.15-.53-.15-.84V4.62c0-.3.05-.58.15-.84.1-.24.25-.48.45-.68.2-.2.44-.35.68-.45.26-.1.53-.15.84-.15h1.93z" />
                </svg>
              </a>
              <a
                className="text-white/80 transition-colors hover:text-primary-accent"
                href="#"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.62 14.25c-.23.13-.53.1-.7-.2l-2.4-2.4c-.13-.13-.33-.13-.45 0l-2.4 2.4c-.17.17-.47.2-.7.1-.23-.1-.38-.3-.38-.55V8.8c0-.3.25-.55.55-.55h7.5c.3 0 .55.25.55.55v4.9c0 .25-.15.45-.37.55z" />
                </svg>
              </a>
            </div>
          </div>
          */}
        </div>

        <div className="mt-8 border-t border-primary-accent/30 pt-8 text-center text-sm text-white/70">
          <p>
            © 2025 {t('brand.name')}. {t('footer.copyright')}
          </p>
          <div className="mt-2 space-x-4">
            <Link className="hover:underline text-white/80" to="/impressum">
              {t('legal.impressumTitle')}
            </Link>
            <span className="text-white/60">·</span>
            <Link className="hover:underline text-white/80" to="/datenschutz">
              {t('legal.privacyTitle')}
            </Link>
            <span className="text-white/60">·</span>
            <Link className="hover:underline text-white/80" to="/picture-credits">
              {t('credits.pageTitle')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
