import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    verssion: "vuex@3.2.0",
  },
  modules: {},
});

export { store };

/**
 * import { store } from "./commons/alone/vuex/vuex.js";
 * Vue.prototype.$vuex = store;
 *  $vuex: store,
 */
