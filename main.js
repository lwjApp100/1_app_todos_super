import Vue from "vue";
import App from "./App";
import "./uni.promisify.adaptor";
import cuCustom from "./commons/alone/colorUI/components/cu-custom.vue";
import { store } from "./commons/alone/vuex/vuex.js";
import "./styles/common.scss";
import "./styles/iconfont-weapp/iconfont-weapp-icon.css";

Vue.prototype.$vuex = store;
Vue.component("cu-custom", cuCustom);

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
  $vuex: store,
});
app.$mount();
