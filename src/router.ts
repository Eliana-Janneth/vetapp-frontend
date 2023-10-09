import { createRouter, createWebHistory } from 'vue-router';
import { WelcomePage, RegisterPage, LoginPage, HomePage, ShowAnimalsPage, AnimalsPage, FarmerPage } from '@pages';
import { MainTemplate } from '@/components/template';
import { VListAnimal, VRegisterAnimal, ShowVet } from '@elements/forms';
import { InformationAcademic, WorkExperience, InformationVet } from '@elements/forms/InformationVet';
import { ConsultsTemplate, DiagnosisPage, AnimalsAuthorizedPage } from '@/components/pages/consultsPages';

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
    {
        name: 'profileVet',
        path: '/perfil-veterinario',
        component: InformationVet,
        meta: { layout: MainTemplate },
        redirect: { name: 'profileVet.showVet' },
        children: [
            {
                name: 'profileVet.workExperience',
                path: 'experiencia-laboral',
                component: WorkExperience,
            },
            {
                name: 'profileVet.informationAcademic',
                path: 'informacion-academica',
                component: InformationAcademic,
            },
            { name: 'profileVet.showVet', path: 'mostrar-veterinario', component: ShowVet },
        ],
    },

    {
        name: 'consults',
        path: '/consultas',
        component: ConsultsTemplate,
        meta: { layout: MainTemplate },
        children: [
            {
                name: 'consults.animalsAuthorized',
                path: 'animales-autorizados',
                component: AnimalsAuthorizedPage,
                children: [
                    {
                        name: 'consults.diagnosis',
                        path: 'diagnostico',
                        component: DiagnosisPage,
                    },
                ],
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
