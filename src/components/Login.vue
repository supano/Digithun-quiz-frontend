<template>
  <div class="container">
   <div class="box">
      <h1>Login</h1>
      <hr />
      Email:
      <input type="email" v-model="email" class="input" />
      <br />Password:
      <input type="password" v-model="password" class="input" />
      <hr />
      <div class="button-group">
        <router-link to="/register">
          <button id="register" class="button is-light">Register</button>
        </router-link>
        <button id="login" v-on:click="login" class="button is-primary">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      axios
        .post("http://localhost:9000/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          localStorage.setItem("token", res.data.token);
          this.$router.push("/profile");
        })
        .catch(err => {
          alert(err.response.data)
        });
    }
  }
};
</script>
