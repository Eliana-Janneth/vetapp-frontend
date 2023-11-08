<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { VTitle } from '@elements';
import { TRequest } from '@/types/request';

const props = defineProps<{
    request: string;
}>();

const requests = ref<TRequest[]>([]);

if (props.request === 'send') {
    vetappApi.getSendRequest().then((response) => {
        requests.value = response;
    });
} else {
    vetappApi.getRejectedRequest().then((response) => {
        requests.value = response;
    });
}
</script>
<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="text-center sm:flex sm:justify-between">
            <VTitle class="mb-2">Solicitudes En Espera</VTitle>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-emerald-300">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    class="text-md py-3.5 pl-4 pr-3 text-left font-semibold text-emerald-900 sm:pl-3"
                                >
                                    Verinario
                                </th>
                                <th scope="col" class="text-md px-3 py-3.5 text-left font-semibold text-emerald-900">
                                    Animal
                                </th>
                                <th scope="col" class="text-md px-3 py-3.5 text-left font-semibold text-emerald-900">
                                    Especie
                                </th>
                                <th scope="col" class="text-md px-3 py-3.5 text-left font-semibold text-emerald-900">
                                    Raza
                                </th>
                                <th scope="col" class="text-md px-3 py-3.5 text-left font-semibold text-emerald-900">
                                    Mensaje
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                            <tr v-for="request in requests" :key="request.id" class="even:bg-emerald-50">
                                <td
                                    class="text-md whitespace-nowrap py-4 pl-4 pr-3 font-medium text-emerald-900 sm:pl-3"
                                >
                                    {{ request.vet }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-emerald-500">
                                    {{ request.animal }}
                                </td>

                                <td class="whitespace-nowrap px-3 py-4 text-sm text-emerald-500">
                                    {{ request.specie }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-emerald-500">
                                    {{ request.race }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-emerald-500">
                                    {{ request.message }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
