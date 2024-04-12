<script>
  import EmployerBenefits from "../components/employer/employer-benefits.vue";

  export default {
    name: "EmployerPage",
    components: {
      EmployerBenefits,
    },
  };
</script>

<template>
  <EmployerBenefits />
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
