<script>
  export default {
    name: "MainHeader",
  };
</script>

<template>
  <div class="header-container">
    <div class="header">
      <div class="header-content">
        <div class="header-content__text">
          <h1>Bereavement Companion</h1>
          <h2>
            Your Comprehensive Resource for Bereavement Leave and Legal
            Processes
          </h2>
        </div>
        <div class="header-content__buttons">
          <router-link to="/contactus" class="button">Contact Us</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 96px;
  }
  .header {
    background: rgb(208, 224, 252);
    background: linear-gradient(
      90deg,
      rgba(208, 224, 252, 1) 0%,
      rgba(238, 222, 240, 1) 51%,
      rgba(208, 224, 252, 1) 100%
    );
    height: 30vh;
    width: 95%;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      &__text {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
      }

      &__buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .button {
          background-color: black;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          border-radius: 5px;
          transition: background-color 0.3s;
          margin: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .header-container {
      margin-bottom: 0;
      h1 {
        font-size: 28px;
        margin-top: 16px;
        margin-bottom: 0px;
      }
      h2 {
        font-size: 24px;
        margin-bottom: 0px;
        padding: 0 8px;
      }
    }
    .header {
      height: 60vh;
      &-content {
        .button {
          font-size: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .header-container {
      margin-bottom: 0;
      h1 {
        font-size: 24px;
        margin-top: 16px;
        margin-bottom: 0px;
      }
      h2 {
        font-size: 20px;
        margin-bottom: 0px;
        padding: 0 8px;
      }
    }
    .header {
      height: 40vh;
      &-content {
        .button {
          font-size: 16px;
        }
      }
    }
  }
</style>
