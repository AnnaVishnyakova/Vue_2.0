<template>
  <div :class="$style.pagination">
    <span :class="$style.span" @click="getPrevous">Previous</span>
    <span
      class="page"
      v-for="numberPage in pages"
      :key="numberPage"
      @click="selectPage(numberPage)"
      :class="[{ [$style.active]: numberPage == isActivePage }, $style.span]"
    >
      {{ numberPage }}</span
    >
    <span :class="$style.span" @click="getNext">Next</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Pagination',
  data() {
    return {
      isActivePage: 1,
    };
  },
  computed: {
    ...mapGetters({ pages: 'paymentPages' }),
  },
  methods: {
    selectPage(page) {
      this.isActivePage = page;
      this.$emit('select-page', this.isActivePage);
    },
    getPrevous() {
      if (this.isActivePage > 1) this.isActivePage -= 1;
      this.selectPage(this.isActivePage);
    },
    getNext() {
      if (this.isActivePage < this.pages) this.isActivePage += 1;
      this.selectPage(this.isActivePage);
    },
  },
};
</script>

<style module>
.pagination {
  margin-top: 20px;
}

.span {
  font-weight: 600;
  cursor: pointer;
  padding: 0 10px;
}

.active {
  color: red;
}
</style>