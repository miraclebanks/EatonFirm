<script>
  import DeathAspects from "../components/legal/death-aspects.vue";

  export default {
    name: "LawsPage",
    components: {
      DeathAspects,
    },
  };
</script>

<template>
   <DeathAspects />
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
