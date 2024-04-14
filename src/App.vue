<script>
  import MainNavigation from "./components/mainNavigation.vue";

  export default {
    name: "App",
    components: { MainNavigation },
  };
</script>

<template><MainNavigation /><RouterView /></template>

<style>
  @import "./App.css";
</style>
