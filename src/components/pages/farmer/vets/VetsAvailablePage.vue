<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { UserCircleIcon, ChatBubbleOvalLeftEllipsisIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { VTitle, VButton, VInput, FarmerRequestForm, VCard, FarmerSendRequestForm } from '@elements';
import { TrashIcon } from '@heroicons/vue/24/outline';
import { SModal } from '@placetopay/spartan-vue';
import { TVetAvailable } from '@/types/request';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const vetAvailables = ref<TVetAvailable[]>([]);
const openRequestForm = ref(false);
const openRequestSend = ref(false);
const request = ref('');
const idVet = ref('');

const searchVet = ref<string>('');

const searchVets = () => {
    vetappApi.searchVetAvailables(searchVet.value).then((response) => {
        vetAvailables.value = response;
    });
};

const getVets = () => {
    vetappApi.getVetAvailables().then((response) => {
        vetAvailables.value = response;
    });
    searchVet.value = '';
};

getVets();
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
    <div class="rounded-lg bg-emerald-100/70">
        <div class="mx-auto max-w-7xl">
            <div class="rounded-lg bg-emerald-100/70 py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="text-center sm:flex sm:justify-between">
                        <div class="sm:flex-auto">
                            <div class="flex items-center flex-col lg:flex-row justify-between">
                                <VTitle class="mb-2" >{{ $t('FarmPage.availablevets') }}</VTitle>
                                <div class="flex justify-end gap-2">
                                    <VButton
                                        class="flex h-9 w-fit items-center lg:px-4 px-2"
                                        :label="t('FarmPage.wrequest')"
                                        @click="(openRequestSend = true), (request = 'send')"
                                    />
                                    <VButton
                                        class="flex h-9 w-fit items-center lg:px-4"
                                        :label="t('FarmPage.rrequest')"
                                        @click="(openRequestSend = true), (request = 'reject')"
                                    />
                                </div>
                            </div>

                            <div class="m-4 ml-0 flex w-full flex-col items-center gap-4 lg:flex-row">
                                <div class="w-full lg:w-min lg:min-w-[280px]">
                                    <VInput
                                        class="w-56 lg:max-w-sm"
                                        v-model="searchVet"
                                        :placeholder="t('FarmPage.searchfor')"
                                        :icon="MagnifyingGlassIcon"
                                    />
                                </div>
                                <div class="flex gap-2">
                                    <VButton
                                        class="flex h-9 w-fit items-center px-4"
                                        :label="t('FarmPage.buttonsearch')"
                                        type="submit"
                                        @click="searchVets()"
                                    />
                                    <VButton
                                        v-if="searchVet"
                                        class="flex h-9 w-fit items-center px-2"
                                        type="submit"
                                        @click="getVets()"
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
                                <table class="min-w-max mx-auto divide-y divide-emerald-300" summary="list of vets availables">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                class="py-3.5 pl-4 pr-3 text-center text-lg font-semibold text-emerald-600 sm:pl-3"
                                            >
                                                {{ $t('FarmPage.name') }}
                                            </th>
                                            <th
                                                scope="col"
                                                class="py-3.5 text-center text-lg font-semibold text-emerald-600"
                                            >
                                                {{ $t('FarmPage.profile') }}
                                            </th>
                                            <th
                                                scope="col"
                                                class=" py-3.5 text-center text-lg font-semibold text-emerald-600"
                                            >
                                                {{ $t('FarmPage.consult') }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white">
                                        <tr v-for="vet in vetAvailables" :key="vet.id" class="even:bg-emerald-50">
                                            <td
                                                class="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-emerald-700 sm:pl-3"
                                            >
                                                {{ vet.name + ' ' + vet.lastName }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4 text-base text-emerald-500">
                                                <router-link
                                                    :to="{ name: 'vets.show', params: { id: vet.id } }"
                                                    class="flex items-center text-emerald-600 hover:text-emerald-500"
                                                    ><UserCircleIcon class="h-6 w-6" />
                                                    <span class="invisible ml-2 font-medium md:visible">
                                                        {{ $t('FarmPage.viewp') }}
                                                    </span></router-link
                                                >
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-base text-emerald-500">
                                                <button
                                                    @click="(openRequestForm = true), (idVet = vet.id)"
                                                    class="flex w-min items-center px-0 text-base text-emerald-600 hover:text-emerald-500"
                                                >
                                                    <ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6" />
                                                    <span class="invisible ml-2 font-medium md:visible">{{
                                                        $t('FarmPage.consult')
                                                    }}</span>
                                                </button>
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
    <router-view class="mt-4" />
</template>
