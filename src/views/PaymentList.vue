<template>
  <div id="app" class="wrapper content container" >
    <h1 class="content__title">My personal costs</h1>
<main class="content__main">
    <CustomButton class="showbtn" @click="show=!show"> Add new costs  + </CustomButton>
    <AddPaymentForm
    @add-payment="addNewPayment"
    v-if="show"
    :categoryList="categoryList"
    />
    <PaymentsDisplay :items="showPayments"/>
    <Pagination @select-page="changePage" />
  </main>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PaymentsDisplay from '../components/PaymentsDisplay.vue';
import AddPaymentForm from '../components/AddPaymentForm.vue';
import CustomButton from '../components/CustomButton.vue';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Dashboard',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    CustomButton,
    Pagination,
  },
  data() {
    return {
      show: false,
      currentPage: 1,
     
    };
  },
  methods: {
    ...mapActions([
      'fetchData',
      'fetchCategoryListData',
      'fetchPages',
    ]),
    onPageChange(page) {
      this.currentPage = page;
    },
    changePage(newPage) {
      
      ((this.currentPage = newPage), this.fetchData(this.currentPage));
    },
    ...mapMutations({ addPayment: 'ADD_PAYMENT_DATA' }),
    
    addNewPayment(payment) {
      // eslint-disable-next-line eqeqeq
      if (payment.category != '' && payment.value != '') {
        this.addPayment(payment);
        this.fetchPages();
      }
    },
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'categoryList',
    ]),
    showPayments() {
      return this.paymentsList[`page${this.currentPage}`];
    },
    getRoute() {
      return this.$route.params;
    },
  },
  created() {
   
    this.fetchPages();
    this.fetchData(this.currentPage);
    this.fetchCategoryListData();
  },

};
</script>

<style lang="scss">
.container {
  max-width: 1140px;
  margin: auto;
}
.content {
  &__main {
    max-width: 600px;
    margin: 0 auto;
  }
  &__title {
      margin: 30px auto;
      text-align: center;
    }
}
</style>