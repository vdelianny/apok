import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChildNodesView from '../views/ChildNodesView.vue'
import CreateNodeView from '../views/CreateNodeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nodes/:id',
    name: 'nodes',
    component: ChildNodesView
  },
  {
    path: '/new/:id',
    name: 'new',
    component: CreateNodeView
  },
]

const router = new VueRouter({
  routes
})

export default router
