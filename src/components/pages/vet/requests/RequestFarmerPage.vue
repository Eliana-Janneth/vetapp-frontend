<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi, TRequestFarmerPayload } from '@/services';
import { VCardAnimal } from '@elements';
import loader from '@/assets/loader.svg';

const farmerRequests = ref<TRequestFarmerPayload[]>([]);

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
    <img class="h-20" :src="loader" v-if="farmerRequests === undefined" />
    <p v-else-if="farmerRequests === null">No hay solicitudes nuevas</p>
    <div v-else class="flex flex-wrap" v-for="request in farmerRequests" :key="request.id">
        <div class=" mb-2 w-72 flex justify-center gap-2 bg-white">
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
