<template>
    <div class="container">
        <div class="card">
            Register
            <hr />
            Email: <input type="email" v-model="email" /> <br />
            Password: <input type="password"  v-model="password" />
            <hr />
            <button id="register" v-on:click="register">Register</button>
        </div>
  </div>
</template>


<script>
import axios from "axios"

export default {
  name: 'Login',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
   methods: {
     register: function () {

       axios.post('http://localhost:9000/register', {
         email: this.email,
         password: this.password
       })
       .then(res => {
           this.$router.push('/')
       })
     }
  }
}
</script>
