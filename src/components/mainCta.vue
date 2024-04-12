<script>
  export default {
    name: "MainCta",
  };
</script>

<template>
  <section id="one" class="main style1">
    <div class="cta-container">
      <div class="cta-content">
        <div class="cta-content__image">
          <img src="@/assets/grief.jpg" alt="" />
        </div>
        <div class="cta-content__text">
          <h2>
            Supporting Employees, Employers, and Grieving Individuals with
            Information and Resources that offers hope & relief
          </h2>
          <p>
            BereavementCompanion.com is a one- stop shop for resources and
            information surrounding bereavement leave, aimed to help employees,
            employers and all those grieving. Also included is information about
            laws and legal processes that follow a death. A continuous hope is
            that this website allows for some relief during this very difficult
            time
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .cta-content {
    margin-bottom: 96px;
    margin-right: 50px;
    margin-left: 50px;
  }
  .cta {
    display: flex;
    flex-direction: column;

    &-content {
      display: flex;
      flex-direction: row;
      &__image {
        flex: 2;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &__text {
        flex: 1;
        padding: 40px;
      }
    }
  }
</style>
