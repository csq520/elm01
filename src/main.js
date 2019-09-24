import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import './assets/styles/reset.css';
import './assets/styles/border.css';

/* eslint-disable no-new */
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
