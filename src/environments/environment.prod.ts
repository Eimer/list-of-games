export const environment = {
  production: true,
  supportedLangs: {
    en: 'en',
    ru: 'ru'
  },
  defaultLang: window.navigator.language.indexOf('en') >= 0 ? 'en' : 'ru'
};
