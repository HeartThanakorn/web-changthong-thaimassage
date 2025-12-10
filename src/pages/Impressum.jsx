import { Helmet } from 'react-helmet-async'
import Layout from '@/components/layout/Layout.jsx'

export default function ImpressumPage() {
  return (
    <Layout>
      <Helmet>
        <title>Impressum | Chang Thong Thaimassage</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://thaithanyamassage.de/impressum" />
      </Helmet>
      <section className="mx-auto max-w-3xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="mb-10 text-3xl sm:text-4xl font-bold text-primary-accent">
          Impressum
        </h1>

        <div className="text-text-light dark:text-text-dark">

          {/* 1. ข้อมูลผู้ให้บริการ */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="leading-relaxed">
              <span className="font-bold">Chang Thong Thaimassage</span><br />
              Thanyatorn Kaewchamlong<br />
              Fuggerstraße 6<br />
              10777 Berlin
            </p>
          </div>

          {/* 2. ข้อมูลติดต่อ */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-4">
              Kontakt
            </h2>
            <p className="leading-relaxed">
              <span className="font-semibold">Telefon:</span> +49 (0) 30 587 998 20<br />
              <span className="font-semibold">E-Mail:</span> changthong.berlin@gmail.com
            </p>
          </div>

          {/* 3. ภาษีมูลค่าเพิ่ม */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-4">
              Umsatzsteuer-ID
            </h2>
            {/* กรณีร้านเล็ก (Kleinunternehmer) */}
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet.
            </p>
          </div>

          {/* 5. การระงับข้อพิพาท EU */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-4">
              EU-Streitschlichtung
            </h2>
            <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://consumer-redress.ec.europa.eu/index_en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-accent hover:text-primary dark:hover:text-white underline transition-colors"
              >
                https://consumer-redress.ec.europa.eu/index_en
              </a>.
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h3 className="text-lg font-bold text-primary dark:text-primary-accent mb-2 mt-6">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h3>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          {/* เส้นคั่น */}
          <hr className="my-10 border-primary-accent/20" />

          {/* 6. ข้อกฎหมายความรับผิด (Haftung) */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-primary dark:text-primary-accent mb-3">
                Haftung für Inhalte
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 text-justify">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary dark:text-primary-accent mb-3">
                Haftung für Links
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 text-justify">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary dark:text-primary-accent mb-3">
                Urheberrecht
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 text-justify">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}