<script>
  import Blurb from "../../components/laws/blurb.vue";
  export default {
    name: "UsMap",

    components: { Blurb },
  };
</script>

<template>
  <Blurb />
  <div class="map">
    <img class="map-image" src="../../assets/us-map.jpg" />
    <button class="california">
      <div class="tooltip">
        This
        <a
          href=" https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2023/04/Bereavement-Leave_AB-1949_FAQ_ENG.pdf"
          target="_"
          >law</a
        >
        became effective January 1, 2023. The law dictates that a private
        employer with more than 5 employees must give 3-5 days of unpaid leave
        for bereavement leave if an employee has worked at said company for more
        than 30 days.
      </div>
    </button>

    <button class="oregon">
      <div class="tooltip">
        <a
          href=" https://www.portland.gov/bhr/documents/ofla-bereavement-leave-guidance/download"
          target="_"
          >Oregon’s bereavement law</a
        >
        has been effective since January 1, 2014. It dictates employers with 25
        or more employees must allow qualifying employees to take 2 weeks of
        leave for each family member that dies, this is not required to be paid.
      </div>
    </button>
    <button class="washington">
      <div class="tooltip">
        Washington has
        <a
          href="https://apps.leg.wa.gov/wac/default.aspx?cite=357-31-250#:~:text=(1)%20If%20an%20employee's%20family,days%20of%20paid%20bereavement%20leave."
          >WAC 357-31-250</a
        >, which creates a law that requires all employers and employees to
        receive 3 days of paid leave for bereavement leave

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
        employees to take 2 weeks (10 workdays) off of unpaid leave following
        the death of a covered family member.
      </div>
    </button>
    <button class="maryland">
      <div class="tooltip">
        <a
          href="https://dbm.maryland.gov/employees/pages/leave_home.aspx#:~:text=Death%20in%20the%20Family&text=An%20employee%20may%20elect%20to,for%20other%20designated%20family%20members"
          target="_"
          >Maryland law</a
        >
        dictates that an employee may take 3 days of bereavement leave instead
        of using 3 of their sick days, however 1 sick day may be charged to sick
        leave during this time.
      </div>
    </button>
    <button class="vermont pending">
      <div class="tooltip">
        <a
          href="https://legislature.vermont.gov/bill/status/2024/H.66"
          target="_"
          >Vermont - House Bill 66</a
        >
        If passed in the Vermont Senate this would create an integrated
        bereavement leave component in the Family and Medical Leave Act. It
        would allow employees to take 2 weeks out of the 12 offered by FMLA for
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
        >This bill would amend workers compensation law for paid bereavement
        leave starting in 2025. This bill was previously passed in the assembly
        and senate in 2018, but ultimately vetoed. This bill was referred to
        labor on January 3, 2024.
      </div>
    </button>
  </div>
</template>

<style lang="scss">
  .map {
    position: relative;
    button {
      position: absolute;
    }
  }
  .map-image {
    width: 100%;
    height: fit-content;
  }

  .california {
    top: 40%;
    left: 20%;
    div {
      top: -120%; /* Position the tooltip below the container */
      left: -220%;
    }
  }
  .oregon {
    top: 25%;
    left: 23%;
    div {
      top: -120%; /* Position the tooltip below the container */
      left: -220%;
    }
  }
  .washington {
    top: 15%;
    left: 26%;
    div {
      top: -120%; /* Position the tooltip below the container */
      left: -220%;
    }
  }
  .illnois {
    top: 40%;
    left: 63%;
    div {
      top: -120%; /* Position the tooltip below the container */
      left: -220%;
    }
  }
  .maryland {
    top: 30%;
    left: 85%;
    div {
      top: 50%; /* Position the tooltip below the container */
      left: -450%;
    }
  }
  .ny {
    top: 30%;
    left: 81%;
    div {
      top: -120%; /* Position the tooltip below the container */
      left: -220%;
    }
  }
  .vermont {
    top: 26%;
    left: 84%;
  }
  .tooltip {
    display: none;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px;
    z-index: 1;
    width: 400px;
    height: fit-content;
    position: absolute;
    transform: rotate(-44deg);
    a {
      color: #aa3300;
    }
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
    transform: rotate(45deg);

    /* optional fanciness */
    border: 1px solid #10630e;
    position: relative;
  }
  .pending {
    background: #aa3300;
    border: 1px solid #881100;
  }

  .illnois:hover .tooltip,
  .washington:hover .tooltip,
  .maryland:hover .tooltip,
  .ny:hover .tooltip,
  .vermont:hover .tooltip,
  .california:hover .tooltip,
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
