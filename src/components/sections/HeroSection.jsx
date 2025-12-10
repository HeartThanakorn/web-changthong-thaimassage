import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button.jsx'
import { SETMORE_BOOKING_URL } from '@/constants.js'
import { useTranslation } from 'react-i18next'

const HERO_IMAGES = [
  '/images/hero-placeholder.jpg',
  '/images/hero-placeholder2.jpg',
  '/images/hero-placeholder3.jpg',
]

export default function HeroSection() {
  const { t } = useTranslation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="@container relative">
      {/* Background Images with Fade Transition */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url("${image}")`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative flex min-h-[45vh] md:min-h-[50vh] lg:min-h-[85vh] landscape:min-h-[85vh] flex-col items-center justify-center p-4 py-12 md:py-8 lg:py-4">
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
