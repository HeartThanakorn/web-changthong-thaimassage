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
        <section
            className="py-6 sm:py-8"
            style={{ backgroundColor: '#EDE7F6' }}
        >
            <div className="container mx-auto px-4">
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
