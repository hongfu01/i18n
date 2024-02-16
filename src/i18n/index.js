import { createI18n } from 'vue-i18n'
import vue from 'vue'
import enus from './langs/en-US/index.js'
import zhtw from './langs/zh-TW/index.js'


const i18n = createI18n({
  locale: 'en',
  messages: {
    en: enus,
    zhtw: zhtw,
  }
})
//use i18n
vue.use(i18n)

//add prototype
vue.prototype.$i18n = i18n.global

export default i18n