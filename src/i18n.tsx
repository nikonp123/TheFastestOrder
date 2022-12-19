import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { TRANSLATIONS_UA } from './translations/ua/translations';
import { TRANSLATIONS_RU } from './translations/ru/translations';
import { defaultLang } from './config/i18nConfig';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ua: {
        translation: TRANSLATIONS_UA,
      },
      ru: {
        translation: TRANSLATIONS_RU,
      },
    },
  });

i18n.changeLanguage(defaultLang);
