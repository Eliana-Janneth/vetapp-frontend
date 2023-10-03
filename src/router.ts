import { createRouter, createWebHistory } from 'vue-router';
import { WelcomePage, RegisterPage, MenuVetPage, MenuFarmerPage, LoginPage, HomePage, DiagnosticoPage } from '@pages';

// TODO: Nombrar rutas
const routes = [
    { name: 'welcome', path: '/', component: WelcomePage },
    { name: 'login', path: '/iniciar-sesion', component: LoginPage },
    { name: 'register', path: '/registrarse', component: RegisterPage },
    { name: 'home', path: '/inicio', component: HomePage },
    { name: 'menuVet', path: '/menu-veterinario', component: MenuVetPage },
    { name: 'menuFarmer', path: '/menu-granjero', component: MenuFarmerPage },
    { name: 'diagnostico', path: '/diagnostico', component: DiagnosticoPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
