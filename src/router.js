import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import JinZW from './views/JinZW.vue';
import WenSY from './views/WenSY.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/jinzw',
      name: 'jinzw',
      component: JinZW,
    },
    {
      path: '/wensy',
      name: 'wensy',
      component: WenSY,
    },
  ],
});
