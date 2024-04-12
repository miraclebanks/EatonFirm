<script>
  import MainNavigation from "./components/mainNavigation.vue";

  export default {
    name: "App",
    components: { MainNavigation },
  };
</script>

<template><MainNavigation /><RouterView /></template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
