import { useTranslation, Trans } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';

/**
 * AboutUs Page (Über Uns)
 * 
 * Features:
 * - Therapist introduction with photo and bio
 * - Qualifications section with 4 certificate images
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
        <link rel="canonical" href="https://thaithanyamassage.de/about-us" />
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
              className="rounded-lg shadow-lg w-full max-w-xs"
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

        {/* Section 2: Qualifications - Hidden until certificates are ready */}
        {/* <div className="mt-16 sm:mt-24">
          <h2 className="text-2xl font-bold text-primary-accent text-center mb-12">
            {t('about.qualificationsTitle')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
            <img
              src="/images/cert-1-placeholder.jpg"
              alt={t('about.certificateAlt')}
              className="rounded-lg shadow-md border-4 border-primary-accent/30 w-full"
            />
            <img
              src="/images/cert-2-placeholder.png"
              alt={t('about.certificateAlt')}
              className="rounded-lg shadow-md border-4 border-primary-accent/30 w-full"
            />
            <img
              src="/images/cert-3-placeholder.png"
              alt={t('about.certificateAlt')}
              className="rounded-lg shadow-md border-4 border-primary-accent/30 w-full"
            />
            <img
              src="/images/cert-4-placeholder.jpg"
              alt={t('about.certificateAlt')}
              className="rounded-lg shadow-md border-4 border-primary-accent/30 w-full"
            />
          </div>

          {/* TODO: (Rechtlicher Hinweis) Alle Platzhalterbilder (owner-placeholder.jpg und cert-*.jpg) MÜSSEN vor dem Go-Live durch echte Fotos ersetzt werden, um Abmahnungen zu vermeiden. */}
        {/* </div> */}
      </div>
    </Layout>
  );
}

export default AboutUs;
