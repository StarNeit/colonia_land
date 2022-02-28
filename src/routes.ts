import { RouteRecordRaw } from 'vue-router';

import Landing from '@/views/Landing.vue';
import Trucks from '@/views/Trucks.vue';
import NotFound from './views/NotFound.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Landing,
    name: 'Landing',
    meta: {
      title: 'Landing',
    },
  },
  {
    path: '/trucks',
    component: Trucks,
    name: 'Trucks',
    meta: {
      title: 'Trucks',
    },
  },
  { path: '/:path(.*)', component: NotFound },
];
