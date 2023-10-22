<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi, TRequestFarmerPayload } from '@/services';
import { VCard } from '@elements';

const farmerRequests = ref<TRequestFarmerPayload[]>([]);

vetappApi
    .getFarmerRequestS()
    .then((response) => {
        farmerRequests.value = response;
    })
    .catch((err) => {
        console.log(err);
    });

const onSubmit = async (id: string, value: boolean) => {
    try {
        await vetappApi.responseToFarmerRequest(id, value);
        console.log('Solicitud enviada');
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
};
</script>
<template>
    <div v-if="farmerRequests">
        <div class="inline-block" v-for="request in farmerRequests" :key="request.id">
            <div class="mx-auto mb-2 flex w-72 flex-col items-center gap-2">
                <VCard
                    :nameAnimal="request.animal_name"
                    :specie="request.specie_name"
                    :race="request.race_name"
                    :farmer="request.farmer_name"
                    :message="request.message"
                    @accept="onSubmit(request.id, true)"
                    @reject="onSubmit(request.id, false)"
                />
            </div>
        </div>
    </div>
</template>
