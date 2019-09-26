<template>
  <div class="container">
    <div class="box">
      <h1>Register</h1>
      <hr />
      Email:
      <input type="email" v-model="email" class="input" />
      <br />Password:
      <input type="password" v-model="password" class="input" />
      <hr />
      <button id="register" v-on:click="register" class="button is-primary">Register</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Register",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register: function() {
      axios
        .post("http://localhost:9000/register", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          this.$router.push("/");
          alert("Registration Success")
        })
        .catch(err => {
            alert(err.response.data)
        });
    }
  }
};
</script>


<style scoped>
.is-primary {
    width: 100%;
}
</style>
