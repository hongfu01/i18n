import Vue from 'vue'
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

Vue.prototype.$i18n = i18n

export default i18n