<template>
  <div class="todo">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"> 
  <div class="row">
  <div class="column">
  <h1>My Recipes</h1>
  <ul class="recipes">
      <li v-for="item in recipes">
      <h2>{{item.title}}</h2>
      <button v-on:click="deleteItem(item)" class="delete">X</button>
      <button v-on:click="showRecipe(item)" class="delete">Show</button>
      <button v-on:click="editRecipe(item)" class="delete">Add Items</button>
      <div v-if="item.show">
      <p  class="margin">Ingredients:</p>
    <ul class="margin">
      <li v-for="ing in item.ingredients">{{ing}}
      </li>
    </ul>
    <p class="margin">Steps:</p>
     <ol class="margin">
      <li v-for="step in item.steps">{{step}}
      </li>
    </ol>
    </div>
      </li>
    </ul>
  </div>
  <div class="column">
    <div v-if="done">
    <h1>Create Recipe</h1>
    <p v-show="ingredients.title === ''">Add a title!</p>
    <p>{{title}}<p/>
    <form v-on:submit.prevent="addTitle">
      <input type="text" v-model="titleText">
      <button type="submit">Add Title</button>
    </form>
    <ul>
      <li v-for="item in ingredients">{{item}}
      </li>
    </ul>
    <p v-show="ingredients.length === 0">Add an ingredient!</p>
    <form v-on:submit.prevent="addIngredient">
      <input type="text" v-model="ingredientText">
      <button type="submit">Add Ingredient</button>
    </form>
    <ol>
      <li v-for="item in steps">{{item}}
      </li>
    </ol>
    <p v-show="steps.length === 0">Add a step!</p>
    <form v-on:submit.prevent="addStep">
      <input type="text" v-model="stepText">
      <button type="submit">Add Step</button>
    </form>
    <div class="bu">
    <br>
    <br>
     <button class="bu" v-on:click="addRecipe">Finish</button>
     </div>
    </div>
    <div v-else>
    <h1>Finished Recipe</h1>
    <h2>{{title}}</h2>
    <p>Ingredients:</p>
    <ul>
      <li v-for="item in ingredients">{{item.text}}
      </li>
    </ul>
    <p>Steps:</p>
     <ol>
      <li v-for="item in steps">{{item.text}}
      </li>
    </ol>
    </div>
    </div>
    </div>
   <div class="footer" style="position: fixed; right: 0;bottom: 0;left: 0; padding: 1rem;background-color: white;
  text-align: center; color:gray;"><a href="https://github.com/ry98/creative3" style="color: #666;">My Github</a></div>
  </div>

</template>

<script>
 import axios from 'axios';
 export default {
   name: 'Todo',
   data () {
      return {
       ingredients: [],
      steps: [],
      recipes:[],
      title:'',
        titleText:'',
        ingredientText:'',
        stepText:'',
        done:true,
        showid:0,
     
     }
   },
   computed: {
     
   },
    created: function() {
    this.getIngredients();
    this.getSteps();
    this.getTitle();
    this.getRecipes();
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
      axios.get("/api/ingredients").then(response => {
      this.ingredients = response.data;
      return true;
      }).catch(err => {
      });
      },
      getSteps: function() {
      axios.get("/api/steps").then(response => {

      this.steps = response.data;
      return true;
      }).catch(err => {
      });
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
      console.log("here")
      this.$store.dispatch('addStep',{
         step: this.stepText,
       }).then(step => {
   this.stepText = "";
       });
       
    },
    addIngredient: function() {
     this.$store.dispatch('addIngredient',{
         ingredient: this.ingredientText,
       }).then(ingredient => {
   this.ingredientText = "";
       });

    },
    addTitle: function() {

      axios.post("/api/title", {
      title: this.titleText,
      }).then(response => {
   

      this.getTitle();
      this.titleText='';
  
      return true;
      }).catch(err => {


      });
    },
    addRecipe: function() {
      axios.post("/api/recipe", {
       text: '',
      }).then(response => {
      this.ingredients= [],
      this.steps= [],
      this.recipes=[],
      this.title='',
      this.titleText='',
      this.ingredientText='',
      this.stepText='',
      this.getRecipes();
      return true;
      }).catch(err => {
      });
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
     
     text-align: left;
     //margin-left:25%;
     //margin-right:25%;

 }
 form,p
 {
 text-align:center;
 }
 .recipes
 {
 text-align:left;
 list-style-type:none;
 }

 .margin
 {
 text-align: left;
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
  text-align: left;
     margin-left:25%;
     margin-right:25%;
 }
 h1, h2, button
 {
 text-align: center;
 }
 h2
 
 {
 text-align: left;
 }

 .todo
 {
 background: url("../../static/b.png");
 min-height: 800px;
 text-align: left;
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


