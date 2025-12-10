import { useTranslation } from 'react-i18next'
import ServiceCard from '@/components/cards/ServiceCard.jsx'

const SERVICES = [
  {
    key: 'flowmassage',
    imageUrl: '/images/service-thaiflowmassage.png',
    alt: 'Therapist performing a Thai flow massage with gentle stretches',
  },
  {
    key: 'antistress',
    imageUrl: '/images/service-antistress.jpg',
    alt: 'Relaxing anti-stress massage for deep relaxation',
  },
  {
    key: 'deeptissue',
    imageUrl: '/images/service-deeptissue.jpg',
    alt: 'Deep tissue massage targeting muscle layers',
  },
  {
    key: 'lomilomi',
    imageUrl: '/images/service-lomilomi.jpg',
    alt: 'Hawaiian Lomi-Lomi massage with flowing movements',
  },
  {
    key: 'footmassage',
    imageUrl: '/images/service-footmassage.jpg',
    alt: 'Revitalizing foot massage for tired feet and legs',
  },
]

export default function TreatmentsSection() {
  const { t } = useTranslation()

  return (
    <section id="treatments" className="pt-4 pb-8 sm:pt-6 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-accent sm:text-4xl pb-1">
            {t('sections.treatments.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light/80 dark:text-text-dark/80">
            {t('sections.treatments.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.key}
              title={t(`sections.treatments.services.${service.key}.title`)}
              description={t(
                `sections.treatments.services.${service.key}.description`,
              )}
              pricing={t(`sections.treatments.services.${service.key}.pricing`, { returnObjects: true })}
              imageUrl={service.imageUrl}
              alt={service.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
