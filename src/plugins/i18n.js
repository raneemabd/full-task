import {createI18n} from 'vue-i18n'

const messages= {
    en: {
        message:{
            welcome : 'Welcome To Our Store!',
            proud:'proud to serve you!'
        }
    },
    ar : {
        message:{
            welcome: ' اهلا بكم في متجرنا',
            proud:'نحن في  خدمتكم!'
        }
    }
}
const i18n = createI18n ({
    locale: 'en',
    messages,

})
export default i18n