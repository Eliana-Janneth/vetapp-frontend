<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { UserCircleIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/vue/24/solid';
import { VTitle, VButton, FarmerRequestForm, VCard, FarmerSendRequestForm } from '@elements';
import { SModal } from '@placetopay/spartan-vue';
import { TVetAvailable } from '@/types/request';

const vetAvailables = ref<TVetAvailable[]>([]);
const openRequestForm = ref(false);
const openRequestSend= ref(false);
const request = ref('');
const idVet = ref('');

vetappApi.getVetAvailables().then((response) => {
    vetAvailables.value = response;
});

//Organizar boton de consultar
</script>

<template>
    <SModal class="z-50" :open="openRequestForm" @close="openRequestForm = false">
        <VCard class="w-full sm:w-fit lg:ml-[224px]" bodyClass="p-8">
            <FarmerRequestForm @end="openRequestForm = false" :idVet="idVet" />
        </VCard>
    </SModal>
    <SModal class="z-50" :open="openRequestSend" @close="openRequestSend = false">
        <VCard class="w-full sm:w-fit lg:ml-[224px]" bodyClass="p-8">
            <FarmerSendRequestForm @end="openRequestSend = false" :request="request" />
        </VCard>
    </SModal>

    <div class="px-4 sm:px-6 lg:px-8">
        <div class="text-center sm:flex sm:justify-between">
            <VTitle class="mb-2">Veterinarios Disponibles</VTitle>
            <div class="flex justify-end gap-2">
                <VButton label="Solicitudes En Espera"  @click="openRequestSend = true, request='send'" />
                <VButton label="Solicitudes Rechazadas"  @click="openRequestSend = true, request='reject'"/>
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
                                    class="text-lg py-3.5 pl-4 pr-3 text-left font-semibold text-emerald-600 sm:pl-3"
                                >
                                    Nombre
                                </th>
                                <th scope="col" class="text-lg px-3 py-3.5 text-left font-semibold text-emerald-600">
                                    Perfil
                                </th>
                                <th scope="col" class="text-lg px-3 py-3.5 text-left font-semibold text-emerald-600">
                                    Consultar
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                            <tr v-for="vet in vetAvailables" :key="vet.id" class="even:bg-emerald-50">
                                <td
                                    class="text-base whitespace-nowrap py-4 pl-4 pr-3 font-medium text-emerald-700 sm:pl-3"
                                >
                                    {{ vet.name + ' ' + vet.lastName }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-base text-emerald-500">
                                    <router-link
                                        :to="{ name: 'vets.show', params: { id: vet.id } }"
                                        class="flex items-center text-emerald-600 hover:text-emerald-500"
                                        ><UserCircleIcon class="h-6 w-6" />
                                        <span class="ml-2 font-medium"> Ver Perfil </span></router-link
                                    >
                                </td>

                                <td class="whitespace-nowrap px-3 py-4 text-base text-emerald-500">
                                    <VButton
                                        @click="openRequestForm = true, idVet = vet.id"
                                        class="flex text-base items-center bg-transparent text-emerald-600 hover:text-emerald-500"
                                        ><ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6" />
                                        <span class="ml-2 font-medium"> Consultar </span></VButton
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <router-view class="mt-4" />
</template>
