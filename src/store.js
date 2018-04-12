import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    recipe_id:1,
    loggedIn: false,
    loginError: '',
    registerError: '',
    feed: [],
    searchfeed:[],
    steps:[],
    ingredients:[],
    recipe_title:'',

  },
 getters: {
    user: state => state.user,
    loggedIn: state => state.loggedIn,
    loginError: state => state.loginError,
    registerError: state => state.registerError,
    feed: state => state.feed,
    searchfeed: state => state.searchfeed,
    recipe_id: state=>state.recipe_id,
    ingredients: state=>state.ingredients,
    steps:state=>state.steps,
    recipe_title:state=>state.recipe_title,
  },
  mutations: {
    setUser (state, user) {
      state.user = user;
    },
    setLogin (state, status) {
      state.loggedIn = status;
    },
    setLoginError (state, message) {
      state.loginError = message;
    },
    setRegisterError (state, message) {
      state.registerError = message;
    },
    setFeed (state, feed) {
      state.feed = feed;
    },
    setRecipe (state, recipe) {
      state.recipe_id = recipe;
    },
    setSearchFeed(state ,search){
      state.searchfeed=search;
    },
    setIngredients(state,ing){
      state.ingredients=ing;
    },
    setSteps(state,steps){
      state.steps=steps;
    },
    setRecipeTitle(state,title)
    {
      state.recipe_title=title;
    }
  },
  actions: {
    doSearch(context,keywords) {
     axios.get("/api/recipes/search?keywords=" + keywords).then(response => {
      context.commit('setSearchFeed',response.data.recipes);
      console.log(response.data.recipes)

     }).catch(err => {
      console.log("doSearch failed:",err);
     });
   },
  	 // Tweeting //
   addRecipe(context,recipe) {
      axios.post("/api/users/" + context.state.user.id + "/recipes",recipe).then(response => {
	  console.log(response.data.recipe.id)
    console.log(response);
    context.commit('setRecipe', response.data.recipe.id);
  return context.dispatch('getFeed');

      }).catch(err => {
	console.log("addRecipe failed:",err);
      });
    },
    deleteRecipe(context,recipe_id) {
      axios.delete("/api/recipe/" +recipe_id).then(response => {
  return context.dispatch('getFeed');

      }).catch(err => {
  console.log("deleteRecipe failed:",err);
      });
    },
    addIngredient(context,ingredient) {
      console.log("adding ingredient")
      axios.post("/api/recipes/" + context.state.recipe_id + "/ingredients",ingredient).then(response => {
  return context.dispatch('getFeed');
      }).catch(err => {
  console.log("addIngredient failed:",err);
      });
    },
    addStep(context,step) {
      axios.post("/api/recipes/" + context.state.recipe_id + "/steps",step).then(response => {
  return context.dispatch('getFeed');
      }).catch(err => {
  console.log("addStep failed:",err);
      });
    },
    getIngredients(context,id) {
      axios.get("/api/recipes/" + id + "/ingredients").then(response => {
        
  context.commit('setIngredients',response.data.ingredients);
      }).catch(err => {
  console.log("getFeed failed:",err);
      });
    },
    getSteps(context,id) {
      axios.get("/api/recipes/" + id + "/steps").then(response => {
        console.log(response.data)
  context.commit('setSteps',response.data.steps);
      }).catch(err => {
  console.log("getFeed failed:",err);
      });
    },
    getFeed(context) {
      axios.get("/api/users/" + context.state.user.id + "/recipes").then(response => {
      	console.log(response.data)
	context.commit('setFeed',response.data.recipes);
  // context.commit('setRecipe', response.data.recipes[0].id);
      }).catch(err => {
	console.log("getFeed failed:",err);
      });
    },
  	 logout(context,user) {
      //this.$router.push({ path: '/'})
      context.commit('setUser', {});
      context.commit('setLogin',false);
    },

  	    login(context,user) {
      axios.post("/api/login",user).then(response => {
	context.commit('setUser', response.data.user);
	context.commit('setLogin',true);
	context.commit('setRegisterError',"");
	context.commit('setLoginError',"");
      }).catch(error => {
	context.commit('setRegisterError',"");
	if (error.response) {
	  if (error.response.status === 403 || error.response.status === 400)
	    context.commit('setLoginError',"Invalid login.");
	  context.commit('setRegisterError',"");
	  return;
	}
	context.commit('setLoginError',"Sorry, your request failed. We will look into it.");
      });
    },

  	 // Registration, Login //
    register(context,user) {

      axios.post("/api/users",user).then(response => {
	context.commit('setUser', response.data.user);
	context.commit('setLogin',true);
	context.commit('setRegisterError',"");
	context.commit('setLoginError',"");
      }).catch(error => {
	context.commit('setLoginError',"");
	context.commit('setLogin',false);
	if (error.response) {
	  if (error.response.status === 403)
	    context.commit('setRegisterError',"That email address already has an account.");
	  else if (error.response.status === 409)
	    context.commit('setRegisterError',"That user name is already taken.");
	  return;
	}
	context.commit('setRegisterError',"Sorry, your request failed. We will look into it.");
      });
    },
  }
});