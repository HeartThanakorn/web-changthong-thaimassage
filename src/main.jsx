import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
// Import self-hosted fonts (GDPR compliant - no Google CDN)
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'
import 'material-symbols/outlined.css'
import './index.css'
import './i18n/config.js'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <Suspense fallback={null}>
            <App />
          </Suspense>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
