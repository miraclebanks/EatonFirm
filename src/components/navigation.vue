<script>
  export default {
    name: "MainNavigation",
  };
</script>

<template>
  <div class="nav-container">
    <div class="links">
      <router-link to="/">Home</router-link>
    </div>
    <div class="links">
      <router-link to="/about">About</router-link>
    </div>
    <div class="links">
      <router-link to="/employee">Employee Benefits</router-link>
    </div>
    <div class="links">
      <router-link to="/employer">Employer Information</router-link>
    </div>
    <div class="links">
      <router-link to="/legal">Legal Information</router-link>
    </div>
    <div class="links">
      <router-link to="/laws">State Laws</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 52px;
    padding-top: 50px;
    margin: 24px 0px;
  }
  .links {
    margin: 0 16px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
