<template>
  <div class="feed">
    <h1 style="text-align:center">Your Recipes</h1>
    <div v-for="item in feed" class="item">
    <li><router-link :to="{name:'recipeview',params:{recipe_id: item.id, title:item.recipe}}" class="recipe">{{item.recipe}}</router-link>
    <button v-on:click="deleteItem(item.id)" class="delete">X</button></li>
      <p class="idline"><span class="user">{{item.name}} created this recipe {{item.created | since}} ago</span></p>
    </div>
    <div class="footer" style="position: fixed; right: 0;bottom: 0;left: 0; padding: 1rem;background-color: white;
  text-align: center; color:gray;"><a href="https://github.com/ry98/creative5" style="color: #666;">My Github</a></div>
  </div>
</template>

<script>
 import moment from 'moment';
 export default {
   name: 'UserFeed',
   data () {
     return {
       text: '',
     }
   },
   created: function() {
     this.$store.dispatch('getFeed');
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
     feed: function() {
        console.log(this.$store.getters.feed);
       return this.$store.getters.feed;
     },
   },
   methods: {
   deleteItem:function(id){
   this.$store.dispatch('deleteRecipe',id)
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
 .recipe{
 text-align:center;
 }
 router-link{
  text-align:center;

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
    display:inline;
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
 li {
    width: 500px;
    min-height: 30px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1em;
    display: flex;
    align-items: center;
}

.delete {
    display: block;
    margin-left: auto;
}
 .handle {
     margin-right: 10px;
     color: #666;
 }

</style>

