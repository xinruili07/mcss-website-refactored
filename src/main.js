import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import router from './router';
import Default from './layouts/Default.vue';
import NoNavBar from './layouts/NoNavBar.vue';


Vue.config.productionTip = false;
Vue.component('default-layout', Default);
Vue.component('no-navbar-layout', NoNavBar);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

Vue.use(BootstrapVue);
