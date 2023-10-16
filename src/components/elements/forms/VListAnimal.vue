<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { vetappApi } from '@/services';
import { LinkIcon } from '@heroicons/vue/24/outline';
import VInput from '../VInput.vue';
import VButton from '../VButton.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
// Declara una propiedad ref para almacenar los datos

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
const searchQuery = ref<string>('');
// Hacer una solicitud GET y cargar los datos cuando el componente se monta
onMounted(async () => {
    try {
        const response = await vetappApi.getAnimals();
        animals.value = response;
    } catch (error) {
        console.error('Error al cargar los datos:');
    }
});

//funcion de buscar animal
const searchAnimal = async () => {
    try {
        console.log(searchQuery.value);
        const response = await vetappApi.getAnimalName(searchQuery.value); // Use the search query
        animals.value = response;
    } catch (error) {
        console.error('Error al cargar los datos:');
    }
};
</script>
<template>
    <div class="bg-white">
        <div class="m-4 ml-0 flex w-96 items-center gap-2">
            <VInput v-model="searchQuery" placeholder="Escribe el nombre del animal " :icon="MagnifyingGlassIcon" />
            <VButton custom-class="py-0 items-center" label="Buscar" type="submit" @click="searchAnimal()" />
        </div>

        <div class="max-h-96 overflow-y-scroll">
            <table class="min-w-full table-auto">
                <thead
                    class="leading-4tracking-wider font-norma sticky top-0 bg-emerald-600 text-xs uppercase tracking-wider text-white"
                >
                    <tr>
                        <th class="px-6 py-3">Detalle</th>
                        <th class="px-6 py-3">Nombre</th>
                        <th class="px-6 py-3">Especie</th>
                        <th class="px-6 py-3">Raza</th>
                        <th class="px-6 py-3">Género</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="divide-x-2 divide-emerald-400 outline outline-2 -outline-offset-2 outline-emerald-400"
                        v-for="animal in animals"
                        :key="animal.id"
                    >
                        <td class="table-item">
                            <router-link
                                :to="{ name: 'animals.show', params: { id: animal.id } }"
                                class="flex items-center text-emerald-600 hover:text-emerald-500"
                                ><LinkIcon class="h-5 w-5" />
                                <span class="ml-2 font-medium"> Ver Detalle </span></router-link
                            >
                        </td>
                        <td class="table-item">{{ animal.name }}</td>
                        <td class="table-item">{{ animal.specie_name }}</td>
                        <td class="table-item">{{ animal.race_name }}</td>
                        <td class="table-item">{{ animal.gender }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <router-view />
</template>

<style>
.table-item {
    @apply border-b border-gray-200 px-6 py-2;
}
</style>
