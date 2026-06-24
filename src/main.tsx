// src/main.tsx
import React from 'react';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import ReactDOM from 'react-dom/client';
import App from './App'; // 👈 IMPORT THE APP COMPONENT!
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);