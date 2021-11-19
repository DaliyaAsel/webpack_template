import Vue from 'vue'
import './css/main.css'
import './scss/main.scss';
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