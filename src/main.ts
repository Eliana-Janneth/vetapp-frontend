import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import WelcomPage from './components/pages/WelcomePage.vue';
import LoginPage from './components/pages/LoginPage.vue';
import RegisterPage from './components/pages/RegisterPage.vue';
import LoginFormVue from './components/elements/LoginForm.vue';
import RegisterForm from './components/elements/RegisterForm.vue';
import RegisterInput from './components/elements/RegisterInput.vue';

const routes = [
    { path: '/', component: WelcomPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/loginForm', component: LoginFormVue },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
