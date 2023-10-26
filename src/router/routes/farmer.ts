import { MainTemplate } from '@/components/template';
import { FarmerPage, IndexAnimalsPage, ShowAnimalsPage,CreateAnimalsPage,ConsultsPage } from '@pages';
import { RequestsTemplateFarmer } from '@/components/pages/farmerRequestsPages';

export const farmerRoutes = [
    { name: 'profileFarmer', path: '/perfil-granjero', component: FarmerPage, meta: { layout: MainTemplate } },
    { name: 'animals.index', path: '/animales', component: IndexAnimalsPage, meta: { layout: MainTemplate } },
    { name: 'animals.show', path: '/animal/:id', component: ShowAnimalsPage, meta: { layout: MainTemplate } },
    { name: 'animals.create', path: '/registrar-animal', component: CreateAnimalsPage, meta: { layout: MainTemplate } },
    {name: 'consults.index', path: '/consultas', component: ConsultsPage, meta: { layout: MainTemplate } },
    {
        name: 'requestsFarmer',
        path: '/veterinarios',
        component: RequestsTemplateFarmer,
        meta: { layout: MainTemplate },
        routeredirect: { name: 'requests.veterinariansAvailables' },
        children: [
            {
                name: 'requests.veterinariansAvailables',
                path: 'veterinarios-disponibles',
                component: () => import('@/components/pages/farmerRequestsPages/VeterinariansAvailablesPage.vue'),
                children: [
                    {
                        name: 'requests.request',
                        path: 'solicitud/:id',
                        component: () => import('@/components/pages/farmerRequestsPages/RequestForm.vue'),
                    },
                    {
                        name: 'requests.showVetInformation',
                        path: 'mostrar-veterinario/:id',
                        component: () => import('@/components/pages/farmerRequestsPages/ShowVet.vue'),
                    },
                ],
            },
        ],
    },
];
