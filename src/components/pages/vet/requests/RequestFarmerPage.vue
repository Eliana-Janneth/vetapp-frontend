<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { VCard, VButton, VText, VTitle } from '@elements';
import loader from '@/assets/loader.svg';
import { UserCircleIcon } from '@heroicons/vue/24/outline';
import { TRequestFarmer } from '@/types';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const farmerRequests = ref<TRequestFarmer[]>([]);

vetappApi.getFarmerRequests().then((response) => {
    farmerRequests.value = response;
});

const onSubmit = async (id: string, value: boolean) => {
    try {
        await vetappApi.responseToFarmerRequest(id, value);
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
};
</script>
<template>
    <div class="flex justify-center mb-4">
    <VTitle>{{ $t('VetPage.solp') }}</VTitle>
</div>
    <div class="container mx-auto flex flex-wrap items-center justify-center gap-2">
        <img class="h-20" :src="loader" v-if="farmerRequests === undefined" alt="loader"/>
        <p v-else-if="farmerRequests === null">{{ $t('VetPage.nosol') }}</p>

        <div v-else v-for="request in farmerRequests" :key="request.id">
            <VCard class="mb-8 w-full lg:max-w-lg" :loading="!farmerRequests">
                <template #header>
                    <UserCircleIcon class="h-5 w-5" />
                    <span>{{ request.farmer }}</span>
                </template>

                <VText>
                    <span class="font-bold">{{ $t('VetPage.message') }}:&nbsp;</span>
                    <span class="text-justify">{{ request.message }}&nbsp;</span>
                </VText>
                <VText class="justify-center">
                    <span class="font-bold">{{ $t('VetPage.animal') }}:&nbsp;</span>
                    <span>{{ request.animal }}&nbsp;</span>
                </VText>
                <VText>
                    <span class="font-bold">{{ $t('VetPage.specie') }}:&nbsp;</span>
                    <span>{{ request.specie }}&nbsp;</span>
                </VText>
                <VText>
                    <span class="font-bold">{{ $t('VetPage.breed') }}:&nbsp;</span>
                    <span>{{ request.race }}&nbsp;</span>
                </VText>
                <div class="mt-2 flex w-full justify-center gap-2">
                    <VButton
                        class="w-min py-1"
                        @click="onSubmit(request.id, false)"
                        :label="t('VetPage.rechazar')"
                        variant="danger"
                    />
                    <VButton class="w-min py-1" @click="onSubmit(request.id, true)" variant="success">
                        {{ $t('VetPage.acept') }}
                    </VButton>
                </div>
            </VCard>
        </div>
    </div>
</template>
