<template>
  <button :class="$style.content__btn" type="button" @click="$emit('click')">
    <div :class="$style.content__btn_text">
     Добавить новый расход
    </div>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
  },
};
</script>

<style module lang="scss">

.content {
&__btn {
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  font-size: 1.25rem;
  line-height: 1.2;
  color: white;
  border: 0.125em solid #2aa694;
  border-radius: 0.2em;
  background-color: #2aa694;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
    color: #2aa694;
    background-color: #fff;
  }
  &:active {
    box-shadow: 0 0.075em 0.125em rgba(0, 0, 0, 0.2);
  }
}
&__btn_text {
  text-transform: uppercase;
}
}

</style>