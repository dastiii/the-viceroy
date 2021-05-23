import Vue from "vue";
import Vuex from "vuex";

import layout from "./modules/layout";
import rooms from "./modules/rooms";

Vue.use(Vuex);

const state = {};
const mutations = {};
const getters = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  modules: {
    layout,
    rooms
  },
  plugins: []
});
