// Lib imports
import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
// Routes
import { publicRoute, privateRoute } from './paths'
const routes = publicRoute.concat(privateRoute)

Vue.use(Router)

// Create a new router
const router = new Router({
  mode: 'hash',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

Vue.use(Meta)

export default router
