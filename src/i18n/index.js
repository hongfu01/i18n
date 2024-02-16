import { createI18n } from 'vue-i18n'
import vueI18n from 'vue-i18n'
import enus from './langs/en-US/index.js'
import zhtw from './langs/zh-TW/index.js'


const i18n = createI18n({
  locale: 'en',
  messages: {
    en: enus,
    zhtw: zhtw,
  }
})

export const useI18n = vueI18n.useI18n({ useScope: 'global' });

export default i18n