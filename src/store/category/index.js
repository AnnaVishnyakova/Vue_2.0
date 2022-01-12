export default {
  state: {
    categoryList: [],
  },
  mutations: {
    SET_CATEGORY_LIST(state, categoryList) {
      console.log('SET_CATEGORY_LIST', categoryList);
      // eslint-disable-next-line no-param-reassign
      state.categoryList = categoryList;
    },
    ADD_CATEGORY_LIST(state, category) {
      state.categoryList.push(category);
    },
  },

  getters: {
    categoryList: ({ categoryList }) => categoryList,
  },
  actions: {
    fetchCategoryListData({ commit }) {
      setTimeout(() => {
        const categoryList = ['Food', 'Taxi', 'Education', 'Sport'];
        commit('SET_CATEGORY_LIST', categoryList);
      });
    },
  },
};