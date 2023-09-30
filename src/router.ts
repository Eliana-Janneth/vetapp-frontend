import { createRouter, createWebHistory } from 'vue-router';
import { WelcomePage, RegisterPage, MenuVetPage, MenuFarmerPage, LoginPage } from '@pages';

// TODO: Nombrar rutas
const routes = [
    { name: 'welcome', path: '/', component: WelcomePage },
    { name: 'login', path: '/iniciar-sesion', component: LoginPage },
    { name: 'register', path: '/registrarse', component: RegisterPage },
    { name: 'menuVet', path: '/menu-veterinario', component: MenuVetPage },
    { name: 'menuFarmer', path: '/menu-granjero', component: MenuFarmerPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
