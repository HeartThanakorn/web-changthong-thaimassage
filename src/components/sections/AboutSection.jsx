import { useTranslation } from 'react-i18next'

const ABOUT_IMAGE = '/images/about-placeholder.jpg'

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-primary py-8 dark:bg-background-dark sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="w-full">
            <div
              className="aspect-[4/3] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url('${ABOUT_IMAGE}')` }}
              data-alt="A tranquil image of the spa's founder arranging orchids"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-primary-accent sm:text-4xl">
              {t('sections.about.title')}
            </h2>
            <p className="text-base leading-relaxed text-text-dark/80">
              {t('sections.about.paragraph1')}
            </p>
            <p className="text-base leading-relaxed text-text-dark/80">
              {t('sections.about.paragraph2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
