import Vue from 'vue';
import Vuex from 'vuex';
import payment from './payments';
import category from './category';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        category,
        payment,
    },
});