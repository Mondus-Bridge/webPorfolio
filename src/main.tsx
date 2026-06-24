// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 👈 IMPORT THE APP COMPONENT!
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);