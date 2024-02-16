import { createI18n,useI18n } from 'vue-i18n'
import enus from './langs/en-US/index.js'
import zhtw from './langs/zh-TW/index.js'


const i18n = createI18n({
  locale: 'en',
  messages: {
    en: enus,
    zhtw: zhtw,
  }
})

export const $i18n = useI18n({ useScope: 'global' });

export default i18n