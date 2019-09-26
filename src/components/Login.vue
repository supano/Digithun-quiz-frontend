<template>
    <div class="container">
        <div class="card">
            Login
            Email: <input type="email" v-model="email" /><br />
            Password: <input type="password"  v-model="password" />
            <hr />
            <button id="login" v-on:click="login">Login</button>
            <router-link to="/register">
                <button id="register">Register</button>
            </router-link>
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
     login: function () {
       axios.post('http://localhost:9000/login', {
         email: this.email,
         password: this.password
       })
       .then(res => {
         localStorage.setItem('token', res.data.token)
         this.$router.push('/profile')
       })
     }
  }
}
</script>

<style scoped>

</style>
