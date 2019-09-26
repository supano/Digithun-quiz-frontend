<template>
  <div class="container">
    <div class="box">
      <h1>Profile</h1>
      <hr />
     
      Name:
      <input type="name" v-model="name" class="input"/>
      <hr />
      <div class="button-group">
        <button id="update" v-on:click="updateProfile" class="button is-primary">Update</button>
        <button id="logout" v-on:click="logout" class="button is-light">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    getProfile: function() {
      axios
        .get("http://localhost:9000/users", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(res => {
          let user = res.data.Data

          this.name = user.name
        })
        .catch(res => {
            this.$router.push('/')
            alert('please login')
        });
    },
    updateProfile: function() {
        axios
        .patch("http://localhost:9000/users", {
            email: this.email,
            name: this.name
        },{
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(res => {
          let user = res.data.Data

          this.email = user.email
          this.name = user.name

          alert("Updated")
        })
        .catch(err => {
            alert(err.response.data)
        });
    },
    logout: function() {
        localStorage.setItem("token", null)
        this.$router.push("/")
    }
  },
  mounted: function() {
    console.log("token", localStorage.getItem("token"));
    this.getProfile();
  }
};
</script>