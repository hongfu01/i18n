import { createI18n } from 'vue-i18n'
import { getLangConfig, defaultLang, setLangConfig, formatLangCode, version } from "./config.js";

const config = getLangConfig();
const loadedLanguages = Object.keys(config.messages);

// const i18n = createI18n({
//   legacy: false,
//   locale: 'en',
//   messages: {
//     en: enus,
//     zhtw: zhtw,
//   }
// })

const i18n = createI18n({
  legacy: false,
  locale: config.locale || defaultLang,
  messages: config.messages,
})

function loadLanguageAsync(locale, cacheLang = false) {
  console.log('loadLanguageAsync', locale);
  console.log('config.locale', config.locale);
  locale = formatLangCode(locale);
  if (!cacheLang && config.locale) {
    // 有设置过语言的不设置为默然语言
    return;
  }
  if (i18n.locale === locale || loadedLanguages.includes(locale)) {
    return Promise.resolve(setLocale({ locale, cacheLang }));
  }
  return import(`./langs/${locale}/index.js`)
    .then((messages) => {
      console.log('messages', messages);
      console.log('i18n', i18n);
      i18n.global.setLocaleMessage(locale, messages.default);
      loadedLanguages.push(locale);
      setLocale({ locale, messages, cacheLang });
    })
    .catch((e) => {
      console.warn(`load ${locale} fail`, e);
    });
}

function upLangSetterHander(locale) {
  locale = formatLangCode(locale);
  document.querySelector("html").setAttribute("lang", locale);
}

function setLocale({ locale, messages, cacheLang }) {
  i18n.locale = locale;
  cacheLang && (config.locale = locale);
  config.version = version;
  upLangSetterHander(locale);
  if (messages) {
    config.messages[locale] = messages.default;
  }
  console.log('setLocale');
  console.log('config.locale',config.locale);
  setLangConfig(config);
}

export { loadLanguageAsync }

export default i18n