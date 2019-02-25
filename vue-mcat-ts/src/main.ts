import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import { VueHammer } from 'vue2-hammer';

Vue.config.productionTip = false;
// Vue.use(BootstrapVue);
Vue.use(VueHammer);

new Vue({
  // store,
  render: h => h(App)
}).$mount("#app");
