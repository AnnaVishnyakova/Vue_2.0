<template>
  <div :class="$style.wrap">
  <form :class="$style.content__form">
      <input type="date" placeholder="Date" v-model="date" :class="$style.content__input">
        <select name="" id=""
        v-model="category"
        :class="$style.content__input"
        >
        <option value=''
        disabled selected>
        {{categoryPlaceholder}}</option>
          <option
          v-for="category of categoryList"
          :key="category"
          :value="category"
          >{{category}}</option>
        </select>
        <addCategoryForm />
      <input type="number"
      :placeholder="valuePlaceholder"
      v-model="value"
      :class="$style.content__input">
      <button
      @click.prevent="addPayment"
      :class="$style.content__btn"
      >Add  +</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import addCategoryForm from './addCategoryForm.vue';

export default {
  name: 'AddPaymentForm',
  components: {
    addCategoryForm,
  },
  data() {
    return {
      value: '',
      category: '',
      date: '',
      categoryPlaceholder: 'please select',
      valuePlaceholder: 'Value',
      showAddCategoryForm: false,
      newCategory: '',
    };
  },
  methods: {
    ...mapActions(['fetchCategoryListData']),
    ...mapMutations({ addCategory: 'addCategoryList' }),
    addPayment() {
      const {
        id, date, category, value,
      } = this;
      const data = {
        date: date || this.currentDate, id: +id, category, value: +value,
      };
      if (data.category !== '' && data.value !== 0) {
        // eslint-disable-next-line no-plusplus
        // data.id = (Math.floor(Math.random() * 9999) + 1);
        data.id = this.paymentsCount;
        this.$emit('add-payment', data);
      }
      this.categoryPlaceholder = 'Enter category !!!';
      this.valuePlaceholder = 'Enter value !!!';
    },
    addNewCategory() {
      if (this.newCategory) {
        this.addCategory(this.newCategory);
      }
      this.showAddCategoryForm = !this.showAddCategoryForm;
    },
  },
  computed: {
    ...mapGetters(['categoryList', 'paymentsCount']),
    currentDate() {
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      let day = d.getDate();
      if (day < 10) {
        day = `0${day}`;
      }
      const date = `${day}.${month}.${year}`;
      return date;
    },
  },
};
</script>

<style module lang="scss" scoped>
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
  width: 25%;
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