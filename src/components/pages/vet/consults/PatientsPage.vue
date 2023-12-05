<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { EyeIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import loader from '@/assets/loader.svg';
import { VTitle, VInput, VButton } from '@elements';
import { TAnimalAuthorized } from '@/types';
import { TrashIcon } from '@heroicons/vue/24/outline';

const animals = ref<TAnimalAuthorized[]>([]);
const searchAnimal = ref<string>('');

const getAnimalsAuthorized = () => {
    vetappApi.getAnimalsAuthorized().then((response) => {
        animals.value = response;
    });
    searchAnimal.value = '';
};

const searchAnimals = () => {
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
                            <div class="flex items-center justify-between">
                                <VTitle>{{ $t('VetPage.patients') }}</VTitle>
                            </div>
                            <div class="m-4 ml-0 flex w-full flex-col items-center gap-4 lg:flex-row">
                                <div class="w-full lg:w-min lg:min-w-[280px]">
                                    <VInput
                                        class="max-w-sm"
                                        v-model="searchAnimal"
                                        :placeholder="$t('VetPage.searchfor')"
                                        :icon="MagnifyingGlassIcon"
                                    />
                                </div>
                                <div class="flex gap-2">
                                    <VButton
                                        class="flex h-9 w-fit items-center px-4"
                                        :label="$t('VetPage.buttonsearch')"
                                        type="submit"
                                        @click="searchAnimals()"
                                    />
                                    <VButton
                                        v-if="searchAnimal"
                                        class="flex h-9 w-fit items-center px-2"
                                        type="submit"
                                        @click="getAnimalsAuthorized()"
                                    >
                                        <TrashIcon class="h-5 w-5 text-emerald-100/70" />
                                    </VButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 flow-root">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <img class="h-20" :src="loader" v-if="!animals" alt="loader" />
                                <VTitle v-if="!animals.length" class="ml-4 text-xl">{{
                                    $t('VetPage.noanimals')
                                }}</VTitle>
                                <table v-else class="min-w-full divide-y divide-sky-600" summary="Animals Authorized">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">&nbsp;</th>

                                            <th
                                                scope="col"
                                                class="py-3.5 pl-4 pr-3 text-center text-lg font-semibold text-sky-600 sm:pl-0"
                                            >
                                                {{ $t('VetPage.farm') }}
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-center text-lg font-semibold text-sky-600"
                                            >
                                                {{ $t('VetPage.name') }}
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-center text-lg font-semibold text-sky-600"
                                            >
                                                {{ $t('VetPage.specie') }}
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-center text-lg font-semibold text-sky-600"
                                            >
                                                {{ $t('VetPage.breed') }}
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-center text-lg font-semibold text-sky-600"
                                            >
                                                {{ $t('VetPage.gender') }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-sky-600">
                                        <tr v-for="animal in animals" :key="animal.id">
                                            <td
                                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-base font-medium sm:pr-0"
                                            >
                                                <router-link
                                                    :to="{ name: 'medicalHistory', params: { id: animal.id } }"
                                                    class="flex items-center text-sky-600 hover:text-sky-500"
                                                    ><EyeIcon class="h-5 w-5" />
                                                </router-link>
                                            </td>
                                            <td
                                                class="whitespace-nowrap py-4 pl-4 pr-3 text-center text-base font-medium text-sky-700 sm:pl-0"
                                            >
                                                {{ animal.farmer }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4 text-center text-base text-sky-700">
                                                {{ animal.name }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4 text-center text-base text-sky-700">
                                                {{ animal.specie }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4 text-center text-base text-sky-700">
                                                {{ animal.race }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4 text-center text-base text-sky-700">
                                                {{ animal.gender }}
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
