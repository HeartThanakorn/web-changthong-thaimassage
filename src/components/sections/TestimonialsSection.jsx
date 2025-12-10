import TestimonialCard from '@/components/cards/TestimonialCard.jsx'
import { useTranslation } from 'react-i18next'

export default function TestimonialsSection() {
  const { t } = useTranslation()
  const testimonials = t('sections.testimonials.items', { returnObjects: true })

  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-accent sm:text-4xl">
            {t('sections.testimonials.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light/80 dark:text-text-dark/80">
            {t('sections.testimonials.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.author}
              text={item.text}
              author={item.author}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
