<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi, TRequestFarmerPayload } from '@/services';
import { VCardAnimal } from '@elements';
import loader from '@/assets/loader.svg';

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
    <img class="h-20" :src="loader" v-if="farmerRequests === undefined" />
    <p v-else-if="farmerRequests === null">No hay solicitudes nuevas</p>
    <div v-else class="inline-block" v-for="request in farmerRequests" :key="request.id">
        <div class="mx-auto mb-2 flex w-72 flex-col items-center gap-2">
            <VCardAnimal
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
</template>
