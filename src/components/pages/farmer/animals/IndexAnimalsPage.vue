<script setup lang="ts">
import { ref } from 'vue';
import loader from '@/assets/loader.svg';
import { vetappApi } from '@/services';
import { EyeIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { VInput, VButton, VTitle } from '@elements';
import { TAnimal } from '@/types';

const searchQuery = ref<string>('');
const animals = ref<TAnimal[]>([]);

const searchAnimal = () => {
    //animals.value = null;
    vetappApi.searchAnimals(searchQuery.value).then((response) => {
        animals.value = response;
    });
};

const getAnimals = () => {
    //animals.value = null;
    vetappApi.getAnimals().then((response) => {
        animals.value = response;
    });

    searchQuery.value = '';
};
//TODO: Cuadrar valores null
//TODO: Cuando el animal no existe mostrar 404
getAnimals();
</script>

<template>
    <div class="rounded-lg bg-emerald-100/70">
        <div class="mx-auto max-w-7xl">
            <div class="rounded-lg bg-emerald-100/70 py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                            <VTitle>Mis animales</VTitle>
                            <div class="m-4 ml-0 flex w-full items-center justify-between gap-2">
                                <div class="flex items-center gap-4">
                                    <VInput
                                        class="max-w-md"
                                        v-model="searchQuery"
                                        placeholder="Buscar por nombre, raza o especie "
                                        :icon="MagnifyingGlassIcon"
                                    />
                                    <VButton
                                        custom-class="py-0 items-center"
                                        label="Buscar"
                                        type="submit"
                                        @click="searchAnimal()"
                                    />
                                    <VButton
                                        custom-class="py-0 items-center"
                                        label="Limpiar"
                                        type="submit"
                                        @click="getAnimals()"
                                    />
                                </div>
                                <VButton
                                    custom-class="py-0 items-center"
                                    label="Crear"
                                    type="submit"
                                    @click="$router.push({ name: 'animals.create' })"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 flow-root">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <img class="h-20" :src="loader" v-if="!animals.length" />
                                <p v-else-if="!animals">No hay animales</p>
                                <table v-else class="min-w-full divide-y divide-emerald-600 hover:divide-emerald-400" summary="List of Animals">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                class="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-emerald-600 sm:pl-0"
                                            >
                                                Nombre
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-lg font-semibold text-emerald-600"
                                            >
                                                Especie
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-lg font-semibold text-emerald-600"
                                            >
                                                Raza
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-lg font-semibold text-emerald-600"
                                            >
                                                Género
                                            </th>
                                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-emerald-600 hover:divide-emerald-400">
                                        <tr
                                            v-for="animal in animals"
                                            :key="animal.id"
                                            class="text-base font-medium text-emerald-700"
                                        >
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-0">
                                                {{ animal.name }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4">
                                                {{ animal.specie }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4">
                                                {{ animal.race }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4">
                                                {{ animal.gender }}
                                            </td>
                                            <td class="relative py-4 pl-3 pr-4 text-right sm:pr-0">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
