<script>
  import MainHeader from "../components/mainHeader.vue";
  import MainCta from "../components/mainCta.vue";

  export default {
    name: "HomePage",
    components: {
      MainHeader,
      MainCta,
    },
  };
</script>

<template>
  <MainHeader />
  <MainCta />
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
