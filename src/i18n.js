import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Arabic from "./local/ar.json"
import English from "./local/en.json"

i18n
.use(LanguageDetector)
  .use(initReactI18next) 
  .init({

    resources: {
      en: {
        translation: English, 

      },
      ar: {
        translation: Arabic
      }
    },
    interpolation: {
        escapeValue: false,
      },
    react: {
        useSuspense: false,
      },
 
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}


const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);