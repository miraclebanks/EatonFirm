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
