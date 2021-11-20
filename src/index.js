import Vue from 'vue'
import './assets/scss/main.scss';
import './assets/css/main.css'
import store from './store'

Vue.config.productionTip = false

window.Vue = require('vue')


Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
    data() {
        return {
            component: false
        }
    },
    store,
    el: '#app'
})