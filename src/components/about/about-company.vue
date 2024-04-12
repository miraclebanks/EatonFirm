<script>
  export default {
    name: "AboutCompany",
    data() {
      return {
        showMore: false,
      };
    },
    methods: {
      toggleShowMore() {
        this.showMore = !this.showMore;
      },
    },
  };
</script>

<template>
  <div class="about-company-container">
    <div class="about-company-container_image">
      <img src="../../assets/Eryn.jpg" />
    </div>
    <div class="about-company-container_text">
      <p class="about-company-container_text-blurb">
        This website was created to help change that feeling of being lost, to
        provide resources and relief. The emotions of grief are overwhelming,
        and trying to find what the company’s bereavement leave is, figuring out
        the legal aspects of death, not knowing if your state has laws about
        bereavement leave, nor what they are, are all things not thought about
        until the loss happens to you. This website has that information and
        more. We have also created a space for employers to come and gain more
        information and tools to help their employees transition back to work
        after a loss. As well as a space to begin to understand the legal
        process that can occur after a death. Grief and loss are universal and
        the culture and attitudes around it need to shift. This website is one
        small piece to try and achieve that goal. As you go through your grief
        journey I hope this website gives you tools and resources needed to help
        make the transition to “your new normal” a little easier. .
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about-company-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 96px;
    border: 1px solid grey;
    &_image {
      img {
        max-height: 70vh;
      }
    }
    &_text {
      padding: 0px 96px;
      font-size: 18px;
      font-weight: bolder;
    }
  }
</style>
