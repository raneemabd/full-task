/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {

    themes: {
      light: {
        colors: {
          primary: '#5f8d3e',
          secondary: '#dcfcc5',
        },
      },
      dark:{
        colors:{
          primary:'#000000',
          secondary:'#F7B14B',
          white:'ffffff'
        }
      }
    },
  },
})
