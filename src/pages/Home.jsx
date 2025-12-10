import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Layout from '@/components/layout/Layout.jsx'
import HeroSection from '@/components/sections/HeroSection.jsx'
import EssenceSection from '@/components/sections/EssenceSection.jsx'
import TreatmentsSection from '@/components/sections/TreatmentsSection.jsx'
import GoogleReviewsSection from '@/components/sections/GoogleReviewsSection.jsx'
import AboutSection from '@/components/sections/AboutSection.jsx'
// import TestimonialsSection from '@/components/sections/TestimonialsSection.jsx'

export default function HomePage() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <Layout>
      <Helmet>
        <title>Chang Thong Thaimassage | Traditionelle Thai Massage in Berlin</title>
        <meta
          name="description"
          content="Erleben Sie authentische Thai-Massage und Entspannung im Herzen von Berlin. Traditionelle Techniken, Aromatherapie und Wellness für Körper und Geist bei Chang Thong Thaimassage."
        />
        <link rel="canonical" href="https://thaithanyamassage.de/" />
      </Helmet>
      <HeroSection />
      <EssenceSection />
      <TreatmentsSection />
      <GoogleReviewsSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
    </Layout>
  )
}
