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
    justify-content: center;
    padding: 0px 96px;
    margin-bottom: 96px;
    &_image {
      border: 4px solid black;
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
      &:hover {
        border-color: #6c5ce7; /* Change border color on hover */
      }
    }
    &_text {
      font-weight: bolder;
      margin: 0px 16px;
      flex: 1;
      &-blurb {
        display: flex;
        padding: 0px 48px;
        font-size: 2.1rem;
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
  @media screen and (max-width: 1400px) {
    .map-blurb-container {
      margin: 48px 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &_text {
        border: 4px solid black;
        margin: 16px 0px;
        &:hover {
          border-color: #6c5ce7; /* Change border color on hover */
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .map-blurb-container {
      padding: 0px 24px;
      &_text {
        margin: 16px 0px;
        &-blurb {
          display: flex;
          padding: 0px 8px;
          font-size: 0.8rem;
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .map-blurb-container {
      margin: 8px 0px;
    }
  }
</style>
