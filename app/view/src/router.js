import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/index.vue';

const routes = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
});

module.exports = routes;

module.exports.default = module.exports;
