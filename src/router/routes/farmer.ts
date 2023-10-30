import { MainTemplate } from '@/components/template';
import {
    IndexAnimalsPage,
    ShowAnimalsPage,
    CreateAnimalsPage,
    VetsAvailablePage,
    ShowVetsPage,
} from '@pages';

export const farmerRoutes = [
    { name: 'animals.index', path: '/animales', component: IndexAnimalsPage, meta: { layout: MainTemplate } },
    { name: 'animals.show', path: '/animal/:id', component: ShowAnimalsPage, meta: { layout: MainTemplate } },
    { name: 'animals.create', path: '/registrar-animal', component: CreateAnimalsPage, meta: { layout: MainTemplate } },
    { name: 'vets.show', path: '/veterinario/:id', component: ShowVetsPage, meta: { layout: MainTemplate } },

    {
        name: 'vetsAvailables.index',
        path: '/veterinarios',
        component: VetsAvailablePage,
        meta: { layout: MainTemplate },
    },
  
];
