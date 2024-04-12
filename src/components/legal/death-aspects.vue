<script>
  export default {
    name: "DeathAspects",
    data() {
      return {
        isOpen1: false,
        isOpen2: false,
        isOpen3: false,
        isOpen4: false,
        isOpen5: false,
        isOpen6: false,
      };
    },
    methods: {
      toggleDropdown1() {
        this.isOpen1 = !this.isOpen1;
      },
      toggleDropdown2() {
        this.isOpen2 = !this.isOpen2;
      },
      toggleDropdown3() {
        this.isOpen3 = !this.isOpen3;
      },
      toggleDropdown4() {
        this.isOpen4 = !this.isOpen4;
      },
      toggleDropdown5() {
        this.isOpen5 = !this.isOpen5;
      },
      toggleDropdown6() {
        this.isOpen6 = !this.isOpen6;
      },
    },
  };
</script>

<template>
  <div class="cta">
    *This is not legal advice. Each State will have its own procedures for Trust
    Administrations and Probates; Included in this website is general
    information for what the procedures are in California.
  </div>
  <div class="trust-image"><img src="../../assets/trust.png" /></div>
  <div class="about-company-container">
    <div class="column about-company-container_text">
      <div>
        <button @click="toggleDropdown1" class="dropbtn">
          <h1>With an established Trust</h1>
        </button>
        <ul v-if="!isOpen1" class="about-company-container_text-blurb">
          <li>
            <h3>What is a Trust administration, and why it's important.</h3>
            A Trust administration is when the Trustee takes over a trust. This
            is done to ensure that the trust wishes are followed, along with
            taking care of the legal paperwork that needs to be filed with
            specific agencies, moving property, consolidating bank accounts, and
            doing an accounting that allows for all the beneficiaries to
            understand how much money the estate started with, if any creditors
            needed to be paid, and the remaining balance that will be
            distributed as stated in the trust.
          </li>
          <li>
            <h3>
              The mental toll of being a trustee is large, and sometimes that
              added stress alongside grief is extremely overwhelming. If that’s
              the case there are key things that should be done within a year of
              the death.
            </h3>
            <ul>
              <li>
                <h5>
                  Sending documentation to the Franchise Tax Board and
                  Department of Health Services
                </h5>
              </li>
              <ul>
                <li>
                  In order to do this the trustee needs to send a letter stating
                  that they are the trustee of said trust, along with a copy of
                  the death certificate to both agencies. The two agencies will
                  internally check to see if the decedent has either outstanding
                  Taxes due to the state or unpaid Medicare bills. If there are
                  outstanding bills, the estate will need to pay those. After
                  death, debts do not go away, this step ensures that if there
                  are outstanding invoices the trustee becomes aware and can pay
                  them out of the estate.
                </li>
              </ul>
              <li>
                <h5>
                  Included are going to be hyper links to
                  <a
                    href="https://www.ftb.ca.gov/file/personal/filing-status/deceased-person.html"
                    target="_"
                    >The Franchise Tax Board page
                  </a>
                  about Taxes and what needs to be done after a person has died
                  and the link to the
                  <a
                    href="https://www.dhcs.ca.gov/services/Pages/TPLRD_ER_cont.aspx
"
                    target="_"
                  >
                    Department of Health Care Services</a
                  >
                  for their page about reporting the death of a family member.
                  These kinks are only for the state of California.
                </h5>
              </li>
            </ul>
          </li>
          <li>
            <h3>
              Moving any property into the name of the trustee, or heir that is
              inheriting the property(s) (included the forms for California
              only)
            </h3>
            <ul>
              <li>
                <a
                  href="https://www.boe.ca.gov/proptaxes/pdf/sample-boe502a.pdf
"
                  target="_"
                >
                  Preliminary change of ownership</a
                >
                - This form is used to inform the county assessor office that
                there is a Change of Ownership.
              </li>
              <li>
                <a
                  href="https://www.capropeforms.org/forms/alameda/BOE-58-AH/pdf/2023
