import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import create from '@/components/create'
import search from '@/components/search'
import recipeview from '@/components/recipeview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage

    },
    {
      path: '/create',
      name: 'create',
      component: create

    },
    {
      path: '/search',
      name: 'search',
      component: search

    },
    {
      path: '/recipeview/:recipe_id',
      name: 'recipeview',
      component: recipeview

    },
  ]
})
