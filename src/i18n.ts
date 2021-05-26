import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { plMessages as pl } from './messages/messages-pl';
import { enMessages as en } from './messages/messages-en';

const resources = {
  pl: pl,
  en: en,
};

i18n.use(initReactI18next).init({
  lng: 'pl',
  resources,
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  react: {
    wait: true,
  },
});

export default i18n;
