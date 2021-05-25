import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/Account.vue'
import Project from '../views/Project.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/account',
    name: 'About',
    component: About,
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
    beforeEnter: (to, from, next) => {
      if(from.name === 'Home'){
        next();
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
