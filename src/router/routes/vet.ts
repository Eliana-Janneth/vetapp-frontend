import { MainTemplate } from '@/components/template';
import { PatientsPage, RequestsFarmerPage, MedicalHistoryPage } from '@pages';

export const vetRoutes = [
    {
        name: 'patients.index',
        path: '/pacientes',
        component: PatientsPage,
        meta: { layout: MainTemplate },
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
