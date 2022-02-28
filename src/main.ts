import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import './tailwind.scss';
import App from './App.vue';
import { routes } from './routes';
import { store } from './store';

import Feather from './components/Feather.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const mainTitle = 'Colonia';

  if (to.meta.title) {
    document.title = `${to.meta.title} - ${mainTitle}`;
  } else {
    document.title = mainTitle;
  }

  next();
});

// register plugins
app.use(router);
app.use(store);

// register global components (reusable)
app.component('Feather', Feather);

app.mount('#app');
