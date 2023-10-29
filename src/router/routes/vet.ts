import {
    AnimalsAuthorizedPage,
    ConsultsTemplate,
    DiagnosisPage,
    MedicalHistoryPage,
} from '@/components/pages/consultsPages';
import { MainTemplate } from '@/components/template';
import { PatientsPage, RequestsFarmerPage } from '@pages';

export const vetRoutes = [
    { name: 'patients.index', path: '/pacientes', component: PatientsPage, meta: { layout: MainTemplate } },

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
