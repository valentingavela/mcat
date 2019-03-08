import Vue from "vue";
import App from "./App.vue";
import { VueHammer } from 'vue2-hammer';
import Router from './Router';

Vue.config.productionTip = false;
Vue.use(VueHammer);

new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");
