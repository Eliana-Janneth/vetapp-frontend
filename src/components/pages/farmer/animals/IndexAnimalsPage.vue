<script setup lang="ts">
import { ref } from 'vue';
import loader from '@/assets/loader.svg';
import { vetappApi } from '@/services';
import { EyeIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { VInput, VButton } from '@elements';

const searchQuery = ref<string>('');
const animals = ref();

const searchAnimal = () => {
    animals.value = null;
    vetappApi.getAnimalName(searchQuery.value).then((response) => {
        animals.value = response;
    });
};

const getAnimals = () => {
    animals.value = null;
    vetappApi.getAnimals().then((response) => {
        animals.value = response;
    });

    searchQuery.value = '';
};

getAnimals();
</script>

<template>
    <h1 class="mb-4 text-2xl font-bold text-emerald-600">Mis animales</h1>

    <div class="m-4 ml-0 flex w-full items-center justify-between gap-2">
        <div class="flex items-center gap-4">
            <VInput
                class="max-w-md"
                v-model="searchQuery"
                placeholder="Escribe el nombre del animal "
                :icon="MagnifyingGlassIcon"
            />
            <VButton custom-class="py-0 items-center" label="Buscar" type="submit" @click="searchAnimal()" />
            <VButton custom-class="py-0 items-center" label="Limpiar" type="submit" @click="getAnimals()" />
        </div>
        <VButton
            custom-class="py-0 items-center"
            label="Crear"
            type="submit"
            @click="$router.push({ name: 'animals.create' })"
        />
    </div>

    
    <img class="h-20" :src="loader" v-if="!animals" alt="Cargando información"/>
    <p v-else-if="!animals.length">no hay animales</p>
    <table v-else class="w-full" summary="List of Animals">
        <thead class="bg-emerald-600 font-bold text-white">
            <tr class="[&>th]:px-6 [&>th]:py-3">
                <th>Nombre</th>
                <th>Especie</th>
                <th>Raza</th>
                <th>Género</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            <tr
                class="divide-x-2 divide-emerald-400 outline outline-2 -outline-offset-2 outline-emerald-400"
                v-for="animal in animals"
                :key="animal.id"
            >
                <td class="border-b border-gray-200 px-6 py-2">{{ animal.name }}</td>
                <td class="border-b border-gray-200 px-6 py-2">{{ animal.specie_name }}</td>
                <td class="border-b border-gray-200 px-6 py-2">{{ animal.race_name }}</td>
                <td class="border-b border-gray-200 px-6 py-2">{{ animal.gender }}</td>
                <td class="border-b border-gray-200 py-2">
                    <div class="flex justify-center">
                        <router-link
                            :to="{ name: 'animals.show', params: { id: animal.id } }"
                            class="flex items-center text-emerald-600 hover:text-emerald-500"
                        >
                            <EyeIcon class="h-5 w-5" />
                        </router-link>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
