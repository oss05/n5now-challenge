import i18n from 'i18next';
import { initReactI18next, useTranslation as _useTranslation } from 'react-i18next';

import translationEN from './locales/en.json';
import translationES from './locales/es.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
});

const useTranslation = _useTranslation;

export { useTranslation, i18n };