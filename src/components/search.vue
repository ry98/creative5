<template>
  <div class="feed">
  <div class="header">
    <form v-on:submit.prevent="search">
      <input type="text" v-model="input">
      <button type="submit">Search</button>
    </form>
    </div>
    <div v-for="item in feed" class="item">
    <router-link :to="{name:'recipeview',params:{recipe_id: item.id, title:item.recipe}}" class="recipe">{{item.recipe}}</router-link>
      <p class="idline"><span class="user">{{item.name}} created this recipe {{item.created | since}} ago</span></p>
    </div>
    <div class="footer" style="position: fixed; right: 0;bottom: 0;left: 0; padding: 1rem;background-color: white;
  text-align: center; color:gray;"><a href="https://github.com/ry98/creative5" style="color: #666;">My Github</a></div>
  </div>
</template>

<script>
 import moment from 'moment';
 export default {
   name: 'searchFeed',
   data () {
     return {
       input: '',

 
       
     }
   },
   created: function() {
      if(!this.$store.getters.loggedIn)
      {
        this.$router.push('/');
      }
      this.$store.dispatch('clearSearch');
     //this.$store.dispatch('getFeed');
     
   },
   filters: {
     since: function(datetime) {
       moment.locale('en', {
   relativeTime: {
     future: 'in %s',
     past: '%s',
     s:  'seconds',
     ss: '%ss',
     m:  '1m',
     mm: '%dm',
     h:  'h',
     hh: '%dh',
     d:  'd',
     dd: '%dd',
     M:  ' month',
     MM: '%dM',
     y:  'a year',
     yy: '%dY'
   }
       });
       return moment(datetime).fromNow();
     },
   },
   computed: {
   feed:function(){
   return this.$store.getters.searchfeed;
   }
    
   },
   methods: {

      search: function() {
      console.log(this.input);
       this.$store.dispatch('doSearch',this.input);
       this.input='';
       //this.feed=this.$store.getters.searchfeed;
       console.log(this.feed);
       
     },
   }
 }
</script>

<style scoped>
 .feed {
     width: 600px;
 }
 .feed
 {
    position:relative;
    left:20%;
 }
 .tweetForm {
     background: #eee;
     padding: 10px;
     margin-bottom: 10px;
 }
 .buttonWrap {
     width: 100%;
     display: flex;
 }
  body {
    background: url("../../static/b.png");
    }
 button {
     margin-left: auto;
     height: 2em;
     font-size: 0.9em;
 }
 textarea {
     width: 100%;
     height: 5em;
     padding: 2px;
     margin-bottom: 5px;
     resize: none;
     box-sizing: border-box;
 }
 .item {
     border-bottom: 1px solid #ddd;
     padding: 10px;
 }
 input
{
  border:none;
  border-bottom: 2px solid #FF5733;
}
 .recipe {
  display: block;
     margin-top: 0px;
     text-align:center;
     font-weight: bold;
     font-size:25px;
 }
 .idline {
     margin-bottom: 0px;
     text-align:center;
     color:gray;
 }
 .user {
     margin-right: 10px;
     text-align:center;
 }
 .handle {
     margin-right: 10px;
     color: #666;
 }
 .header
{

    width:100%;
    height:60px;
   // background-color:white;
}
form
{
    position:relative;
    left:30%;
    display:inline-block;
    line-height:52px;
    padding-right:0px;
}
button
{
    font-family: 'Raleway', sans-serif;
    background-color:#FF5733;
    color:white;
    border:none;
}

</style>



