<script>
  import Blurb from "../../components/laws/blurb.vue";
  export default {
    name: "UsMap",

    components: { Blurb },
    data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    close() {
        document.querySelector("layover-button").style.display = "none";
      },
  }
};

</script>

<template>
  <button v-if="!isModalOpen" @click="openModal"> Advocating for your rights</button>
  <button v-if="isModalOpen" @click="closeModal">Close</button>
  <div v-if="isModalOpen"><img src="../../assets/advocating.png"/></div>
  <Blurb />
  <div><img class="map" src="../../assets/us-map.jpg" /></div>
  <!-- <div class="layover">
    <button @click="close" class="layover-button">x</button>
    <h3>Updates to Bereavement Leave Policies</h3>

    Updating who is considered family, expanding the definition to include
    important people in the person's life who are not “direct family”<sup
      >5</sup
    >
    Updating the amount of time off in a format similar to maternity and
    paternity leave. As it stands “76% of bereaved employees’ overall
    performance at work was harmed after suffering a loss”<sup>6</sup>
  </div> -->
  <button class="california">
    <div class="tooltip">
      This
      <a
        href=" https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2023/04/Bereavement-Leave_AB-1949_FAQ_ENG.pdf"
        target="_"
        >law</a
      >
      became effective January 1, 2023. The law dictates that a private employer
      with more than 5 employees must give 3-5 days of unpaid leave for
      bereavement leave if an employee has worked at said company for more than
      30 days.
    </div>
  </button>

  <button class="oregon">
    <div class="tooltip">
      <a
        href=" https://www.portland.gov/bhr/documents/ofla-bereavement-leave-guidance/download"
        target="_"
        >Oregon’s bereavement law</a
      >
      has been effective since January 1, 2014. It dictates employers with 25 or
      more employees must allow qualifying employees to take 2 weeks of leave
      for each family member that dies, this is not required to be paid.
    </div>
  </button>
  <button class="washington">
    <div class="tooltip">
      Washington has <a href="https://apps.leg.wa.gov/wac/default.aspx?cite=357-31-250#:~:text=(1)%20If%20an%20employee's%20family,days%20of%20paid%20bereavement%20leave.">WAC 357-31-250</a>, which creates a law that requires all employers and employees to receive 3 days of paid leave for bereavement leave

      <a
        href="https://www.lni.wa.gov/workers-rights/leave/holiday-vacation-bereavement-leave#:~:text=Washington%20State%20does%20not%20require,between%20an%20employer%20and%20employee."
        target="_"
        >Washington law</a
      >
      is different compared to the four listed above. They do not require
      bereavement leave except for an employee who lost a child under defined
      circumstances.
    </div>
  </button>
  <button class="illnois">
    <div class="tooltip">
      <a href="https://labor.illinois.gov/faqs/flbafaqs.html" target="_"
        >Illinois state</a
      >
      dictates that the Family Bereavement Leave Act (FBLA) requires eligible
      employees to take 2 weeks (10 workdays) off of unpaid leave following the
      death of a covered family member.
    </div>
  </button>
  <button class="maryland">
    <div class="tooltip">
      <a
        href="https://dbm.maryland.gov/employees/pages/leave_home.aspx#:~:text=Death%20in%20the%20Family&text=An%20employee%20may%20elect%20to,for%20other%20designated%20family%20members"
        target="_"
        >Maryland law</a
      >
      dictates that an employee may take 3 days of bereavement leave instead of
      using 3 of their sick days, however 1 sick day may be charged to sick
      leave during this time.
    </div>
  </button>
  <button class="vermont pending">
    <div class="tooltip">
      <a href="https://legislature.vermont.gov/bill/status/2024/H.66" target="_"
        >Vermont - House Bill 66</a
      >
      If passed in the Vermont Senate this would create an integrated
      bereavement leave component in the Family and Medical Leave Act. It would
      allow employees to take 2 weeks out of the 12 offered by FMLA for
      bereavement leave. The bill is currently with the Economic Development,
      Housing and General Affairs committee in the senate. It passed during a
      Vermont House vote in March of 2023
    </div>
  </button>
  <button class="ny pending">
    <div class="tooltip">
      <a
        href="https://www.lni.wa.gov/workers-rights/leave/holiday-vacation-bereavement-leave#:~:text=Washington%20State%20does%20not%20require,between%20an%20employer%20and%20employee."
        target="_"
        >New York- Bill #A06605</a
      >This bill would amend workers compensation law for paid bereavement leave
      starting in 2025. This bill was previously passed in the assembly and
      senate in 2018, but ultimately vetoed. This bill was referred to labor on
      January 3, 2024.
    </div>
  </button>
</template>

<style lang="scss">
  .map {
    width: 100%;
    height: 88vh; /* Take full height of the viewport */ /* Maintain aspect ratio while covering the entire container */
    position: relative;
    top: 80000;
    left: 0;
  }
  .layover {
    width: 600px;
    height: 200px;
    background: black;
    color: white;
    position: absolute;
    top: 65%;
    left: 35%;
    z-index: 2;
    padding: 40px;
    border: 2px solid black;
    border-radius: 12px;
    box-shadow: #333;
    &-button {
      z-index: 3;
      top: 2%;
      left: 95%;
      position: absolute;
      color: white;
      background: none;
      border: none;
      font-size: 24px;
    }
  }
  .california {
    top: 65%;
    left: 20%;
    div {
      top: 1%; /* Position the tooltip below the container */
      left: 50%;
    }
  }
  .oregon {
    top: 50%;
    left: 23%;
  }
  .washington {
    top: 43%;
    left: 26%;
  }
  .illnois {
    top: 65%;
    left: 63%;
  }
  .maryland {
    top: 64%;
    left: 80%;
  }
  .ny {
    top: 55%;
    left: 80%;
  }
  .vermont {
    top: 52%;
    left: 84%;
  }
  .tooltip {
    display: block;
    position: inherit;

    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px;
    z-index: 1;
    width: 400px;
    height: fit-content;
    transform: rotate(-44deg);
  }
  .california,
  .vermont,
  .ny,
  .maryland,
  .washington,
  .illnois,
  .oregon {
    /* Set the marker size here */
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    /* Set the marker color here */
    background: #199f1d;

    display: inline-block;
    border-bottom-right-radius: 0;
    position: relative;
    transform: rotate(45deg);
    position: absolute;

    /* optional fanciness */
    border: 1px solid #10630e;
  }
  .pending {
    background: #aa3300;
    border: 1px solid #881100;
  }
  .california:hover,
  .vermont:hover,
  .ny:hover,
  .maryland:hover,
  .washington:hover,
  .illnois:hover,
  .oregon:hover .tooltip {
    display: block;
  }
  .california::before,
  .vermont::before,
  .ny::before,
  .maryland::before,
  .washington::before,
  .illnois::before,
  .oregon::before {
    content: "";
    background: white;
    width: 50%;
    height: 50%;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    /* optional fanciness */
    box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
  }
  .california::after,
  .vermont::after,
  .ny::after,
  .maryland::after,
  .washington::after,
  .illnois::after,
  .oregon::after {
    content: "";
    background: rgba(128, 128, 128, 0.2);
    width: 75%;
    height: 75%;
    border-radius: 100%;
    position: absolute;
    top: 100%;
    left: 100%;
    transform: translate(-50%, -50%) rotate(45deg) scaleX(0.5);
  }
</style>
