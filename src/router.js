import Vue from 'vue';
import VueRouter from 'vue-router';

import OilPainting from './components/OilPainting';
import ChinesePainting from './components/ChinesePainting';
import Comic from './components/Comic';

import AuthorDetail from './components/AuthorDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/artwork/oil-painting',
    name: 'OilPainting',
    component: OilPainting,
  },
  {
    path: '/artwork/chinese-painting',
    name: 'ChinesePainting',
    component: ChinesePainting,
  },
  {
    path: '/artwork/comic',
    name: 'Comic',
    component: Comic,
  },
  {
    path: '/author/:id',
    name: 'AuthorDetail',
    component: AuthorDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
