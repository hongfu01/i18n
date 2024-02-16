import { createI18n } from 'vue-i18n'
import enus from './langs/en-US/index.js'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: enus
  }
})

export default i18n