import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import WelcomPage from './components/pages/WelcomePage.vue';
import LoginPage from './components/pages/LoginPage.vue';
import RegisterPage from './components/pages/RegisterPage.vue';

const routes = [
  { path: '/', component: WelcomPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
