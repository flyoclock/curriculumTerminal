import Vue from 'vue';
import Vuex from 'vuex';

import html from './html';




Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    namespaced: false,
    modules: {
      html
    },
    strict: process.env.NODE_ENV !== 'production',
  });
};

export default store;