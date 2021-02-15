import Vue from 'vue';
import Vuex from 'vuex';

import authentication from './modules/authentication';
import product from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authentication,
    product,
  },
});
