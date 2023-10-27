import {
    AnimalsAuthorizedPage,
    ConsultsTemplate,
    DiagnosisPage,
    MedicalHistoryPage,
} from '@/components/pages/consultsPages';
import { InformationAcademic, InformationVet, ShowVet, WorkExperience } from '@/components/pages/veterinarianPages';
import { MainTemplate } from '@/components/template';
import { PatientsPage, RequestsFarmerPage } from '@pages';

export const vetRoutes = [
    { name: 'patients.index', path: '/pacientes', component: PatientsPage, meta: { layout: MainTemplate } },

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
        name: 'requests.show',
        path: '/solicitudes-granjeros',
        component: RequestsFarmerPage,
        meta: { layout: MainTemplate },
    },
];
