import { createI18n } from 'vue-i18n'
import { createApp } from 'vue';
import enus from './langs/en-US/index.js'
import zhtw from './langs/zh-TW/index.js'


const i18n = createI18n({
  locale: 'en',
  messages: {
    en: enus,
    zhtw: zhtw,
  }
})
//use createApp
const app = createApp({})
app.use(i18n)

//app prototype
app.config.globalProperties.$i18n = i18n.global;
app.mount('#app')

export default i18n