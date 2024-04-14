<script>
  import menuIcon from "@/assets/menu-icon.json";

  export default {
    name: "MainNavigation",
    data() {
      return {
        showMobileNav: false,
        menuIcon: menuIcon,
      };
    },
    methods: {
      toggleMobileNav() {
        this.showMobileNav = !this.showMobileNav;
      },
      closeMobileNav() {
        this.showMobileNav = false;
      },
    },
  };
</script>

<template>
  <!-- Desktop navigation -->
  <div class="nav-container desktop">
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
  <div class="nav-container mobile">
    <button class="toggle-button" @click="toggleMobileNav">
      Menu <img src="@/assets/menu-icon.png" />
    </button>
    <div v-if="showMobileNav" class="links">
      <router-link to="/" @click="closeMobileNav">Home</router-link>
    </div>
    <div v-if="showMobileNav" class="links">
      <router-link to="/about" @click="closeMobileNav">About</router-link>
    </div>
    <div v-if="showMobileNav" @click="closeMobileNav" class="links">
      <router-link to="/employee">Employee Benefits</router-link>
    </div>
    <div v-if="showMobileNav" @click="closeMobileNav" class="links">
      <router-link to="/employer">Employer Information</router-link>
    </div>
    <div v-if="showMobileNav" @click="closeMobileNav" class="links">
      <router-link to="/legal">Legal Information</router-link>
    </div>
    <div v-if="showMobileNav" @click="closeMobileNav" class="links">
      <router-link to="/laws">State Laws</router-link>
    </div>
    <div v-if="showMobileNav" @click="closeMobileNav" class="links">
      <router-link to="/contactus">Contact Us</router-link>
    </div>
    <div class="mobile-menu-line"></div>
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
    padding: 24px 0;
    z-index: 1050;
    font-size: 1rem;

    .links {
      margin: 0 12px;
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
          font-size: 1.5rem;
          text-decoration: underline;
        }
      }
    }
  }
  .mobile {
    display: none;
    img {
      height: 12px;
      width: 12px;
      margin-left: 8px;
    }
    button {
      display: flex;
      align-items: center;
    }
  }
  @media screen and (max-width: 768px) {
    .desktop {
      display: none;
    }

    .nav-container {
      align-items: flex-start;
    }

    .mobile {
      display: flex;
      flex-direction: column;
      position: sticky;
      z-index: 1050;
      margin-bottom: 24px;
      padding: 0px;
      height: auto;
    }
    .mobile-menu-line {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
    }
  }

  // Styling for mobile toggle button
  .toggle-button {
    display: block;
    margin: 0 auto;
    background: none;
    border: none;
    color: black;
    font-size: 1rem;
    cursor: pointer;
    padding: 8px;
  }
</style>
