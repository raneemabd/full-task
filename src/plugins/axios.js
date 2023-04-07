import axios from 'axios'
import VueAxios from 'vue-axios'


const store = JSON.parse(localStorage.getItem('user'))
// axios.defaults.header.common['Authorization'] = 'Bearer' + store.user.token

export {axios , VueAxios}