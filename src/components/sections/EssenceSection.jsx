import { useTranslation } from 'react-i18next'

export default function EssenceSection() {
    const { t } = useTranslation()

    return (
        <section className="bg-gradient-to-b from-primary/5 to-transparent dark:from-primary-accent/10 dark:to-transparent py-10 md:py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-accent mb-6">
                        {t('sections.essence.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-primary/80 dark:text-text-dark leading-relaxed">
                        {t('sections.essence.description')}
                    </p>
                </div>
            </div>
            {/* Decorative Divider */}
            <div className="mt-10 md:mt-16 flex justify-center">
                <div className="w-64 h-1 bg-gradient-to-r from-transparent via-primary-accent to-transparent rounded-full" />
            </div>
        </section>
    )
}
