/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import {VueAxios, axios} from './axios'
import i18n from './i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'



export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueAxios, axios)
    .use(i18n)
    .use(AOS.init())


}
