import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    recipe_id:1,
    token:'',
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
    loginError: state => state.loginError,
    registerError: state => state.registerError,
    feed: state => state.feed,
    searchfeed: state => state.searchfeed,
    recipe_id: state=>state.recipe_id,
    ingredients: state=>state.ingredients,
    steps:state=>state.steps,
    recipe_title:state=>state.recipe_title,
      getToken: state => state.token,
    getAuthHeader: state => {
      return { headers: {'Authorization': state.token}};
     // return { headers: {'Authorization': localStorage.getItem('token')}};
    },
    loggedIn: state => {
      if (state.token === '')
       return false;
      return true;
    },
  },
  mutations: {
    setUser (state, user) {
      state.user = user;
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
    },

    setToken (state, token) {
      state.token = token;
      if (token === '')
 localStorage.removeItem('token');
      else
 localStorage.setItem('token', token)
    },
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
   clearSearch(context)
   {
    context.commit('setSearchFeed',[]);
   },
       // Initialize //
    initialize(context) {
      let token = localStorage.getItem('token');
      if(token) {
       // see if we can use the token to get my user account
       axios.get("/api/me",context.getters.getAuthHeader).then(response => {
         context.commit('setToken',token);
         context.commit('setUser',response.data.user);
       }).catch(err => {
         // remove token and user from state
         localStorage.removeItem('token');
         context.commit('setUser',{}); 
         context.commit('setToken','');
       });
      }
    },
  	 // Tweeting //
   addRecipe(context,recipe) {
     axios.post("/api/users/" + context.state.user.id + "/recipes",recipe,context.getters.getAuthHeader).then(response => {
	  console.log(response.data.recipe.id)
    console.log(response);
    context.commit('setRecipe', response.data.recipe.id);
  return context.dispatch('getFeed');

      }).catch(err => {
	console.log("addRecipe failed:",err);
      });
    },
    deleteRecipe(context,recipe_id) {
      console.log(("/api/recipe/" +recipe_id+'/'+context.state.user.id));
      axios.delete("/api/"+context.state.user.id+"/recipe/" +recipe_id,context.getters.getAuthHeader).then(response => {

  return context.dispatch('getFeed');

      }).catch(err => {
  console.log("deleteRecipe failed:",err);
      });
    },
    addIngredient(context,ingredient) {
      console.log("adding ingredient")
      axios.post("/api/"+context.state.user.id+"/recipes/" + context.state.recipe_id + "/ingredients",ingredient,context.getters.getAuthHeader).then(response => {
  return context.dispatch('getFeed');
      }).catch(err => {
  console.log("addIngredient failed:",err);
      });
    },
    addStep(context,step) {
      axios.post("/api/"+context.state.user.id+"/recipes/" + context.state.recipe_id + "/steps",step,context.getters.getAuthHeader).then(response => {
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
         context.commit('setToken','');
    },

  	    login(context,user) {
      axios.post("/api/login",user).then(response => {
	context.commit('setUser', response.data.user);
	 context.commit('setToken',response.data.token);
   console.log(response.data.token);
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
	 context.commit('setToken',response.data.token);
   console.log(response.data.token);
	context.commit('setRegisterError',"");
	context.commit('setLoginError',"");
      }).catch(error => {
	context.commit('setLoginError',"");
	       context.commit('setUser',{});   
       context.commit('setToken','');
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