<script>
  import EmployeeBenefits from "../components/employee/employee-benefits.vue";

  export default {
    name: "EmployeePage",
    components: {
      EmployeeBenefits,
    },
  };
</script>

<template>
  <EmployeeBenefits />
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
