import { createRouter, createWebHistory } from 'vue-router';
import { WelcomePage, RegisterPage, MenuPage, AnimalRegisterPage, LoginPage, RegisterPageExample } from '@pages';

// TODO: Nombrar rutas
const routes = [
    { name: 'welcome', path: '/', component: WelcomePage },
    { name: 'login', path: '/iniciar-sesion', component: LoginPage },
    { name: 'register', path: '/registrarse', component: RegisterPage },
    { name: 'register-example', path: '/registrarse-2', component: RegisterPageExample },
    { name: 'menu', path: '/menu-veterinario', component: MenuPage },
    { name: 'animalRegister', path: '/registrar-animal', component: AnimalRegisterPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
