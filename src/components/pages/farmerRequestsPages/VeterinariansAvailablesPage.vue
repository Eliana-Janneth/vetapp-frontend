<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { UserCircleIcon, UserPlusIcon } from '@heroicons/vue/24/outline';

const vetAvailables = ref();

vetappApi
    .getVetAvailables()
    .then((response) => {
        vetAvailables.value = response;
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });

</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-emerald-900">Veterinarios Disponibles</h1>
            </div>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-emerald-300">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-emerald-900 sm:pl-3"
                                >
                                    Nombre
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-md font-semibold text-emerald-900">
                                    Perfil
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-md font-semibold text-emerald-900">
                                    Consultar
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                            <tr v-for="vet in vetAvailables" :key="vet.id" class="even:bg-emerald-50">
                                <td
                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-md font-medium text-emerald-900 sm:pl-3"
                                >
                                    {{ vet.first_name + ' ' + vet.last_name }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-emerald-500">
                                    <router-link
                                        :to="{ name: 'requests.showVetInformation', params: { id: vet.id } }"
                                        class="flex items-center text-emerald-600 hover:text-emerald-500"
                                        ><UserCircleIcon class="h-6 w-6" />
                                        <span class="ml-2 font-medium"> Ver Perfil </span></router-link
                                    >
                                </td>

                                <td class="whitespace-nowrap px-3 py-4 text-sm text-emerald-500">
                                    <router-link
                                        :to="{ name: 'requests.request', params: { id: vet.id } }"
                                        class="flex items-center text-emerald-600 hover:text-emerald-500"
                                        ><UserPlusIcon class="h-6 w-6" />
                                        <span class="ml-2 font-medium"> Consultar </span></router-link
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </div>
    <router-view class="mt-4"/>
</template>
