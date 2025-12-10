import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import { SETMORE_BOOKING_URL } from '../constants';

/**
 * ContactUs Page (Kontakt)
 * 
 * Features:
 * - Contact information (address, phone, email)
 * - Opening hours
 * - Embedded map
 * - Booking CTA button
 * - Fully responsive layout
 * - i18n support for DE/EN
 */
function ContactUs() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>Kontakt & Termin | Chang Thong Thaimassage</title>
        <meta
          name="description"
          content="Vereinbaren Sie jetzt Ihren Termin. Kontaktieren Sie uns für Buchungen, Gutscheine oder Fragen. Wir freuen uns auf Ihren Besuch in Berlin."
        />
        <link rel="canonical" href="https://thaithanyamassage.de/contact-us" />
      </Helmet>
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-primary dark:text-primary-accent text-center mb-16">
          {t('contact.pageTitle')}
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Information */}
          <div className="space-y-8 text-center md:pl-12">
            {/* Address Section */}
            <div>
              <h2 className="text-2xl font-bold text-primary-accent mb-4">
                {t('contact.addressTitle')}
              </h2>
              <p className="text-lg text-primary dark:text-text-dark leading-relaxed">
                {t('footer.address.line1')}
              </p>
              <p className="text-lg text-primary dark:text-text-dark leading-relaxed">
                {t('footer.address.line2')}
              </p>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-primary-accent mb-4">
                {t('contact.contactTitle')}
              </h2>
              <p className="text-lg text-primary dark:text-text-dark leading-relaxed">
                <span className="font-semibold">{t('contact.phoneLabel')}</span> {t('footer.address.phone')}
              </p>
              <p className="text-lg text-primary dark:text-text-dark leading-relaxed">
                <span className="font-semibold">{t('contact.emailLabel')}</span> {t('footer.address.email')}
              </p>
            </div>

            {/* Opening Hours */}
            <div>
              <h2 className="text-2xl font-bold text-primary-accent mb-4">
                {t('footer.hoursTitle')}
              </h2>
              <p className="text-lg text-primary dark:text-text-dark leading-relaxed">
                {t('footer.hours.monSat')}
              </p>
              <p className="text-lg text-primary dark:text-text-dark leading-relaxed">
                {t('footer.hours.sunday')}
              </p>
            </div>

            {/* Booking CTA */}
            <div className="pt-4">
              <a
                href={SETMORE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                {t('cta.book')}
              </a>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="text-center md:pr-12">
            <h2 className="text-2xl font-bold text-primary-accent mb-4">
              {t('contact.mapTitle')}
            </h2>
            <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4891536394896!2d13.345826776926445!3d52.49448097981284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850f6e8e8e8e8%3A0x1234567890abcdef!2sFuggerstra%C3%9Fe%206%2C%2010777%20Berlin!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contact.mapTitle')}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
