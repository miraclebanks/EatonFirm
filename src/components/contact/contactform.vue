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
        // Here you can handle form submission
        console.log("Form submitted:", this.formData);
        // You can also send the form data to a backend API for processing
        // For example, you can use Axios to make an HTTP POST request
        // axios.post('/api/contact', this.formData)
        //   .then(response => {
        //     console.log('Server response:', response);
        //   })
        //   .catch(error => {
        //     console.error('Error:', error);
        //   });
      },
    },
  };
</script>
<template>
  <div class="contact-container">
    <div class="form-container">
      <h2>Contact Us</h2>
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
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
  <div></div>
</template>
<style scoped>
  /* Add component-specific styles here */
  .contact-container {
    display: flex;
    align-items: center; /* Centers the content vertically */
  }

  .form-container {
    max-width: 400px;
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
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
