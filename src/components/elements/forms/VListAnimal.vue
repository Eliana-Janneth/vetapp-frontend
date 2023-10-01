<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { vetappApi } from '@/services';

// Declara una propiedad ref para almacenar los datos

const animals = ref<UserData[]>([]);

interface UserData {
    id: string;
    name: string;
    specie: string;
    race: string;
    color: string;
    gender: string;
    birth_date: string;
    description: string;
    weight: string;
    heigth: string;
}

// Hacer una solicitud GET y cargar los datos cuando el componente se monta
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
    <div class="bg-white">
        <div class="max-h-96 overflow-y-scroll">
            <table class="min-w-full table-auto">
                <thead
                    class="sticky top-0 leading-4tracking-wider bg-emerald-400 text-xs font-medium uppercase tracking-wider text-black">
                    <tr>
                        <th class="px-6 py-3">Nombre</th>
                        <th class="px-6 py-3">Especie</th>
                        <th class="px-6 py-3">Raza</th>
                        <th class="px-6 py-3">Género</th>
        
                    </tr>
                </thead>
                <tbody>
                    <tr class="outline outline-2 outline-emerald-400 divide-x-2 divide-emerald-400 -outline-offset-2" v-for="animal in animals" :key="animal.id">
                        <td class="table-item">{{ animal.name }}</td>
                        <td class="table-item">{{ animal.specie }}</td>
                        <td class="table-item">{{ animal.race }}</td>
                        <td class="table-item">{{ animal.gender }}</td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
.table-item {
    @apply border-b border-gray-200 px-6 py-2;
}
</style>
