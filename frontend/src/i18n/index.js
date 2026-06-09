import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './en.json';
import jaTranslations from './ja.json';
import koTranslations from './ko.json';

const resources = {
    en: { translation: enTranslations },
    ko: { translation: koTranslations },
    ja: { translation: jaTranslations }
}


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18n;