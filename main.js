import Vue from "vue";
import App from "./App";
import "./uni.promisify.adaptor";
import cuCustom from "./color_ui/v_custombar.vue";
import { store } from "./commons/j_vuex.js";
import "./styles/common.scss";
import "./styles/iconfont-weapp-icon.css";

Vue.prototype.$vuex = store;
Vue.component("cu-custom", cuCustom);

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
  $vuex: store,
});
app.$mount();
