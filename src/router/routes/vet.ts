import {
    AnimalsAuthorizedPage,
    ConsultsTemplate,
    DiagnosisPage,
    MedicalHistoryPage,
} from '@/components/pages/consultsPages';
import { InformationAcademic, InformationVet, ShowVet, WorkExperience } from '@/components/pages/veterinarianPages';
import { RequestsTemplateVet } from '@/components/pages/veterinaryRequestPages';
import { MainTemplate } from '@/components/template';

export const vetRoutes = [
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
    {
        name: 'requestsVet',
        path: '/solicitudes-granjeros',
        component: RequestsTemplateVet,
        meta: { layout: MainTemplate },
        redirect: { name: 'requestsVet.requests' },
        children: [
            {
                name: 'requestsVet.requests',
                path: 'lista',
                component: () => import('@/components/pages/veterinaryRequestPages/RequestFarmerPage.vue'),
            },
        ],
    },
];
