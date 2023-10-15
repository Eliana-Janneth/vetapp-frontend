<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { vetappApi } from '@/services';
import { UserCircleIcon, UserPlusIcon, UserMinusIcon } from '@heroicons/vue/24/outline';

const animals = ref<UserData[]>([]);

interface UserData {
    id: string;
    name: string;
    specie_name: string;
    race_name: string;
    color: string;
    gender: string;
    birth_date: string;
    description: string;
    weight: string;
    heigth: string;
}
onMounted(async () => {
    try {
        const response = await vetappApi.getAnimals();
        animals.value = response;
    } catch (error) {
        console.error('Error al cargar los datos:');
    }
});
</script>
<template>
    <div class="flex justify-center bg-white">
        <div class="h-96 w-max overflow-y-scroll">
            <table class="min-w-full table-auto">
                <thead
                    class="leading-4tracking-wider font-norma sticky top-0 bg-emerald-600 text-xs uppercase tracking-wider text-white"
                >
                    <tr>
                        <th class="px-6 py-3">Nombre</th>
                        <th class="px-6 py-3">Perfil</th>
                        <th class="px-6 py-3">Solicitar Consulta</th>
                        <th class="px-6 py-3">Descartar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="divide-x-2 divide-emerald-400 outline outline-2 -outline-offset-2 outline-emerald-400"
                        v-for="animal in animals"
                        :key="animal.id"
                    >
                        <td class="table-item">{{ animal.name }}</td>
                        <td class="table-item">
                            <router-link
                                :to="{ name: 'animals.show', params: { id: animal.id } }"
                                class="flex items-center text-emerald-600 hover:text-emerald-500"
                                ><UserCircleIcon class="h-5 w-5" />
                                <span class="ml-2 font-medium"> Ver Perfil </span></router-link
                            >
                        </td>
                        <td class="table-item">
                            <router-link
                                :to="{ name: 'requests.request', params: { id: animal.id } }"
                                class="flex items-center text-emerald-600 hover:text-emerald-500"
                                ><UserPlusIcon class="h-5 w-5" />
                                <span class="ml-2 font-medium"> Consultar </span></router-link
                            >
                        </td>
                        <td class="table-item">
                            <router-link
                                :to="{ name: 'animals.show', params: { id: animal.id } }"
                                class="flex items-center text-emerald-600 hover:text-emerald-500"
                                ><UserMinusIcon class="h-5 w-5" />
                                <span class="ml-2 font-medium"> Descartar </span></router-link
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <router-view />
    </div>
</template>
