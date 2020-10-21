import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Home,
    },
    {
      path: '/home',
      name: 'mainPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "main" */ './views/MainPage.vue'),
    },
    {
      path: '/success',
      name: 'success',
      component: () => import(/* webpackChunkName: "main" */ './views/Success.vue'),
    },
  ],
});
