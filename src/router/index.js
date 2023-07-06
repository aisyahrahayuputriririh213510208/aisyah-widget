import { createRouter, createWebHistory } from 'vue-router';
import depan from '../components/depan.vue';
import cuaca from '../components/cuaca.vue';
import lokasi from '../components/lokasi.vue';
import Stopwatch from '../components/Stopwatch.vue';
import Tebak from '../components/Tebak.vue';
import poto from '../components/poto.vue';

const routes = [
  { path: '/', component: depan },
  { path: '/cuaca', component: cuaca },
  { path: '/lokasi', component: lokasi },
  { path: '/stopwatch', component: Stopwatch },
  { path: '/tebak', component: Tebak },
  { path: '/poto', component: poto },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
