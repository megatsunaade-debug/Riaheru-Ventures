import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App.tsx';
import './index.css';
import { MotionProvider } from './providers/MotionProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <MotionProvider>
        <App />
      </MotionProvider>
    </HelmetProvider>
  </StrictMode>,
)
