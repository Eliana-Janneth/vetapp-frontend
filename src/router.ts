import { createRouter, createWebHistory } from 'vue-router';
import { WelcomePage, RegisterPage, MenuPage, AnimalRegisterPage, LoginPage } from '@pages';

// TODO: Nombrar rutas
const routes = [
    { path: '/', component: WelcomePage },
    { name: 'login', path: '/iniciar-sesion', component: LoginPage },
    { name: 'register', path: '/registrarse', component: RegisterPage },
    { name: 'menu', path: '/menu-veterinario', component: MenuPage },
    { name: 'animalRegister', path: '/registrar-animal', component: AnimalRegisterPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
