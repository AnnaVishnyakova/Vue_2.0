/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import Vue from 'vue';

const pages = {
  page1: [
    {
      id: 1, date: '20.03.2020', category: 'Food', value: 180,
    },
    {
      id: 2, date: '21.03.2020', category: 'Navigation', value: 150,
    },
    {
      id: 3, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
    {
      id: 5, date: '24.03.2020', category: 'Education', value: 1500,
    },
  ],
  page2: [
    {
      id: 6, date: '23.04.2020', category: 'Navigation', value: 1000,
    },
    {
      id: 7, date: '24.04.2020', category: 'Entertaiment', value: 1100,
    },
    {
      id: 8, date: '25.04.2020', category: 'Food', value: 300,
    },
    {
      id: 9, date: '20.04.2020', category: 'Food', value: 250,
    },
    {
      id: 10, date: '20.04.2020', category: 'Food', value: 800,
    },
  ],
  page3: [
    {
      id: 11, date: '23.05.2020', category: 'Entertaiment', value: 2324,
    },
    {
      id: 12, date: '24.05.2020', category: 'Education', value: 2100,
    },
    {
      id: 13, date: '25.05.2020', category: 'Entertaiment', value: 3000,
    },
    {
      id: 14, date: '20.05.2020', category: 'Food', value: 2000,
    },
    {
      id: 15, date: '20.05.2020', category: 'Food', value: 345,
    },
  ],

};

export default {
  state: () => ({
    paymentsList: {},
    pageCount: 1,
    paymentsCount: 16,
  }),
  mutations: {
    SET_PAYMENTS_LIST(state, payload) {
      // Во Vue нельзя динамически добавлять новые корневые реактивные свойства
      // в уже существующий экземпляр.
      // Тем не менее, можно добавить реактивное свойство во вложенные объекты, используя метод
      // Vue.set(object, propertyName, value)
      console.log(payload);
      Vue.set(state.paymentsList, payload.key, payload.list);
      console.log(payload.list);
    },
    SET_PAGES_COUNT(state, count) {
      console.log('КОЛИЧЕСТВО СТРАНИЦ НА СТРАНИЦЕ', count);
      // eslint-disable-next-line no-param-reassign
      state.pageCount = count;
    },
    ADD_PAYMENT_DATA(state, payment) {
      // Данный метод добавляет новую страницу если на странице больше 5 платежей!
      if (pages[`page${state.pageCount}`].length < 5) {
        state.paymentsCount++;
        pages[`page${state.pageCount}`].push(payment);
      } else {
        pages[`page${state.pageCount + 1}`] = [payment];
        state.paymentsCount++;
      }
    },
  },
  getters: {
    paymentsList: ({ paymentsList }) => paymentsList,
    paymentPages: ({ pageCount }) => pageCount,
    paymentsCount: ({ paymentsCount }) => paymentsCount,
  },
  actions: {
    fetchData(state, page) {
      // Функция fetchData должна:
      // принимать в себя параметр – номер страницы, которую пользователь хочет отобразить;
      // при последовательном вызове функции fetchData
      // не заменять данные в хранилище, полученные от предыдущих вызовов, а дополнять их;
      const key = `page${page}`;
      // if (!(key in state.getters.paymentsList)) {
      setTimeout(() => {
        const initialPaymentsList = pages[key];
        state.commit('SET_PAYMENTS_LIST', { key, list: initialPaymentsList });
      }, 1000);
    },
    fetchPages({ commit }) {
      setTimeout(() => {
        const pageCount = Object.keys(pages).length;
        commit('SET_PAGES_COUNT', pageCount);
      }, 1000);
    },
  },
};