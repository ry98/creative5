<template>
  <div class="column">
    <h1>Find and share recipes!</h1>
    <form v-on:submit.prevent="register">
      <p>Choose a user name</p>
      <input class="narrow" v-model="username" placeholder="User Name">
      <p>Create an account.</p>
      <input class="wide" v-model="name" placeholder="First and Last Name"><br/>
      <input class="narrow" v-model="email" placeholder="Email Address">
      <input class="narrow" type="password" v-model="password" placeholder="Password">
      <br>
      <button class="alternate" type="submit">Register</button>
    </form>
    <p class="error">{{registerError}}</p>
    <div class="footer" style="position: fixed; right: 0;bottom: 0;left: 0; padding: 1rem;background-color: white;
  text-align: center; color:gray;"><a href="https://github.com/ry98/creative5" style="color: #666;">My Github</a></div>
  </div>
</template>

<script>
 export default {
   name: 'WelcomePage',
   data () {
     return {
       username: '',
       email: '',
       password: '',
       name: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
   username: this.username,
         email: this.email,
         password: this.password,
   name: this.name,
       });
     }
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 img {
     width: 100px;
 }
 body {
    background: url("../../static/b.png");
    align: left;
    padding:50px;
    }
    .column{
    position:relative;
    left:30%;
    }

 h1 {
     margin-bottom: 0px;
 }
 h2 {
     margin-top: 0px;
     font-size: 1.2em;
     font-weight: normal;
     margin-bottom: 50px;
 }
 .narrow {
     width: 170px;
 }
 .wide {
     width: 370px;
 }
</style>