<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { EyeIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import loader from '@/assets/loader.svg';
import { VTitle,VInput,VButton } from '@elements';
import { TAnimalAuthorized } from '@/types';

const animals = ref<TAnimalAuthorized[]>([]);
const searchAnimal = ref<string>('');

const getAnimalsAuthorized = () => {
    //animals.value = null;
    vetappApi.getAnimalsAuthorized().then((response) => {
        animals.value = response;
    });
    searchAnimal.value = '';
};

const searchAnimals = () => {
    //animals.value = null;
    vetappApi.searchAnimalsAuthorized(searchAnimal.value).then((response) => {
        animals.value = response;
    });
};
getAnimalsAuthorized();
</script>
<template>
    <div class="rounded-lg bg-sky-100">
        <div class="mx-auto max-w-7xl">
            <div class="rounded-lg bg-sky-100 py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                            <VTitle>Mis Pacientes</VTitle>
                            <div class="m-4 ml-0 flex w-full items-center justify-between gap-2">
                                <div class="flex items-center gap-4">
                                    <VInput
                                        class="max-w-md"
                                        v-model="searchAnimal"
                                        placeholder="Buscar por animal, granjero, especie o raza"
                                        :icon="MagnifyingGlassIcon"
                                    />
                                    <VButton
                                        custom-class="py-0 items-center"
                                        label="Buscar"
                                        type="submit"
                                        @click="searchAnimals()"
                                    />
                                    <VButton
                                        custom-class="py-0 items-center"
                                        label="Limpiar"
                                        type="submit"
                                        @click="getAnimalsAuthorized()"
                                    />
                                </div>
                            </div>
                            <img class="h-20" :src="loader" v-if="!animals" />
                        </div>
                    </div>
                    <div class="mt-8 flow-root">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table class="min-w-full divide-y divide-sky-600" summary="Animals Authorized">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                class="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-sky-600 sm:pl-0"
                                            >
                                                Granjero
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-lg font-semibold text-sky-600"
                                            >
                                                Nombre
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-lg font-semibold text-sky-600"
                                            >
                                                Especie
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-lg font-semibold text-sky-600"
                                            >
                                                Raza
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-lg font-semibold text-sky-600"
                                            >
                                                Género
                                            </th>
                                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-sky-600">
                                        <tr v-for="animal in animals" :key="animal.id">
                                            <td
                                                class="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-sky-700 sm:pl-0"
                                            >
                                                {{ animal.farmer }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4 text-base text-sky-700">
                                                {{ animal.name }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4 text-base text-sky-700">
                                                {{ animal.specie }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4 text-base text-sky-700">
                                                {{ animal.race }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4 text-base text-sky-700">
                                                {{ animal.gender }}
                                            </td>
                                            <td
                                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-base font-medium sm:pr-0"
                                            >
                                                <router-link
                                                    :to="{ name: 'medicalHistory', params: { id: animal.id } }"
                                                    class="flex items-center text-sky-600 hover:text-sky-500"
                                                    ><EyeIcon class="h-5 w-5" />
                                                </router-link>
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
