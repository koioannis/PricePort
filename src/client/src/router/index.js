import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import ProductViewer from '@/views/ProductViewer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:productId',
    name: 'Product',
    component: ProductViewer,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
