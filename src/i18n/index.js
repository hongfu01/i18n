import { createI18n } from 'vue-i18n'
import enus from './langs/en-US/index.js'
import zhtw from './langs/zh-TW/index.js'


const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: enus,
    zhtw: zhtw,
  }
})

const loadLanguageAsync = () => {
  console.log('loadLanguageAsync');
}

export { loadLanguageAsync }

export default i18n