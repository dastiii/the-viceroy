import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./app.css";
import axios from "@/axios";
import "./icons";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.prototype.$formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