"
                  target="_"
                >
                  Claim for Reassessment Exclusion for Transfer Between Parent
                  and Child</a
                >
                - This document is only used when property is being transferred
                from a parent to child or child to parent. If the transfer is
                between spouses then this form is not needed.
              </li>
              <li>
                In 2022 Proposition 19 passed. When
                <a
                  href="https://www.capropeforms.org/forms/orange/BOE-266/pdf/
"
                  target="_"
                >
                  Proposition 19</a
                >
                was passed it made a law that stated only Parent-to-child
                transfers of primary residences were excluded from property
                taxes to be reassessed as of the date of death. Due to this
                along with the forms above the Claim for Homeowners’ Property
                Tax Exemption, needs to be filled out WITHIN A YEAR of the date
                of death to ensure that the property taxes will not be
                reassessed.
              </li>
              <li>
                All of these forms do not have a filing fee, they just need to
                be sent to the assessor's office for the county that the real
                property is located in
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="column about-company-container_text">
      <div>
        <button @click="toggleDropdown4" class="dropbtn">
          <h1>Probate</h1>
        </button>
        <ul v-if="!isOpen4" class="about-company-container_text-blurb">
          <li>
            Probate is the legal process that must be followed in order to
            transfer and distribute financial and physical property after the
            decedent who owned the property has died without a trust. A flow
            chart has been included to help decipher if a probate is needed.
          </li>
          <li>
            Meet with a Probate Attorney
            <ul>
              <li>
                The probate process often takes between a year to a year and a
                half, depending on how quickly documents are signed and filed
                with the court. Many people go to probate attorneys to go
                through this legal process with guidance. This process can be
                done without an attorney. If having a probate attorney is the
                process desired, here are a few things to keep in mind.
                <ul>
                  <li>
                    Have a family tree done documenting who is related by blood
                    to the decedent (deceased person)
                  </li>
                  <li>
                    Expect filing fees ranging from $500-2,500. For filing fees
                    in California the initial petition cost will be around
                    $500.00 and the accounting fee will also be $500.00. There
                    will be additional filing fees that depend on the county for
                    other documents, those are typically around $20.00. There
                    are additional expenses that need to be paid such as
                    publication, the probate referee, and any creditors. However
                    the appointed party can request reimbursements from the
                    estate.
                  </li>
                </ul>
              </li>
              <li>
                Link to bar association websites
                <ul>
                  <li>
                    Each state has its bar association website where there is an
                    option to search for attorneys. The best way to find a
                    specific state bar association is to search on the internet.
                    The correct state bar website will have .gov as the web
                    domain.
                  </li>
                  <li>
                    <a
                      href="https://lawyers.law.cornell.edu/lawyers/probate/california
"
                      target="_"
                      >Cornell Law School</a
                    >
                    also has a database that looks up local probate attorneys
                    via the zip code.
                  </li>
                </ul>
              </li>
              <li>
                Testimonial from Probate Attorney
                <ul>
                  <li>
                    Attorney Aaron Charles Gregg, “Most clients feel like they
                    are in fog, and the best thing we can do is be a steady
                    place they can come to with questions. Within the field more
                    compassion is needed, we need to meet people where they are
                    at and if that means it takes them a year to begin the
                    process they should be allotted that time within the legal
                    space.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cta {
    font-size: 35px;
    font-weight: bolder;
    margin-top: 96px;
    margin-bottom: 24px;
    padding: 100px;
    text-shadow: rgb(164, 164, 235) 1px 0 10px;
  }
  .trust-image {
    padding: 0px 96px;
    img {
      width: 75%;
      height: 45vh;
      border: 3px solid black;
      border-radius: 8px;
    }
  }
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
      #fbc2eb 0%,
      #a6c1ee 51%,
      #fbc2eb 100%
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
</style>
