<script>
  import AboutBlurb from "../components/about/about-blurb.vue";
  import AboutCompany from "../components/about/about-company.vue";

  export default {
    name: "AboutUs",
    components: {
      AboutBlurb,
      AboutCompany,
    },
  };
</script>

<template>
  <AboutBlurb />
  <AboutCompany />
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
