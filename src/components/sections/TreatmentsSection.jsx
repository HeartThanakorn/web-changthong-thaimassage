import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@/components/ui/Button.jsx'
import { SETMORE_BOOKING_URL } from '@/constants.js'

export default function TreatmentsSection() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('massage')
  const [slideDirection, setSlideDirection] = useState('right')

  const programs = t('sections.treatments.programs', { returnObjects: true })
  const tabs = t('sections.treatments.tabs', { returnObjects: true })

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setSlideDirection(tab === 'wellness' ? 'right' : 'left')
      setActiveTab(tab)
    }
  }

  const activeProgram = programs[activeTab]

  return (
    <section id="treatments" className="pt-0 pb-12 sm:pt-2 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-accent sm:text-4xl pb-1">
            {t('sections.treatments.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light/80 dark:text-text-dark/80">
            {t('sections.treatments.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border-2 border-primary-accent overflow-hidden">
            <button
              onClick={() => handleTabChange('massage')}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeTab === 'massage'
                ? 'bg-primary-accent text-white'
                : 'bg-transparent text-primary-accent hover:bg-primary-accent/10'
                }`}
            >
              {tabs.massage}
            </button>
            <button
              onClick={() => handleTabChange('wellness')}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeTab === 'wellness'
                ? 'bg-primary-accent text-white'
                : 'bg-transparent text-primary-accent hover:bg-primary-accent/10'
                }`}
            >
              {tabs.wellness}
            </button>
          </div>
        </div>

        {/* Discount Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary-accent/10 border border-primary-accent/30 rounded-full px-6 py-2">
            <svg className="h-5 w-5 text-primary-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span className="text-sm font-bold text-primary-accent">
              {t('sections.treatments.discount')}
            </span>
          </div>
        </div>

        {/* Content with Slide Animation */}
        <div className="overflow-hidden">
          <div
            key={activeTab}
            className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-start transition-all duration-500 ease-out ${slideDirection === 'right'
              ? 'animate-slide-in-right'
              : 'animate-slide-in-left'
              }`}
          >
            {/* Image */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={activeProgram.image}
                  alt={activeProgram.imageAlt}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <Button
                href={SETMORE_BOOKING_URL}
                external
                className="mt-10 px-12 py-4 text-xl font-bold shadow-lg hover:shadow-xl"
              >
                {t('cta.book')}
              </Button>
            </div>

            {/* Services List */}
            <div className="space-y-6">
              {activeProgram.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-primary-accent/20 hover:border-primary-accent/40 transition-colors"
                >
                  <h3 className="text-lg font-bold text-primary dark:text-primary-accent mb-3">
                    {service.name}
                  </h3>
                  <div className="space-y-2">
                    {service.prices.map((priceItem, priceIndex) => (
                      <div
                        key={priceIndex}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="text-text-light/70 dark:text-text-dark/70">
                          {priceItem.duration}
                        </span>
                        <span className="font-semibold text-primary-accent">
                          {priceItem.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
