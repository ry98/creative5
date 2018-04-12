<template>
  <div class="todo">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"> 
  <div class="row">

  <div class="column">

    <h1>{{title}}</h1>
    <p>Ingredients:</p>
    <ul>
      <li v-for="item in ingredients">{{item.ingredient}}
      </li>
    </ul>
    <p>Steps:</p>
     <ol>
      <li v-for="item in steps">{{item.step}}
      </li>
    </ol>
    </div>
    </div>
   <div class="footer" style="position: fixed; right: 0;bottom: 0;left: 0; padding: 1rem;background-color: white;
  text-align: center; color:gray;"><a href="https://github.com/ry98/creative5" style="color: #666;">My Github</a></div>
  </div>

</template>

<script>
 import axios from 'axios';
 export default {
   name: 'Todo',
   data () {
      return {
      title_added: true,
  
      recipes:[],
      title:'',
        titleText:'',
        ingredientText:'',
        stepText:'',
        done:true,
        showid:0,
        recipe_id:0,
        title:''
     
     }
   },
   computed: {
     titledone: function(){
   return this.title_added;
   },
   ingredients: function(){
    return this.$store.getters.ingredients;
   },
  steps: function(){
    return this.$store.getters.steps;
    }
     
   },
    created: function() {
     if(!this.$store.getters.loggedIn)
      {
        this.$router.push('/');
      }
    this.recipe_id=this.$route.params.recipe_id;
    this.title=this.$route.params.title;
    console.log(this.recipe_id)
    this.getIngredients();
    this.getSteps();
    this.getTitle();
  },
   methods: {
   deleteItem: function(recipe) {
       axios.delete("/api/recipe/" + recipe.id).then(response => {
   this.getRecipes();
   return true;
       }).catch(err => {
       });
     },
         getIngredients: function() {
      this.$store.dispatch('getIngredients', this.recipe_id);
     
      },
      getSteps: function() {
      this.$store.dispatch('getSteps', this.recipe_id);
      
      },
      getRecipes: function() {
      axios.get("/api/recipes").then(response => {

      this.recipes = response.data;

      return true;
      }).catch(err => {
      });
      },
      getTitle: function() {
      axios.get("/api/title").then(response => {
 
      this.title = response.data;
      return true;
      }).catch(err => {
      });
      },
      addStep: function() {
      this.steps.push(this.stepText);
      this.stepText='';
       
    },
    addIngredient: function() {
     this.ingredients.push(this.ingredientText);
     this.ingredientText='';
    },
    addTitle: function() {

     this.title=this.titleText;
     this.titleText='';
     this.title_added=false;
    },
    addRecipe: function() {
    this.$store.dispatch('addRecipe',{
         recipe: this.title,
       }).then(ingredient => {
        this.ingredientText = "";
       });
       var i;
      for(i=0;i<this.ingredients.length;i++)
      {
        this.$store.dispatch('addIngredient',{
         ingredient: this.ingredients[i],
       }).then(ingredient => {
        this.ingredientText = "";
       });
      }
      for(i=0;i<this.steps.length;i++)
      {
        this.$store.dispatch('addStep',{
         step: this.steps[i],
       }).then(step => {
   this.stepText = "";
       });
       this.title_added=true;
      console.log("here");
      }
      this.title_added=true;
      this.ingredients=[];
      this.steps=[];
      this.title='';
      console.log("here");
    },
    showRecipe: function(item) {
      axios.put("/api/recipes/" + item.id, {
  show: !item.show,
      }).then(response => {
      this.getRecipes();
  return true;
      }).catch(err => {
      });
    },


    editRecipe: function(item) {
      axios.put("/api/edit/" + item.id, {
      }).then(response => {
      this.getRecipes();
      this.getIngredients();
      this.getTitle();
      this.getSteps();
  return true;
      }).catch(err => {
      });
    },

     
   }
 }
</script>

<style scoped>
.delete {
     //display: none;
     //margin-left: auto;
     //margin-right:25%;
 }


.row {
    display: flex;
}

.column {
    flex: 50%;
}
 ul,ol{
     
     text-align: center;
     //margin-left:25%;
     //margin-right:25%;

 }
 form,p
 {
 text-align:center;
 }
 .recipes
 {
 text-align:center;
 list-style-type:none;
 }

 .margin
 {
 text-align: center;
     margin-left:15%;
 }
 button
{
    font-family: 'Raleway', sans-serif;
    background-color:#FF5733;
    color:white;
    border:none;
        padding:5px;
}
input
{
  border:none;
  border-bottom: 2px solid #FF5733;
}
 .bu
 {
  text-align: center;
     margin-left:25%;
     margin-right:25%;
 }
 h1, h2, button
 {
 text-align: center;
 }
 h2
 {
 text-align: center;
 }

 .todo
 {
 background: url("../../static/b.png");
 min-height: 800px;
 text-align: center;
 
 }

 

 

 label {
     width: 400px;
 }

 .completed {
     text-decoration: line-through;
 }

 /* Form */

 input[type=checkbox] {
     transform: scale(1.5);
     margin-right: 10px;
 }

 input[type=text] {
     font-size: 1em;
 }


 .controls {
     margin-top: 20px;
 }
</style>


