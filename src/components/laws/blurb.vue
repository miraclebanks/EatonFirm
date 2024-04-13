<script>
  export default {
    name: "MapBlurb",
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
  <div class="map-blurb-container">
    <div class="map-blurb-container_image">
      <img src="../../assets/advocating.png" />
    </div>
    <div class="map-blurb-container_text">
      <p class="map-blurb-container_text-blurb">
        4 of 5 states currently have bereavement leave that is unpaid. This
        causes greater hardship as now a choice has to be made, does the family
        member go to the funeral or stay at work in order to get paid?
      </p>

      <p class="map-blurb-container_text-blurb">
        Funerals are important for the living, they offer closure, and in many
        cultures are seen as a key part of the grieving process. As bereavement
        leave stands now many miss that opportunity due to the lack of
        compensation for the days off.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .map-blurb-container {
    margin-top: 96px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 96px;
    margin-bottom: 96px;
    &_image {
      border: 8px solid black;
      flex: 1;
    }
    &_text {
      border: 8px solid black;
      margin: 0px 16px;
      font-size: 32px;
      font-weight: bolder;
      flex: 1;
      &-blurb {
        display: flex;
        text-align: justify;
        padding: 0px 48px;
      }
    }
    &-buttons {
      background-color: black;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin: 16px;
      font-weight: bold;
      transform: rotate(0deg);
      width: 120px;
      height: fit-content;
      &::before {
        content: none;
        width: 50%;
        height: 50%;
        border-radius: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &::after {
        content: none;
      }
    }
  }
</style>
