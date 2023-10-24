import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router';
import { guestGuard, authGuard } from './middlewares';
import { WelcomePage, RegisterPage, LoginPage, NotFoundPage } from '@pages';
import { MainTemplate } from '@/components/template';
import chat from '@/components/elements/forms/chat.vue';
import { farmerRoutes, vetRoutes } from './routes';

const routes = [
    { name: 'welcome', path: '/', component: WelcomePage },
    { name: 'login', path: '/iniciar-sesion', component: LoginPage },
    { name: 'register', path: '/registrarse', component: RegisterPage },
    { name: 'chat', path: '/chat', component: chat, meta: { layout: MainTemplate } },
    ...farmerRoutes,
    ...vetRoutes,
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to: RouteLocationNormalized) => {
    if (to.name === 'login' || to.name === 'register' || to.name === 'welcome') return guestGuard();
    else return authGuard();
});
