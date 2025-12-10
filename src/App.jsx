import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import ReactGA from "react-ga4"
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent"
import { useTranslation, Trans } from 'react-i18next'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const AboutUsPage = lazy(() => import('./pages/AboutUs.jsx'))
const ContactUsPage = lazy(() => import('./pages/ContactUs.jsx'))
const PictureCreditsPage = lazy(() => import('./pages/PictureCredits.jsx'))
const ImpressumPage = lazy(() => import('./pages/Impressum.jsx'))
const DatenschutzPage = lazy(() => import('./pages/Datenschutz.jsx'))

function App() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const initGA = () => {
    ReactGA.initialize("G-3KECFE0W0L")
  }

  useEffect(() => {
    if (getCookieConsentValue("sereneThaiSpaCookieConsent") === "true") {
      initGA()
    }
  }, [])

  const handleAccept = () => {
    initGA()
  }

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/picture-credits" element={<PictureCreditsPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <CookieConsent
        key={i18n.language}
        location="bottom"
        buttonText={t('cookie.accept')}
        declineButtonText={t('cookie.decline')}
        enableDeclineButton
        cookieName="sereneThaiSpaCookieConsent"
        expires={365}
        onAccept={handleAccept}
        onDecline={() => { }}
        style={{ background: "#5B2D82" }}
        buttonStyle={{
          backgroundColor: "#D4AF37",
          color: "#5B2D82",
          fontSize: "13px",
          fontWeight: "bold",
          borderRadius: "4px",
        }}
        declineButtonStyle={{
          backgroundColor: "transparent",
          border: "1px solid #D4AF37",
          color: "#D4AF37",
          fontSize: "13px",
          borderRadius: "4px",
        }}
      >
        <div style={{ color: "#F9F6F2", fontSize: "14px", lineHeight: "1.6", flex: 1, marginRight: "1rem" }}>
          {t('cookie.consentText').replace('<0></0>', '')}
          <a
            href="/datenschutz"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              navigate('/datenschutz')
            }}
            style={{ color: "#D4AF37", fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }}
          >{t('cookie.privacyLinkText')}</a>.
        </div>
      </CookieConsent>
    </>
  )
}

export default App
