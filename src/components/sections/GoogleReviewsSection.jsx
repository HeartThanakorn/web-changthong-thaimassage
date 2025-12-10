import { useTranslation } from 'react-i18next'

/**
 * Google Reviews Section
 * 
 * Displays Google Reviews using ElfSight widget
 * Widget ID: 9a975cca-540e-483f-95c1-2605c33e9d0e
 */
export default function GoogleReviewsSection() {
    const { t } = useTranslation()

    return (
        <section className="py-12 sm:py-16 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-accent text-center mb-8">
                    {t('reviews.title', 'Was unsere Kunden sagen')}
                </h2>

                {/* ElfSight Google Reviews Widget */}
                <div className="max-w-6xl mx-auto">
                    <div
                        className="elfsight-app-9a975cca-540e-483f-95c1-2605c33e9d0e"
                        data-elfsight-app-lazy
                    ></div>
                </div>
            </div>
        </section>
    )
}
