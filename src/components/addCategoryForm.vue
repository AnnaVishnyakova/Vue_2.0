<template>
  <div>
    <button
          :class="$style.content__btn"
          @click.prevent="showAddCategoryForm = !showAddCategoryForm"
          >Add Category +</button
        >
        <div :class="$style.content__addCategory" v-show="showAddCategoryForm">
      <input
        :class="$style.content__input"
        type="text"
        v-model="newCategory"
        placeholder="New Category Name"
      />
      <button :class="$style.content__btn" @click.prevent="addNewCategory">Add or Close</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AddCategoryForm',
  data() {
    return {
      showAddCategoryForm: false,
      newCategory: '',
    };
  },
  methods: {
    ...mapMutations({ addCategory: 'ADD_CATEGORY_LIST' }),
    addNewCategory() {
      if (this.newCategory) {
        this.addCategory(this.newCategory);
      }
      this.showAddCategoryForm = !this.showAddCategoryForm;
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
  &__addCategory {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
}

</style>