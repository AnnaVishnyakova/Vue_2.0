<template>
<div>

  <table :class="$style.content__table">
    <thead>
      <tr>
        <th>#</th>
          <th>Дата</th>
        <th>Категория</th>
        <th>Сумма</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </tbody>
  </table>
   
  </div> 
</template>

<script>
export default {
name:"PaymentsDisplay",
props:{
    items:{
        type: Array,
        required:true,

    }
   
}

}
</script>


<style lang="scss" module>

.content {
  &__table {
    width: 100%;
    margin: 30px auto;
    & tr {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #c2c2c2;
      justify-content: space-between;
      margin: auto;
      & th, td {
      display: flex;
      margin: 15px auto;
      width: 100%;
      font-weight: 600;
      }
    }
  }
}
</style>