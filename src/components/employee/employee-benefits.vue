<script>
  export default {
    name: "EmployeeBenefits",
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
    <div class="text-container">
      <div class="cta">
        <h1>
          The transition of returning to work after a loss is unique to each
          person. Lean on support systems, and ask for help. Many companies have
          additional benefits offered to the bereaved.
        </h1>
      </div>
      <div class="column about-company-container_text">
        <h1>How to find bereavement policy</h1>
        <ul class="about-company-container_text-blurb">
          <li>
            Companies may place this information in an employee handbook. The
            benefits section will have specific directions as to what your
            employer requires for bereavement leave.
          </li>
          <li>Talk to your direct supervisor.</li>
          <li>
            Some companies require you to submit proof that this leave was for
            the loss of a loved one. Most companies accept a death certificate,
            obituary, memorial service form from a mortuary, funeral home
            paperwork, burial society, religious institution, crematorium or
            governmental agency.
          </li>
          <li>
            You can take additional PTO if you have any for extra time needed
            beyond the bereavement leave given to you.
          </li>
          <li>
            Bereavement leave nationwide is typically 3-5 days unpaid leave
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about-company-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url("../../assets/lake-dock.jpg");
    background-size: cover;
    &_text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 18px;
      font-weight: bolder;
      &-blurb {
        padding: 0px 40px 40px 40px;
        li {
          font-size: 24px;
          margin-bottom: 24px;
        }
      }
    }
  }
  .text-container {
    background-color: rgba(48, 46, 46, 0.8);
    padding: 20px;
    width: 65%;
    height: 900px;
    color: white;
  }

  .cta {
    font-weight: bolder;
    padding: 100px;
    color: white;
    text-shadow: rgb(52, 52, 196) 1px 0 15px;
  }
</style>
