import Vue from "vue";
import VueRx from "vue-rx";
import App from "./App.vue";
// import store from "./store";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
// Vue.use(VueRx);
new Vue({
  // store,
  render: h => h(App)
}).$mount("#app");
