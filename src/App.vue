<template>
  <div id="app">

<div class="wrapper">
      <div class="content container">
        <h1 class="content__title">My personal costs</h1>
        <main class="content__main">
          <CustomButton @click="showForm=!showForm" add/>
          <AddPaymentForm @add-payment="addNewPayment" v-if="showForm"/>
          <PaymentsDisplay :items="paymentsList"/>
          <!-- <Pagination :length="pageLength" @select-page="selectPage" /> -->
        </main>
      </div>
    </div>
<!-- 
    <AddPaymentForm @add-payment="addNewPayment"/>
    <PaymentsDisplay :items="paymentList" /> -->
    
    <!-- <Counter v-if="show"/>
    <button @click="show=!show">
      show/ hide
    </button> -->
    <!-- <div id="nav">
      <router-link to="/">Калькулятор</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>

// import Counter from "./components/Counter.vue"
import CustomButton from '@/components/CustomButton.vue';
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
export default {
  name:'App',
  components:{
    CustomButton,
     PaymentsDisplay,
     AddPaymentForm
  },

   data(){
    return{
      showForm: false,
      paymentsList:[],
       
    }
  },
  methods:{
    fetchData(){
      return [
        {
          date:'24.03.2020',
          category:'Food',
          value:444
        },
        {
          date:'28.03.2020',
          category:'Transport',
          value:444
        },
        {
          date:'21.03.2020',
          category:'Sport',
          value:444
        },
        

      ];
    },
    addNewPayment(payment){
     this.paymentsList.push(payment)
  
    },
    
  },

  created(){
    this.paymentsList= this.fetchData();
    // console.log(this.paymentList);
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>