import { useTranslation, Trans } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';

/**
 * Picture Credits Page
 * 
 * Features:
 * - Attribution for images from Freepik and other sources
 * - Compliance with licensing requirements
 * - Fully responsive layout
 * - i18n support for DE/EN
 */
function PictureCredits() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>Bildnachweise | Chang Thong Thaimassage</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://changthong-thaimassage.de/picture-credits" />
      </Helmet>
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-primary dark:text-primary-accent text-center mb-8">
          {t('credits.pageTitle')}
        </h1>

        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <p className="text-lg text-primary dark:text-text-dark leading-relaxed mb-8">
            {t('credits.intro')}
          </p>

          {/* Credits List */}
          <div className="space-y-6">
            <div className="border-l-4 border-primary-accent pl-4">
              <h2 className="text-xl font-bold text-primary-accent mb-2">
                {t('credits.freepikTitle')}
              </h2>
              <p className="text-base text-primary dark:text-text-dark leading-relaxed">
                {t('credits.freepikText')}
              </p>
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-accent hover:underline mt-2 inline-block"
              >
                www.freepik.com
              </a>
            </div>

            <div className="border-l-4 border-primary-accent pl-4">
              <h2 className="text-xl font-bold text-primary-accent mb-2">
                {t('credits.aiGeneratedTitle')}
              </h2>
              <p className="text-base text-primary dark:text-text-dark leading-relaxed">
                {t('credits.aiGeneratedText')}
              </p>
            </div>

            <div className="border-l-4 border-primary-accent pl-4">
              <h2 className="text-xl font-bold text-primary-accent mb-2">
                {t('credits.imagesUsed')}
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-base text-primary dark:text-text-dark">
                <li>
                  <Trans
                    i18nKey="credits.antistressImg"
                    components={[
                      <strong className="font-bold" />,
                      <a
                        href="https://www.freepik.com/free-photo/woman-relaxing-spa_12930396.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-accent hover:underline"
                      />
                    ]}
                  />
                </li>
                <li>
                  <Trans
                    i18nKey="credits.deeptissueImg"
                    components={[
                      <strong className="font-bold" />,
                      <a
                        href="https://www.freepik.com/free-photo/young-woman-receiving-back-massage-spa-center_1319025.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-accent hover:underline"
                      />
                    ]}
                  />
                </li>
                <li>
                  <Trans
                    i18nKey="credits.lomilomiImg"
                    components={[<strong className="font-bold" />]}
                  />
                </li>
                <li>
                  <Trans
                    i18nKey="credits.footmassageImg"
                    components={[
                      <strong className="font-bold" />,
                      <a
                        href="https://www.freepik.com/free-photo/close-up-foot-massage-concept_7946001.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-accent hover:underline"
                      />
                    ]}
                  />
                </li>
              </ol>
            </div>

            <div className="border-l-4 border-primary-accent pl-4">
              <h2 className="text-xl font-bold text-primary-accent mb-2">
                {t('credits.licenseTitle')}
              </h2>
              <p className="text-base text-primary dark:text-text-dark leading-relaxed">
                {t('credits.licenseText')}
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-primary/5 dark:bg-primary-accent/10 rounded-lg">
            <p className="text-sm text-primary dark:text-text-dark leading-relaxed">
              {t('credits.footerNote')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PictureCredits;
