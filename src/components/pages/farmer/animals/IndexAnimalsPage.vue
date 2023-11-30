<script setup lang="ts">
import { ref } from 'vue';
import loader from '@/assets/loader.svg';
import { vetappApi } from '@/services';
import { EyeIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { VInput, VButton, VTitle } from '@elements';
import { TAnimal } from '@/types';
import { useI18n } from 'vue-i18n';
import { TrashIcon } from '@heroicons/vue/24/outline';

const { t } = useI18n();

const searchQuery = ref<string>('');
const animals = ref<TAnimal[]>([]);
const loading = ref<boolean>(true);

const searchAnimal = () => {
    loading.value = true;
    vetappApi.searchAnimals(searchQuery.value).then((response) => {
        animals.value = response;
        loading.value = false;
    });
};

const getAnimals = () => {
    loading.value = true;
    vetappApi.getAnimals().then((response) => {
        animals.value = response;
        loading.value = false;
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
                            <div class="flex items-center justify-between">
                                <VTitle>{{ $t('FarmPage.selectanimals') }}</VTitle>
                                <VButton
                                    class="flex h-9 w-fit items-center px-4"
                                    :label="t('FarmPage.buttoncreate')"
                                    type="submit"
                                    @click="$router.push({ name: 'animals.create' })"
                                />
                            </div>
                            <div class="m-4 ml-0 flex w-full flex-col items-center gap-4 lg:flex-row">
                                <div class="w-full lg:w-min lg:min-w-[280px]">
                                    <VInput
                                        v-model="searchQuery"
                                        :placeholder="t('FarmPage.searchfor')"
                                        :icon="MagnifyingGlassIcon"
                                    />
                                </div>
                                <div class="flex gap-2">
                                    <VButton
                                        class="flex h-9 w-fit items-center px-4"
                                        :label="t('FarmPage.buttonsearch')"
                                        type="submit"
                                        @click="searchAnimal()"
                                    />
                                    <VButton
                                        v-if="searchQuery"
                                        class="flex h-9 w-fit items-center px-2"
                                        type="submit"
                                        @click="getAnimals()"
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
                                <img class="h-20" :src="loader" v-if="loading" />
                                <VTitle v-if="!animals.length" class="text-xl ml-4">No hay animales</VTitle>
                                <table
                                    v-else
                                    class="min-w-full divide-y divide-emerald-600 hover:divide-emerald-400"
                                    summary="List of Animals"
                                >
                                    <thead>
                                        <tr>
                                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0"></th>

                                            <th
                                                scope="col"
                                                class="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-emerald-600 sm:pl-0"
                                            >
                                                {{ $t('FarmPage.name') }}
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-lg font-semibold text-emerald-600"
                                            >
                                                {{ $t('FarmPage.specie') }}
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-lg font-semibold text-emerald-600"
                                            >
                                                {{ $t('FarmPage.breed') }}
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-lg font-semibold text-emerald-600"
                                            >
                                                {{ $t('FarmPage.gender') }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-emerald-600 hover:divide-emerald-400">
                                        <tr
                                            v-for="animal in animals"
                                            :key="animal.id"
                                            class="text-base font-medium text-emerald-700"
                                        >
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
