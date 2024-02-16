import { createI18n } from 'vue-i18n'
import enus from './langs/en-US/index.js'
import zhtw from './langs/zh-TW/index.js'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: enus,
    zhtw: zhtw,
  }
})
console.log('i18n',i18n);

export const setI18nLanguage = (lang) => {
  i18n.global.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export const i18ns = () => (i18n.global)

export default i18n