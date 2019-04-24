import Vue from "vue";
import App from "./App.vue";
import Router from './Router';
import { HttpClient } from './services/http-client';
Vue.use(VueHammer);
import { VueHammer } from 'vue2-hammer';

Vue.config.productionTip = false;

HttpClient.getData();

new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");
