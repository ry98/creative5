<template>
  <nav>
    <ul id="menu">
      <li><h1>Recipes</h1></li>
      <li class="right" v-if="loggedIn"><a @click="logout" href="#">Logout</a></li>
      <li class="right" v-if="loggedIn"><router-link :to="{path:'/create'}">Create</router-link></li>
      <li class="right" v-if="loggedIn"><router-link :to="{path:'/search'}">Search</router-link></li>
      <li class="right" v-if="loggedIn"><router-link :to="{path:'/'}">Home</router-link></li>
      <form v-else class="right" v-on:submit.prevent="login">
	<input v-model="email" placeholder="Email Address">
	<input v-model="password" placeholder="Password">
	<button class="primary" type="submit">Login</button>
      </form>
    </ul>
    <div class="flexWrapper errorPlace">
      <p v-if="loginError" class="flexRight error">{{loginError}}</p>
    </div>
  </nav>
</template>

<script>
 export default {
   name: 'AppHeader',
   data () {
     return {
       email: '',
       password: '',
     }
   },
   computed: {
     user: function() {
       return this.$store.getters.user;
     },
     loggedIn: function() {
       return this.$store.getters.loggedIn;
     },
     loginError: function() {
       return this.$store.getters.loginError;
     },
   },
   methods: {
     login: function() {
       this.$store.dispatch('login',{
         email: this.email,
         password: this.password,
       }).then(user => {
   this.email = '';
   this.password = '';
       });
     },
     logout: function() {
      this.$router.push({ path: '/'})
       this.$store.dispatch('logout');
     }
   }
 }
</script>

<style scoped>
 /* Strip the ul of padding and list styling */
 nav {
     display: grid;
     margin-bottom: 20px;
     background: #e7eaeb;
     width:100%
 }
 ul {
     list-style-type:none;
     margin:0;
     padding:0;
 }
 /* Create a horizontal list with spacing */
 li {
     display:inline-block;
     float: left;
     margin-right: 20px;
     height: 50px;
     text-align: center;
     line-height: 50px;
     color: #666;
     padding:10px;
 }
 /*Active color*/
 li a.active {
 }
 /*Hover state for top level links*/
 li:hover a {
 }
 .right {
     float: right;
 }
 .errorPlace {
     height: 20px;
 }
 img {
     width: 50px;
 }
 h1{
 color:#F35537;
 }
   button
{
    font-family: 'Raleway', sans-serif;
    background-color:#FF5733;
    color:white;
    border:none;
        
}
input
{
  border:none;
  border-bottom: 2px solid #FF5733;
}
</style>
