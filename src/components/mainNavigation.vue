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
    <div class="links">
      <router-link to="/contactus">Contact Us</router-link>
    </div>
  </div>
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
    z-index: 1050;
    font-size: 22px;
  }
  .links {
    margin: 0 96px;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
    a {
      color: black;
      text-decoration: none;
      &:hover {
        color: rgb(72, 72, 78);
        transition: all 0.5s ease-out;
        transform: translate(32px, 18px);
        font-size: 28px;
        text-decoration: underline;
      }
    }
  }
</style>
