import Vuex from "vuex";

import layout from "./modules/layout";
import rooms from "./modules/rooms";

const state = {};
const mutations = {};
const getters = {};

export default Vuex.createStore({
  state,
  getters,
  mutations,
  modules: {
    layout,
    rooms
  },
  plugins: []
});
