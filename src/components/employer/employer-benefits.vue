<script>
  export default {
    name: "EmployerBenefits",
    data() {
      return {
        openDropdown: "dropdown1",
      };
    },
    methods: {
      toggleDropdown(name) {
        if (this.openDropdown === name) {
          this.openDropdown = null;
        } else {
          this.openDropdown = name;
        }
      },
      isOpen(name) {
        return this.openDropdown === name;
      },
    },
  };
</script>

<template>
  <div class="employer-container">
    <div class="column employer-container_text">
      <div class="dropdown">
        <button @click="toggleDropdown('dropdown1')" class="dropbtn">
          <h1>Why understanding and acknowledging employees grief matters</h1>
        </button>
        <ul v-show="isOpen('dropdown1')" class="employer-container_text-blurb">
          <li>
            The Grief Institute Educational Foundation projects the costs of
            workplace grief at $75 billion annually… Specifically, the loss of
            loved ones costs workplaces $37.5 billion in annual productivity.
            The research done includes looking at ways to help reduce the loss
            of productivity as well as keep the employee in mind. These studies
            give employers and workplaces resources to help ease the grieving
            employee back into work, while helping mitigate the loss of
            productivity in the long run, overall saving the company money.
          </li>
        </ul>
      </div>

      <div>
        <button @click="toggleDropdown('dropdown2')" class="dropbtn">
          <h1>Development of grief models used in the workplace</h1>
        </button>
        <ul v-show="isOpen('dropdown2')" class="employer-container_text-blurb">
          <li>
            The C.A.R.E Model was created and refined in Canada. The researchers
            looked at gaps in employees returning to work after a loss. The
            C.A.R.E. Model focuses on communication, accommodations, recognition
            and emotional support. These are the four main components
            researchers found to be critical in aiding the bereaved returning to
            work. The researchers began looking at past literature to find the
            gaps in care. The identified gaps were then used to create a survey
            sent to multiple different industries. The quantitative surveys were
            used to refine the categories of communication, accommodations,
            recognition and emotional support.
          </li>
          <li>
            Loss and Grief in the Workplace focused on workplace culture and
            open communication. The study was developed by doing a literature
            review. The researchers surveyed multiple industries in Australia
            and found that workplace culture was a core reason many bereaved
            were uncomfortable openly discussing their grief and what extra
            support they needed during the initial return to work after loss.
            This study highlights the importance of a positive workplace
            environment before and after an employee's loss. The researchers
            identified an overwhelming amount of employees who feel
            uncomfortable expressing personal issues at work, and how this
            causes reduced productivity and increased mental stress.
          </li>
        </ul>
      </div>
      <div>
        <button @click="toggleDropdown('dropdown3')" class="dropbtn">
          <h1>What the studies found</h1>
        </button>
        <ul v-show="isOpen('dropdown3')" class="employer-container_text-blurb">
          <li>
            The finding identified that the lack of communication,
            accommodations, recognition and emotional support are the highest
            associated factors with declined productivity in the workplace after
            returning from a loss, and addressing those main components will aid
            in the return to work. When all four elements are utilized
            employee’s have an easier time returning to work because they
            receive the accommodations they need, and are given space within the
            workplace to feel comfortable. When an employee returns to work
            after a loss, their productivity has been seen to decline. The
            C.A.R.E. Model allows the employee to receive what they need to
            return to work while mitigating the loss of productivity that can be
            seen and felt after a personal loss
          </li>
          <li>
            Loss and Grief in the workplace. Overall this study highlights the
            importance of building an accepting and understanding workplace
            prior to a loss. The culture of acceptance and understanding needs
            to be carried through, and built upon during someone’s grief in
            order to ease the transition of returning to work in a way where
            both the employee and employer are content. The study found that
            workplace employee relationships are a critical component of the
            healing journey, and that by facilitating a workplace culture that
            promotes employee relationships your employees will have an overall
            better experience and will help reduce loss in productivity. The
            study indicates that the amount of time spent at work is large and
            therefore feeling safe enough to express personal struggles are a
            key component.
          </li>
          <li>
            Both studies found that there was a lack of comfortability in
            employees asking for additional support as well as the fact that
            many employees are unaware of what resources are available to them.
          </li>
        </ul>
      </div>
      <div>
        <button @click="toggleDropdown('dropdown4')" class="dropbtn">
          <h1>Testimonials</h1>
        </button>
        <ul v-show="isOpen('dropdown4')" class="employer-container_text-blurb">
          <li>
            Me and my wife never had kids, it was just us, so the people we
            worked with became like family. After she passed I had no idea what
            to do next. I tried to stay on the same routine we also had, the
            first day I went back to work I was overwhelmed by the support I
            received. I had letters and notes from coworkers, we talked about
            her, told stories and shared moments of laughter and tears. It
            allowed me to remember that I am not alone. The added support from
            close co-workers and the amount of compassion and understanding I
            felt is the reason I haven’t retired. Through the first year, I had
            regular check-ins and was given grace to have bad and hard days. I
            didn't know what I needed then, and I still am not sure what I need
            know, but what I do know is that work became a place of grace, and
            looking back that's what I needed most” - ( Anonymous)
          </li>
          <li>
            “The biggest thing I needed from work was time, I needed time to
            figure out what needed to be done, and time to grieve, and my job
            couldn’t give me that. I found myself stressed out and angry, I
            didn’t understand why I only got three days, and then needed to use
            PTO. I was asking for time off for a vacation, I was asking for time
            to go to the lawyer to make sure I did what I needed to do. I just
            needed time.” Mrs. Ramirez (works for a large corporation in finance
            department)
          </li>
          <li>
            “Many of my clients need time longer than 3-5 days. They ask and
            wish for more support in the workplace. They wish that instead of
            taking more PTO, that they could say they needed to do something
            related to the death and receive the time they needed whether that
            was a half day or a longer lunch, anything would help.” Logan Eaton,
            MSW
          </li>
        </ul>
      </div>
    </div>
    <div class="column employer-container_image">
      <img src="../../assets/care.jpg" />
    </div>
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
  .employer-container {
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
  }

  @media screen and (max-width: 768px) {
    .employer-container {
      flex-direction: column;
      text-align: left;
      h1 {
        font-size: 1rem;
      }
      li {
        font-size: 0.8rem;
      }
      &_text {
        flex-direction: column;
        justify-content: center;
      }
    }
  }
</style>
