import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // https://retailmarket-staging.azurewebsites.net/api/
    endpoint: process.env.VUE_APP_ENDPOINT,
    notification: {
      type: 0,
      message: "",
    },
    user: null,
    token: "",
    outlets: null,
    cart: {
      paymentMethod: "payment on delivery",
      products: [],
      bundleOffers: [],
    },
    checkout: {},
    bundleCheckout: {},
  },
  getters,
  mutations,
  actions,
});

export default store;
