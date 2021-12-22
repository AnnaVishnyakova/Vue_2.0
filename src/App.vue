<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Обо мне</router-link> |
      <router-link to="/home">Калькулятор</router-link> |
      <router-link to="/payment">Фиксация расходов</router-link>
    </div>
    <router-view/>
   
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
  
</template>
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