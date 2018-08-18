import Vue from 'vue';
import Router from 'vue-router';
import Archive from './views/Archive.vue';
import Tag from './views/Tag.vue';
import About from './views/About.vue';
import Link from './views/Link.vue';
import Search from './views/Search.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/jinzw',
      name: 'jinzw',
      component: Home,
    },
    {
      path: '/wensy',
      name: 'wensy',
      component: Home,
    },
    {
      path: '/jinzw_archive',
      name: 'jinzw_archive',
      component: Archive,
    },
    {
      path: '/wensy_archive',
      name: 'wensy_archive',
      component: Archive,
    },
    {
      path: '/jinzw_tag',
      name: 'jinzw_tag',
      component: Tag,
    },
    {
      path: '/wensy_tag',
      name: 'wensy_tag',
      component: Tag,
    },
    {
      path: '/jinzw_about',
      name: 'jinzw_about',
      component: About,
    },
    {
      path: '/wensy_about',
      name: 'wensy_about',
      component: About,
    },
    {
      path: '/jinzw_link',
      name: 'jinzw_link',
      component: Link,
    },
    {
      path: '/wensy_link',
      name: 'wensy_link',
      component: Link,
    },
    {
      path: '/jinzw_search',
      name: 'jinzw_search',
      component: Search,
    },
    {
      path: '/wensy_search',
      name: 'wensy_search',
      component: Search,
    },
  ],
});
