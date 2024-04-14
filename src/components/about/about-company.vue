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
        the culture and attitudes around it needs to shift. This website is one
        small piece to try and achieve that goal. As you go through your grief
        journey I hope this website gives you tools and resources needed to help
        make the transition to “your new normal” a little easier.
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
    margin-top: 48px;
    height: fit-content;
    padding: 0px 24px;
    &_image {
      flex: 1;
      border-image-source: url("https://raw.githubusercontent.com/robole/artifice/main/framed-content/img/frame.png");
      border-image-slice: 93 92 87 92;
      border-image-repeat: stretch;

      border-style: inset;
      border-width: 60px;

      display: grid;
      row-gap: 2rem;

      background-color: #ffe;
      margin: 0 auto;
      padding: 0.5rem;

      resize: both;
      overflow: auto;

      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3), 0 0 6px 0 rgba(0, 0, 0, 0.18);
      height: fit-content;
      img {
        width: 100%;
        min-height: 100%;
      }
    }
    &_text {
      flex: 1;
      font-size: 1rem;
      font-weight: bolder;
    }
  }
  @media screen and (max-width: 768px) {
    .about-company-container {
      flex-direction: column;
    }
  }
</style>
