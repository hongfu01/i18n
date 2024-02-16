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
console.log(i18n);
i18n.install((app) => {
  console.log('app',app);
})

export default i18n