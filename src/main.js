import Vue from 'vue'
import App from './App.vue'

new Vue({
    el    : '#app',
    render: h => h(App)
});

window.today  = new Date();
window.target = new Date(window.today);
target.setHours(23);
target.setMinutes(19);
target.setSeconds(0);