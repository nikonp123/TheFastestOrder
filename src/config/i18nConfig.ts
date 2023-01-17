import { languageType } from '../types/language.type';

export const enum ESupportedLangs {
  ua = 'ua',
  ru = 'ru',
}

export const defaultLanguage: languageType = ESupportedLangs.ua;

export const returnLanguage = (str: string): languageType => {
  let lang = ESupportedLangs.ua;
  if (str === 'Русский' || str === 'ru') {
    lang = ESupportedLangs.ru;
  }
  return lang;
};
