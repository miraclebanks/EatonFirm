<script>
  export default {
    name: "ContactForm",

    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        fetch("http://localhost:3000/contactus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Email sent successfully");
              // Optionally, reset the form
              this.formData.name = "";
              this.formData.email = "";
              this.formData.message = "";
            } else {
              console.error("Failed to send email");
            }
          })
          .catch((error) => {
            console.error("Error:", error, this.formData);
          });
      },
    },
  };
</script>
<template>
  <div class="contact-container">
    <div class="form-container">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="8"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="contact-container-image">
      <img src="../../assets/find-help.png" />
    </div>
  </div>
</template>
<style lang="scss">
  /* Add component-specific styles here */
  .contact-container {
    display: flex;
    flex-direction: row;

    &-image {
      margin: 16px;
      min-width: 500px;
      border-radius: 4px;
      box-sizing: border-box;

      img {
        max-width: 100%;
        height: auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
      }
    }

    .form-container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      box-sizing: border-box;
      margin: 16px;
      flex: 1;
      min-width: 500px;
      width: 100%;
      height: auto;
      border: 4px solid black;
      border-radius: 8px;
      padding: 40px 40px;
      div {
        display: flex;
        flex-direction: column;
      }
      form {
        display: flex;
        flex-direction: column;
      }

      label {
        margin-bottom: 0.5rem;
      }

      input,
      textarea {
        padding: 0.5rem;
        margin-bottom: 1rem;
      }

      button {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: #fff;
        border: 1px solid white;
        border-radius: 8px;
        cursor: pointer;
      }

      button:hover {
        background-color: #0056b3;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .contact-container {
      display: flex;
      flex-direction: column;
      &-image {
        min-width: 0px;
      }
      .form-container {
        width: auto;
        min-width: 0px;
      }
    }
  }
</style>
