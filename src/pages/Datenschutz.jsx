import { Helmet } from 'react-helmet-async'
import Layout from '@/components/layout/Layout.jsx'

export default function DatenschutzPage() {
  return (
    <Layout>
      <Helmet>
        <title>Datenschutz | Chang Thong Thaimassage</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://thaithanyamassage.de/datenschutz" />
      </Helmet>
      <section className="mx-auto max-w-3xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="mb-10 text-3xl sm:text-4xl font-bold text-primary-accent">
          Datenschutzerklärung
        </h1>

        <div className="text-text-light dark:text-text-dark space-y-8">

          {/* 1. บทนำทั่วไป */}
          <div>
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-3">
              1. Allgemeine Hinweise
            </h2>
            <p className="leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          {/* 2. ผู้รับผิดชอบ (Controller) */}
          <div>
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-3">
              2. Verantwortliche Stelle
            </h2>
            <p className="leading-relaxed mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="leading-relaxed border-l-4 border-primary-accent pl-4 bg-gray-50 dark:bg-white/5 p-4 rounded-r-lg">
              <span className="font-bold">Chang Thong Thaimassage</span><br />
              Thanyatorn Kaewchamlong<br />
              Fuggerstraße 6, 10777 Berlin<br />
              Telefon: +49 (0) 30 587 998 20<br />
              E-Mail: changthong.berlin@gmail.com
            </p>
          </div>

          {/* 3. การเก็บข้อมูล (Hosting & Logs) */}
          <div>
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-3">
              3. Datenerfassung auf unserer Website
            </h2>

            <h3 className="text-lg font-bold mt-4 mb-2">Server-Log-Dateien</h3>
            <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300 mb-4 text-justify">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
            </p>

            <h3 className="text-lg font-bold mt-4 mb-2">Kontaktanfragen</h3>
            <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300 mb-4 text-justify">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 className="text-lg font-bold mt-4 mb-2">Cookies</h3>
            <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300 mb-4 text-justify">
              Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.
            </p>
          </div>

          {/* 4. ระบบจองคิว (Setmore) - สำคัญมากต้องมี */}
          <div>
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-3">
              4. Online-Terminbuchung (Setmore)
            </h2>
            <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300 mb-4 text-justify">
              Unsere Website nutzt für die Online-Terminbuchung den Dienst <strong>Setmore</strong>. Anbieter ist die Full Creative, Inc., 911 SW Oak St, Suite 400, Portland, OR 97205, USA.
            </p>
            <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300 mb-4 text-justify">
              Wenn Sie einen Termin über unsere Website buchen, werden die von Ihnen eingegebenen Daten (Name, Telefonnummer, E-Mail-Adresse, Terminwunsch) an die Server von Setmore übertragen und dort gespeichert. Diese Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen).
            </p>
            <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300 mb-4 text-justify">
              Da Daten in die USA übertragen werden, weisen wir darauf hin, dass Setmore entsprechende Standardvertragsklauseln (Standard Contractual Clauses) verwendet, um ein angemessenes Datenschutzniveau zu gewährleisten. Weitere Informationen finden Sie in der Datenschutzerklärung von Setmore:
              <a href="https://www.setmore.com/privacy" target="_blank" rel="noreferrer" className="text-primary-accent hover:underline ml-1">https://www.setmore.com/privacy</a>.
            </p>
          </div>

          {/* 5. แผนที่ (Google Maps) - ใส่เฉพาะถ้ามีแผนที่ในหน้า Contact */}
          <div>
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-3">
              5. Google Maps
            </h2>
            <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300 mb-4 text-justify">
              Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
          </div>

          {/* 6. สิทธิ์ของผู้ใช้ (Rechte) */}
          <div>
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-3">
              6. Ihre Rechte
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><strong>Widerruf Ihrer Einwilligung:</strong> Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.</li>
              <li><strong>Auskunft, Löschung und Berichtigung:</strong> Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.</li>
              <li><strong>Beschwerderecht:</strong> Im Falle von Verstößen gegen die DSGVO steht dem Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.</li>
            </ul>
          </div>

          {/* 7. การเข้ารหัส SSL */}
          <div>
            <h2 className="text-xl font-bold text-primary dark:text-primary-accent mb-3">
              7. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300 mb-4 text-justify">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

        </div>
      </section>
    </Layout>
  )
}