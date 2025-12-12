import { useTranslation, Trans } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import CertificatesCarousel from '../components/sections/CertificatesCarousel';

/**
 * AboutUs Page (Über Uns)
 * 
 * Features:
 * - Therapist introduction with photo and bio
 * - Certificates carousel with landscape and portrait images
 * - Fully responsive layout
 * - i18n support for DE/EN
 */
function AboutUs() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>Über Uns | Chang Thong Thaimassage Berlin</title>
        <meta
          name="description"
          content="Lernen Sie unser erfahrenes Team kennen. Chang Thong Thaimassage bietet zertifizierte Massagetherapeuten und eine ruhige Atmosphäre für Ihre Erholung."
        />
        <link rel="canonical" href="https://changthong-thaimassage.de/about-us" />
      </Helmet>
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-primary dark:text-primary-accent text-center mb-16">
          {t('about.pageTitle')}
        </h1>

        {/* Section 1: Therapist Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Owner Photo */}
          <div className="flex justify-center">
            <img
              src="/images/owner-placeholder.png"
              alt={t('about.ownerAlt')}
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>

          {/* Right Column: Bio Text */}
          <div>
            <h2 className="text-2xl font-bold text-primary-accent mb-6">
              {t('about.introTitle')}
            </h2>
            <p className="text-lg text-primary dark:text-text-dark leading-relaxed">
              {t('about.bio1')}
            </p>
            <p className="text-lg text-primary dark:text-text-dark leading-relaxed mt-4">
              <Trans i18nKey="about.bio2" components={[<strong className="font-bold" />]} />
            </p>
            <p className="text-lg text-primary dark:text-text-dark leading-relaxed mt-4">
              {t('about.bio3')}
            </p>
          </div>
        </div>

        {/* Section 2: Certificates Carousel */}
        <CertificatesCarousel />
      </div>
    </Layout>
  );
}

export default AboutUs;
