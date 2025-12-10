import CookieConsent from 'react-cookie-consent'
import { useTranslation } from 'react-i18next'

const COOKIE_NAME = 'changThongThaimasageCookieConsent'

export default function CookieBanner() {
  const { t } = useTranslation()

  return (
    <CookieConsent
      cookieName={COOKIE_NAME}
      location="bottom"
      buttonText={t('cookie.accept')}
      declineButtonText={t('cookie.decline')}
      enableDeclineButton
      expires={365}
      overlay={false}
      style={{
        background: '#1A4731',
        color: '#F9F6F2',
        textAlign: 'left',
        padding: '0.75rem 1rem',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '0.875rem',
        lineHeight: '1.4',
        maxWidth: '100%',
      }}
      buttonStyle={{
        background: '#D4AF37',
        color: '#1A4731',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        fontWeight: 600,
        fontSize: '0.875rem',
        letterSpacing: '0.05em',
      }}
      declineButtonStyle={{
        background: 'transparent',
        color: '#F9F6F2',
        border: '1px solid rgba(249, 246, 242, 0.4)',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        fontWeight: 600,
        fontSize: '0.875rem',
        letterSpacing: '0.05em',
      }}
      buttonWrapperClasses="flex gap-2 mt-2"
    >
      {t('cookie.message')}
    </CookieConsent>
  )
}
