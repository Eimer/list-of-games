export const environment = {
  production: true,
  supportedLangs: {
    en: 'en',
    ru: 'ru'
  },
  supportedLangsArray: ["en", "ru"],
  defaultLang: window.navigator.language.indexOf('en') >= 0 ? 'en' : 'ru',
  firebase: {
    apiKey: "AIzaSyDh_aamYKM3vBhxq1T6vpTZ71nBz5A1WP0",
    authDomain: "games-list-da1de.firebaseapp.com",
    projectId: "games-list-da1de",
    storageBucket: "games-list-da1de.appspot.com",
    messagingSenderId: "19382328900",
    appId: "1:19382328900:web:0154b2ef5f6998fd8b2611"
  }
};
