import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Works from '@/components/Works'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLightbox from "vue-lightbox2"

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueLightbox)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Profile',
      component: Profile
    },
    {
      path: '/Works',
      component: Works
    }
  ]
})
