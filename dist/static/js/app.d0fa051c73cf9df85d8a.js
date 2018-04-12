webpackJsonp([1],{"2yF7":function(e,t){},"6XoB":function(e,t){},Eugz:function(e,t){},LBpQ:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",[s("ul",{attrs:{id:"menu"}},[e._m(0),e._v(" "),e.loggedIn?s("li",{staticClass:"right"},[s("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("Logout")])]):e._e(),e._v(" "),e.loggedIn?s("li",{staticClass:"right"},[s("router-link",{attrs:{to:{path:"/create"}}},[e._v("Create")])],1):e._e(),e._v(" "),e.loggedIn?s("li",{staticClass:"right"},[s("router-link",{attrs:{to:{path:"/search"}}},[e._v("Search")])],1):e._e(),e._v(" "),e.loggedIn?s("li",{staticClass:"right"},[s("router-link",{attrs:{to:{path:"/"}}},[e._v("Home")])],1):s("form",{staticClass:"right",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"Email Address"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("button",{staticClass:"primary",attrs:{type:"submit"}},[e._v("Login")])])]),e._v(" "),s("div",{staticClass:"flexWrapper errorPlace"},[e.loginError?s("p",{staticClass:"flexRight error"},[e._v(e._s(e.loginError))]):e._e()])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("h1",[this._v("Recipes")])])}]};var r={name:"App",components:{AppHeader:s("VU/8")({name:"AppHeader",data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},loggedIn:function(){return this.$store.getters.loggedIn},loginError:function(){return this.$store.getters.loginError}},methods:{login:function(){var e=this;this.$store.dispatch("login",{email:this.email,password:this.password}).then(function(t){e.email="",e.password=""})},logout:function(){this.$router.push({path:"/"}),this.$store.dispatch("logout")}}},n,!1,function(e){s("mkWu")},"data-v-f7a9a37e",null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("app-header"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")(r,o,!1,function(e){s("2yF7")},null,null).exports,c=s("/ocq"),d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column"},[s("h1",[e._v("Find and share recipes!")]),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[s("p",[e._v("Choose a user name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"narrow",attrs:{placeholder:"User Name"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),s("p",[e._v("Create an account.")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"wide",attrs:{placeholder:"First and Last Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"narrow",attrs:{placeholder:"Email Address"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"narrow",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("br"),e._v(" "),s("button",{staticClass:"alternate",attrs:{type:"submit"}},[e._v("Register")])]),e._v(" "),s("p",{staticClass:"error"},[e._v(e._s(e.registerError))]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer",staticStyle:{position:"fixed",right:"0",bottom:"0",left:"0",padding:"1rem","background-color":"white","text-align":"center",color:"gray"}},[t("a",{staticStyle:{color:"#666"},attrs:{href:"https://github.com/ry98/creative5"}},[this._v("My Github")])])}]};var u=s("VU/8")({name:"WelcomePage",data:function(){return{username:"",email:"",password:"",name:""}},computed:{registerError:function(){return this.$store.getters.registerError}},methods:{register:function(){this.$store.dispatch("register",{username:this.username,email:this.email,password:this.password,name:this.name})}}},d,!1,function(e){s("6XoB")},"data-v-79a488ac",null).exports,l=s("PJh5"),p=s.n(l),h={name:"UserFeed",data:function(){return{text:""}},created:function(){this.$store.dispatch("getFeed")},filters:{since:function(e){return p.a.locale("en",{relativeTime:{future:"in %s",past:"%s",s:"seconds",ss:"%ss",m:"1m",mm:"%dm",h:"h",hh:"%dh",d:"d",dd:"%dd",M:" month",MM:"%dM",y:"a year",yy:"%dY"}}),p()(e).fromNow()}},computed:{feed:function(){return console.log(this.$store.getters.feed),this.$store.getters.feed}},methods:{deleteItem:function(e){this.$store.dispatch("deleteRecipe",e)}}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"feed"},[s("h1",{staticStyle:{"text-align":"center"}},[e._v("Your Recipes")]),e._v(" "),e._l(e.feed,function(t){return s("div",{staticClass:"item"},[s("li",[s("router-link",{staticClass:"recipe",attrs:{to:{name:"recipeview",params:{recipe_id:t.id,title:t.recipe}}}},[e._v(e._s(t.recipe))]),e._v(" "),s("button",{staticClass:"delete",on:{click:function(s){e.deleteItem(t.id)}}},[e._v("X")])],1),e._v(" "),s("p",{staticClass:"idline"},[s("span",{staticClass:"user"},[e._v(e._s(t.name)+" created this recipe "+e._s(e._f("since")(t.created))+" ago")])])])}),e._v(" "),e._m(0)],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer",staticStyle:{position:"fixed",right:"0",bottom:"0",left:"0",padding:"1rem","background-color":"white","text-align":"center",color:"gray"}},[t("a",{staticStyle:{color:"#666"},attrs:{href:"https://github.com/ry98/creative5"}},[this._v("My Github")])])}]};var m={name:"HomePage",components:{WelcomePage:u,UserFeed:s("VU/8")(h,g,!1,function(e){s("c5AQ")},"data-v-5a7397c0",null).exports},computed:{loggedIn:function(){return this.$store.getters.loggedIn}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.loggedIn?t("div",[t("user-feed")],1):t("div",[t("welcome-page")],1)])},staticRenderFns:[]};var v=s("VU/8")(m,f,!1,function(e){s("LBpQ")},"data-v-07e622dc",null).exports,_=s("mtWM"),j=s.n(_),x={name:"Todo",data:function(){return{title_added:!0,ingredients:[],steps:[],recipes:[],title:"",titleText:"",ingredientText:"",stepText:"",done:!0,showid:0}},computed:{titledone:function(){return this.title_added}},created:function(){this.$store.getters.loggedIn||this.$router.push("/"),this.getIngredients(),this.getSteps(),this.getTitle(),this.getRecipes()},methods:{deleteItem:function(e){var t=this;j.a.delete("/api/recipe/"+e.id).then(function(e){return t.getRecipes(),!0}).catch(function(e){})},getIngredients:function(){var e=this;j.a.get("/api/ingredients").then(function(t){return e.ingredients=t.data,!0}).catch(function(e){})},getSteps:function(){var e=this;j.a.get("/api/steps").then(function(t){return e.steps=t.data,!0}).catch(function(e){})},getRecipes:function(){var e=this;j.a.get("/api/recipes").then(function(t){return e.recipes=t.data,!0}).catch(function(e){})},getTitle:function(){var e=this;j.a.get("/api/title").then(function(t){return e.title=t.data,!0}).catch(function(e){})},addStep:function(){this.steps.push(this.stepText),this.stepText=""},addIngredient:function(){this.ingredients.push(this.ingredientText),this.ingredientText=""},addTitle:function(){this.title=this.titleText,this.$store.dispatch("addRecipe",{recipe:this.title}).then(function(e){}),this.titleText="",this.title_added=!1},addRecipe:function(){var e,t=this;for(e=0;e<this.ingredients.length;e++)this.$store.dispatch("addIngredient",{ingredient:this.ingredients[e]}).then(function(e){t.ingredientText=""});for(e=0;e<this.steps.length;e++)this.$store.dispatch("addStep",{step:this.steps[e]}).then(function(e){t.stepText=""}),this.title_added=!0,console.log("here");this.title_added=!0,this.ingredients=[],this.steps=[],this.title="",console.log("here")},showRecipe:function(e){var t=this;j.a.put("/api/recipes/"+e.id,{show:!e.show}).then(function(e){return t.getRecipes(),!0}).catch(function(e){})},editRecipe:function(e){var t=this;j.a.put("/api/edit/"+e.id,{}).then(function(e){return t.getRecipes(),t.getIngredients(),t.getTitle(),t.getSteps(),!0}).catch(function(e){})}}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"todo"},[s("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"}}),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"column"},[e.done?s("div",[s("h1",[e._v("Create Recipe")]),e._v(" "),e.title_added?s("div",[s("p",{directives:[{name:"show",rawName:"v-show",value:""===e.ingredients.title,expression:"ingredients.title === ''"}]},[e._v("Add a title!")]),e._v(" "),s("p",[e._v(e._s(e.title))]),s("p"),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.addTitle(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.titleText,expression:"titleText"}],attrs:{type:"text"},domProps:{value:e.titleText},on:{input:function(t){t.target.composing||(e.titleText=t.target.value)}}}),e._v(" "),s("button",{attrs:{type:"submit"}},[e._v("Add Title")])])]):s("div",[s("ul",e._l(e.ingredients,function(t){return s("li",[e._v(e._s(t)+"\n    ")])})),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:0===e.ingredients.length,expression:"ingredients.length === 0"}]},[e._v("Add an ingredient!")]),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.addIngredient(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredientText,expression:"ingredientText"}],attrs:{type:"text"},domProps:{value:e.ingredientText},on:{input:function(t){t.target.composing||(e.ingredientText=t.target.value)}}}),e._v(" "),s("button",{attrs:{type:"submit"}},[e._v("Add Ingredient")])]),e._v(" "),s("ol",e._l(e.steps,function(t){return s("li",[e._v(e._s(t)+"\n    ")])})),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:0===e.steps.length,expression:"steps.length === 0"}]},[e._v("Add a step!")]),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.addStep(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.stepText,expression:"stepText"}],attrs:{type:"text"},domProps:{value:e.stepText},on:{input:function(t){t.target.composing||(e.stepText=t.target.value)}}}),e._v(" "),s("button",{attrs:{type:"submit"}},[e._v("Add Step")])]),e._v(" "),s("div",{staticClass:"bu"},[s("br"),e._v(" "),s("br"),e._v(" "),s("button",{staticClass:"bu",on:{click:e.addRecipe}},[e._v("Finish")])])])]):s("div",[s("h1",[e._v("Finished Recipe")]),e._v(" "),s("h2",[e._v(e._s(e.title))]),e._v(" "),s("p",[e._v("Ingredients:")]),e._v(" "),s("ul",e._l(e.ingredients,function(t){return s("li",[e._v(e._s(t.text)+"\n    ")])})),e._v(" "),s("p",[e._v("Steps:")]),e._v(" "),s("ol",e._l(e.steps,function(t){return s("li",[e._v(e._s(t.text)+"\n    ")])}))])])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer",staticStyle:{position:"fixed",right:"0",bottom:"0",left:"0",padding:"1rem","background-color":"white","text-align":"center",color:"gray"}},[t("a",{staticStyle:{color:"#666"},attrs:{href:"https://github.com/ry98/creative5"}},[this._v("My Github")])])}]};var y=s("VU/8")(x,w,!1,function(e){s("W2h+")},"data-v-5fdba4ad",null).exports,b={name:"searchFeed",data:function(){return{input:""}},created:function(){this.$store.getters.loggedIn||this.$router.push("/"),this.$store.dispatch("clearSearch")},filters:{since:function(e){return p.a.locale("en",{relativeTime:{future:"in %s",past:"%s",s:"seconds",ss:"%ss",m:"1m",mm:"%dm",h:"h",hh:"%dh",d:"d",dd:"%dd",M:" month",MM:"%dM",y:"a year",yy:"%dY"}}),p()(e).fromNow()}},computed:{feed:function(){return this.$store.getters.searchfeed}},methods:{search:function(){console.log(this.input),this.$store.dispatch("doSearch",this.input),this.input="",console.log(this.feed)}}},k={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"feed"},[s("div",{staticClass:"header"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}}),e._v(" "),s("button",{attrs:{type:"submit"}},[e._v("Search")])])]),e._v(" "),e._l(e.feed,function(t){return s("div",{staticClass:"item"},[s("router-link",{staticClass:"recipe",attrs:{to:{name:"recipeview",params:{recipe_id:t.id,title:t.recipe}}}},[e._v(e._s(t.recipe))]),e._v(" "),s("p",{staticClass:"idline"},[s("span",{staticClass:"user"},[e._v(e._s(t.name)+" created this recipe "+e._s(e._f("since")(t.created))+" ago")])])],1)}),e._v(" "),e._m(0)],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer",staticStyle:{position:"fixed",right:"0",bottom:"0",left:"0",padding:"1rem","background-color":"white","text-align":"center",color:"gray"}},[t("a",{staticStyle:{color:"#666"},attrs:{href:"https://github.com/ry98/creative5"}},[this._v("My Github")])])}]};var T=s("VU/8")(b,k,!1,function(e){s("qVYA")},"data-v-e622a0c6",null).exports,E=s("bOdI"),R=s.n(E),S={name:"Todo",data:function(){return R()({title_added:!0,recipes:[],title:"",titleText:"",ingredientText:"",stepText:"",done:!0,showid:0,recipe_id:0},"title","")},computed:{titledone:function(){return this.title_added},ingredients:function(){return this.$store.getters.ingredients},steps:function(){return this.$store.getters.steps}},created:function(){this.$store.getters.loggedIn||this.$router.push("/"),this.recipe_id=this.$route.params.recipe_id,this.title=this.$route.params.title,console.log(this.recipe_id),this.getIngredients(),this.getSteps(),this.getTitle()},methods:{deleteItem:function(e){var t=this;j.a.delete("/api/recipe/"+e.id).then(function(e){return t.getRecipes(),!0}).catch(function(e){})},getIngredients:function(){this.$store.dispatch("getIngredients",this.recipe_id)},getSteps:function(){this.$store.dispatch("getSteps",this.recipe_id)},getRecipes:function(){var e=this;j.a.get("/api/recipes").then(function(t){return e.recipes=t.data,!0}).catch(function(e){})},getTitle:function(){var e=this;j.a.get("/api/title").then(function(t){return e.title=t.data,!0}).catch(function(e){})},addStep:function(){this.steps.push(this.stepText),this.stepText=""},addIngredient:function(){this.ingredients.push(this.ingredientText),this.ingredientText=""},addTitle:function(){this.title=this.titleText,this.titleText="",this.title_added=!1},addRecipe:function(){var e,t=this;for(this.$store.dispatch("addRecipe",{recipe:this.title}).then(function(e){t.ingredientText=""}),e=0;e<this.ingredients.length;e++)this.$store.dispatch("addIngredient",{ingredient:this.ingredients[e]}).then(function(e){t.ingredientText=""});for(e=0;e<this.steps.length;e++)this.$store.dispatch("addStep",{step:this.steps[e]}).then(function(e){t.stepText=""}),this.title_added=!0,console.log("here");this.title_added=!0,this.ingredients=[],this.steps=[],this.title="",console.log("here")},showRecipe:function(e){var t=this;j.a.put("/api/recipes/"+e.id,{show:!e.show}).then(function(e){return t.getRecipes(),!0}).catch(function(e){})},editRecipe:function(e){var t=this;j.a.put("/api/edit/"+e.id,{}).then(function(e){return t.getRecipes(),t.getIngredients(),t.getTitle(),t.getSteps(),!0}).catch(function(e){})}}},C={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"todo"},[s("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"}}),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"column"},[s("h1",[e._v(e._s(e.title))]),e._v(" "),s("p",[e._v("Ingredients:")]),e._v(" "),s("ul",e._l(e.ingredients,function(t){return s("li",[e._v(e._s(t.ingredient)+"\n    ")])})),e._v(" "),s("p",[e._v("Steps:")]),e._v(" "),s("ol",e._l(e.steps,function(t){return s("li",[e._v(e._s(t.step)+"\n    ")])}))])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer",staticStyle:{position:"fixed",right:"0",bottom:"0",left:"0",padding:"1rem","background-color":"white","text-align":"center",color:"gray"}},[t("a",{staticStyle:{color:"#666"},attrs:{href:"https://github.com/ry98/creative5"}},[this._v("My Github")])])}]};var F=s("VU/8")(S,C,!1,function(e){s("Eugz")},"data-v-62a1b9f2",null).exports;i.a.use(c.a);var I=new c.a({routes:[{path:"/",name:"HomePage",component:v},{path:"/create",name:"create",component:y},{path:"/search",name:"search",component:T},{path:"/recipeview/:recipe_id",name:"recipeview",component:F}]}),z=s("NYxO");i.a.use(z.a);var $=new z.a.Store({state:{user:{},recipe_id:1,token:"",loginError:"",registerError:"",feed:[],searchfeed:[],steps:[],ingredients:[],recipe_title:""},getters:{user:function(e){return e.user},loginError:function(e){return e.loginError},registerError:function(e){return e.registerError},feed:function(e){return e.feed},searchfeed:function(e){return e.searchfeed},recipe_id:function(e){return e.recipe_id},ingredients:function(e){return e.ingredients},steps:function(e){return e.steps},recipe_title:function(e){return e.recipe_title},getToken:function(e){return e.token},getAuthHeader:function(e){return{headers:{Authorization:e.token}}},loggedIn:function(e){return""!==e.token}},mutations:{setUser:function(e,t){e.user=t},setLoginError:function(e,t){e.loginError=t},setRegisterError:function(e,t){e.registerError=t},setFeed:function(e,t){e.feed=t},setRecipe:function(e,t){e.recipe_id=t},setSearchFeed:function(e,t){e.searchfeed=t},setIngredients:function(e,t){e.ingredients=t},setSteps:function(e,t){e.steps=t},setRecipeTitle:function(e,t){e.recipe_title=t},setToken:function(e,t){e.token=t,""===t?localStorage.removeItem("token"):localStorage.setItem("token",t)}},actions:{doSearch:function(e,t){j.a.get("/api/recipes/search?keywords="+t).then(function(t){e.commit("setSearchFeed",t.data.recipes),console.log(t.data.recipes)}).catch(function(e){console.log("doSearch failed:",e)})},clearSearch:function(e){e.commit("setSearchFeed",[])},initialize:function(e){var t=localStorage.getItem("token");t&&j.a.get("/api/me",e.getters.getAuthHeader).then(function(s){e.commit("setToken",t),e.commit("setUser",s.data.user)}).catch(function(t){localStorage.removeItem("token"),e.commit("setUser",{}),e.commit("setToken","")})},addRecipe:function(e,t){j.a.post("/api/users/"+e.state.user.id+"/recipes",t,e.getters.getAuthHeader).then(function(t){return console.log(t.data.recipe.id),console.log(t),e.commit("setRecipe",t.data.recipe.id),e.dispatch("getFeed")}).catch(function(e){console.log("addRecipe failed:",e)})},deleteRecipe:function(e,t){console.log("/api/recipe/"+t+"/"+e.state.user.id),j.a.delete("/api/"+e.state.user.id+"/recipe/"+t,e.getters.getAuthHeader).then(function(t){return e.dispatch("getFeed")}).catch(function(e){console.log("deleteRecipe failed:",e)})},addIngredient:function(e,t){console.log("adding ingredient"),j.a.post("/api/"+e.state.user.id+"/recipes/"+e.state.recipe_id+"/ingredients",t,e.getters.getAuthHeader).then(function(t){return e.dispatch("getFeed")}).catch(function(e){console.log("addIngredient failed:",e)})},addStep:function(e,t){j.a.post("/api/"+e.state.user.id+"/recipes/"+e.state.recipe_id+"/steps",t,e.getters.getAuthHeader).then(function(t){return e.dispatch("getFeed")}).catch(function(e){console.log("addStep failed:",e)})},getIngredients:function(e,t){j.a.get("/api/recipes/"+t+"/ingredients").then(function(t){e.commit("setIngredients",t.data.ingredients)}).catch(function(e){console.log("getFeed failed:",e)})},getSteps:function(e,t){j.a.get("/api/recipes/"+t+"/steps").then(function(t){console.log(t.data),e.commit("setSteps",t.data.steps)}).catch(function(e){console.log("getFeed failed:",e)})},getFeed:function(e){j.a.get("/api/users/"+e.state.user.id+"/recipes").then(function(t){console.log(t.data),e.commit("setFeed",t.data.recipes)}).catch(function(e){console.log("getFeed failed:",e)})},logout:function(e,t){e.commit("setUser",{}),e.commit("setToken","")},login:function(e,t){j.a.post("/api/login",t).then(function(t){e.commit("setUser",t.data.user),e.commit("setToken",t.data.token),console.log(t.data.token),e.commit("setRegisterError",""),e.commit("setLoginError","")}).catch(function(t){if(e.commit("setRegisterError",""),t.response)return 403!==t.response.status&&400!==t.response.status||e.commit("setLoginError","Invalid login."),void e.commit("setRegisterError","");e.commit("setLoginError","Sorry, your request failed. We will look into it.")})},register:function(e,t){j.a.post("/api/users",t).then(function(t){e.commit("setUser",t.data.user),e.commit("setToken",t.data.token),console.log(t.data.token),e.commit("setRegisterError",""),e.commit("setLoginError","")}).catch(function(t){e.commit("setLoginError",""),e.commit("setUser",{}),e.commit("setToken",""),t.response?403===t.response.status?e.commit("setRegisterError","That email address already has an account."):409===t.response.status&&e.commit("setRegisterError","That user name is already taken."):e.commit("setRegisterError","Sorry, your request failed. We will look into it.")})}}});i.a.config.productionTip=!1,new i.a({el:"#app",router:I,store:$,render:function(e){return e(a)},beforeCreate:function(){this.$store.dispatch("initialize")}})},"W2h+":function(e,t){},c5AQ:function(e,t){},mkWu:function(e,t){},qVYA:function(e,t){},uslO:function(e,t,s){var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(e){return s(r(e))}function r(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.d0fa051c73cf9df85d8a.js.map