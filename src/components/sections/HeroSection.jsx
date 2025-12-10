import Button from '@/components/ui/Button.jsx'
import { SETMORE_BOOKING_URL } from '@/constants.js'
import { useTranslation } from 'react-i18next'

const HERO_BACKGROUND = '/images/hero-placeholder.jpg'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="@container">
      <div
        className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 71, 49, 0.6) 0%, rgba(26, 71, 49, 0.8) 100%), url("${HERO_BACKGROUND}")`,
        }}
      >
        <div className="flex max-w-2xl flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gradient-gold sm:text-5xl md:text-6xl pb-2">
            {t('hero.title')}
          </h1>
          <p className="text-lg font-normal leading-normal text-gray-200">
            {t('hero.description')}
          </p>
          <div className="mt-6">
            <Button 
              href={SETMORE_BOOKING_URL} 
              external 
              className="mx-auto px-8 py-4 text-xl font-bold shadow-xl hover:shadow-2xl"
            >
              {t('cta.bookEscape')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
