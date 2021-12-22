<template>
<div>
    <form :class="$style.content__form">
      <input :class="$style.content__input" type="text" :placeholder="inputCategory"
      v-model.trim="category" />
      <input :class="$style.content__input" type="number" :placeholder="inputValue"
      v-model.number="value" />
      <input :class="$style.content__input" type="date"
      v-model="date" />
      <button type="submit" :class="$style.content__btn" @click.prevent="addPayment">Добавить
      </button>
    </form>
<!-- 
    <input type="date" placeholder="Date" v-model="date">
    <input type="text" placeholder="category" v-model="category">
    <input type="text" placeholder="Value" v-model="value">
    <button @click="addPayment">
      Add
    </button> -->
  </div>
</template>
button

<script>
export default {
  name:'AddPaymentForm',
  data(){
      return {
          inputCategory:'Введите категорию',
          inputValue:'Введите сумму',
          value:"",
          category:"",
          date:""

      }
  },
  computed:{
      paymentDate(){
          const currentDate = new Date();
          const day =currentDate.getDate();
          const month =currentDate.getMonth()+1;
          const year =currentDate.getFullYear();

          return `${day}.${month}.${year}`
      },
  },
  methods:{
    addPayment(){
      const {value,category,date} =this;
      const data ={
        
          date: date|| this.paymentDate, //если нет даты то ставим нынешнюю дату
          category,
          value: +value, //превращаем в число
      
      };
      if (data.category !== '' && data.value !== 0) {
      this.$emit('add-payment', data);
      } else{
          this.inputCategory = 'Введите обязательно категорию !';
          this.inputValue = 'Обязательно введите сумму !';
      }
    }

  },
}
</script>


<style module lang="scss">
.content {
&__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 600px;
  margin: 30px auto;
}
&__input {
  padding: 0.5em 1.3em;
  font-size: 1.3rem;
  color: #2c3e50;
  border: 1px solid #c2c2c2;
  border-radius: 0.3em;
}
&__btn {
  align-self: flex-end;
  width: 6em;
  display: flex;
  justify-content: center;
  padding: 0.8em 1em;
  border-radius: 0.3em;
  background: #2aa694;
  border: none;
  outline: 0.125em solid #2aa694;
  border: 0.125em solid #2aa694;
  border-radius: 0.5em;
  background-color: #2aa694;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.2);
  transition: color 0.2s, background-color 0.2s, box-shadow 0.2s, transform 0.2s;
  color: #fff;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    color: #2aa694;
    background-color: #fff;
  }
  &:active  {
    box-shadow: 0 0.075em 0.125em rgba(0, 0, 0, 0.2);
  }

}
}

</style>