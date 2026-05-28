import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './lib/LanguageContext.tsx';
import { applyFontScale } from './lib/fontSize.ts';

applyFontScale();

// Service worker registration is auto-injected by vite-plugin-pwa (injectRegister: 'auto') at
// build time — no manual `virtual:pwa-register` import needed (that caused the production
// ERR_FAILED). In dev (devOptions.enabled: false) there's simply no SW.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
