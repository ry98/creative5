<template>
  <div class="todo">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"> 
  <div class="row">

  <div class="column">
    <div v-if="done">
    <h1>Create Recipe</h1>
    <div v-if="title_added">
    <p v-show="ingredients.title === ''">Add a title!</p>
    <p>{{title}}<p/>
    <form v-on:submit.prevent="addTitle">
      <input type="text" v-model="titleText">
      <button type="submit">Add Title</button>
    </form>
    </div>
    <div v-else>
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
     titledone: function(){
   return this.title_added;
   },
     
     
   },
    created: function() {
     if(!this.$store.getters.loggedIn)
      {
        this.$router.push('/');
      }
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
      this.steps.push(this.stepText);
      this.stepText='';
       
    },
    addIngredient: function() {
     this.ingredients.push(this.ingredientText);
     this.ingredientText='';
    },
    addTitle: function() {
    this.title=this.titleText;
    this.$store.dispatch('addRecipe',{
         recipe: this.title,
       }).then(ingredient => {
        
       });

     
     this.titleText='';
     this.title_added=false;
    },
    addRecipe: function() {
    
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
      list-style-position:inside;
     
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


