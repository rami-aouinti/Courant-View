/*
=========================================================
* Vuetify Material Dashboard 2 PRO - v3.0.0
=========================================================

* Product Page:  https://www.creative-tim.com/product/vuetify-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import DashboardPlugin from "./plugins/dashboard-plugin";

Vue.config.productionTip = false;

// Photoswipe Gallery
import Photoswipe from "vue-pswipe";
Vue.use(Photoswipe);

// plugin setup
Vue.use(DashboardPlugin);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
