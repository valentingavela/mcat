import Vue from "vue";
import App from "./App.vue";
import Router from './Router';
Vue.use(VueHammer);
import { VueHammer } from 'vue2-hammer';
import { HttpClient } from './services/http-client';
Vue.config.productionTip = false;

HttpClient.getData().then(x => console.log(x));

new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");
