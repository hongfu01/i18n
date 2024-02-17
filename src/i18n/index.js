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

function loadLanguageAsync(value) {
  console.log('loadLanguageAsync',value);
  return 'loadLanguageAsync'+value
}

export { loadLanguageAsync }

export default i18n