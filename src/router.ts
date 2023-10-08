import { createRouter, createWebHistory } from 'vue-router';
import {
    WelcomePage,
    RegisterPage,
    LoginPage,
    HomePage,
    ShowAnimalsPage,
    AnimalsPage,
    FarmerPage,
    TestPage,
} from '@pages';
import { MainTemplate } from '@/components/template';
import { VListAnimal, VRegisterAnimal } from './components/elements/forms';

// TODO: Nombrar rutas
const routes = [
    { name: 'welcome', path: '/', component: WelcomePage },
    { name: 'login', path: '/iniciar-sesion', component: LoginPage },
    { name: 'register', path: '/registrarse', component: RegisterPage },
    { name: 'home', path: '/inicio', component: HomePage, meta: { layout: MainTemplate } },
    {
        name: 'animals',
        path: '/animales',
        component: AnimalsPage,
        meta: { layout: MainTemplate },
        children: [
            {
                name: 'animals.register',
                path: 'registrar-animal',
                component: VRegisterAnimal,
            },
            {
                name: 'animals.list',
                path: 'listar-animales',
                component: VListAnimal,
                children: [
                    {
                        name: 'animals.show',
                        path: 'animales/:id',
                        component: ShowAnimalsPage,
                    },
                ],
            },
        ],
    },

    { name: 'profileFarmer', path: '/perfil-granjero', component: FarmerPage, meta: { layout: MainTemplate } },
    { name: 'test', path: '/test', component: TestPage, meta: { layout: MainTemplate } },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
