<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { VTitle, VButton, VLoader } from '@elements';
import { TRequest } from '@/types/request';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{
    request: string;
}>();

const requests = ref<TRequest[]>([]);
let title = '';
const loading = ref<boolean>(true);

if (props.request === 'send') {
    loading.value = true;
    vetappApi.getSendRequest().then((response) => {
        requests.value = response;
        loading.value = false;
    });
    title = t('FarmPage.wrequest');
} else {
    loading.value = true;
    vetappApi.getRejectedRequest().then((response) => {
        requests.value = response;
        loading.value = false;
    });
    title = t('FarmPage.rrequest');
}
</script>
<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex justify-end">
            <VButton class="flex w-fit items-center rounded-full p-1" @click="$emit('end')"
                ><XMarkIcon class="h-7 w-7"
            /></VButton>
        </div>
        <div class="text-center sm:flex sm:justify-between">
            <VTitle class="mb-2">{{ title }}</VTitle>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="max-h-96 overflow-y-auto">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <VLoader v-if="loading" />
                        <VTitle v-if="!requests.length" class="text-xl">{{ $t('VetPage.no') }} {{ title }} !!</VTitle>
                        <table v-else class="min-w-full divide-y divide-emerald-300" summary="farmer send request">
                            <thead class="sticky top-0 z-10 bg-emerald-100">
                                <tr>
                                    <th
                                        scope="col"
                                        class="text-md py-3.5 pl-4 pr-3 text-left font-semibold text-emerald-900 sm:pl-3"
                                    >
                                        {{ $t('FarmPage.vet') }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-md px-3 py-3.5 text-left font-semibold text-emerald-900"
                                    >
                                        {{ $t('FarmPage.animal') }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-md px-3 py-3.5 text-left font-semibold text-emerald-900"
                                    >
                                        {{ $t('FarmPage.specie') }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-md px-3 py-3.5 text-left font-semibold text-emerald-900"
                                    >
                                        {{ $t('FarmPage.breed') }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-md px-3 py-3.5 text-left font-semibold text-emerald-900"
                                    >
                                        {{ $t('FarmPage.message') }}
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
    </div>
</template>
