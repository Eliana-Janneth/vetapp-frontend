import { createRouter, createWebHistory } from 'vue-router';
import { WelcomePage, RegisterPage, LoginPage, HomePage, FarmerPage } from '@pages';
import { MainTemplate } from '@/components/template';
import { InformationAcademic,ShowVet, WorkExperience, InformationVet } from '@/components/pages/veterinarianPages';
import {
    ConsultsTemplate,
    DiagnosisPage,
    AnimalsAuthorizedPage,
    MedicalHistoryPage,
} from '@/components/pages/consultsPages';
import { ShowAnimalsPage, AnimalsTemplate, ListAnimalPage, RegisterAnimalPage } from '@/components/pages/animalPages';

import chat from '@/components/elements/forms/chat.vue';

const routes = [
    { name: 'welcome', path: '/', component: WelcomePage },
    { name: 'login', path: '/iniciar-sesion', component: LoginPage },
    { name: 'register', path: '/registrarse', component: RegisterPage },
    { name: 'home', path: '/inicio', component: HomePage, meta: { layout: MainTemplate } },
    {
        name: 'animals',
        path: '/animales',
        component: AnimalsTemplate,
        meta: { layout: MainTemplate },
        redirect: { name: 'animals.list' },
        children: [
            {
                name: 'animals.register',
                path: 'registrar-animal',
                component: RegisterAnimalPage,
            },
            {
                name: 'animals.list',
                path: 'listar-animales',
                component: ListAnimalPage,
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
        redirect: { name: 'consults.animalsAuthorized' },
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
    {
        name: 'medicalHistory',
        path: '/historial-medico/:id',
        component: MedicalHistoryPage,
        meta: { layout: MainTemplate },
    },
    { name: 'chat', path: '/chat', component: chat, meta: { layout: MainTemplate } },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
