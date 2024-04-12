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
          Some companies require you to submit proof that this leave was for the
          loss of a loved one. Most companies accept a death certificate,
          obituary, memorial service form from a mortuary, funeral home
          paperwork, burial society, religious institution, crematorium or
          governmental agency.
        </li>
        <li>
          You can take additional PTO if you have any for extra time needed
          beyond the bereavement leave given to you.
        </li>
        <li>Bereavement leave nationwide is typically 3-5 days unpaid leave</li>
      </ul>
    </div>
    <div class="column about-company-container_image">
      <img src="../../assets/lake-dock.jpg" />
    </div>
  </div>
  <div class="cta">
    The transition of returning to work after a loss is unique to each person.
    Lean on support systems, and ask for help. Many companies have additional
    benefits offered to the bereaved.
  </div>
</template>

<style scoped lang="scss">
  .column {
    display: flex;
    padding: 40px;
    flex: 1;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .about-company-container {
    display: flex;
    flex-direction: row;

    margin-top: 96px;
    text-align: justify;
    position: relative;

    &_image {
      display: flex;
      justify-content: center;
      img {
        max-height: 80vh;
      }
    }
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

  .dropbtn {
    width: 100%;
    background-color: #f9f9f9;
    border: none;
    border-radius: 8px;
    margin: 10px;
    padding: 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    background-image: linear-gradient(
      to right,
      #f6d365 0%,
      #fda085 51%,
      #f6d365 100%
    );
    color: black;
    /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-position: right center;
    }

    &-blurb {
      padding-left: 180px;
      li {
        margin-bottom: 24px;
      }
    }
  }

  .cta {
    font-size: 35px;
    font-weight: bolder;
    margin: 96px;
    padding: 100px;
    text-shadow: rgb(164, 164, 235) 1px 0 10px;
  }
</style>
