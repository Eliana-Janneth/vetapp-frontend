<script setup lang="ts">
import { ref } from 'vue';
import { vetappApi, TRequestFarmerPayload } from '@/services';
import { VCard } from '@elements';

const farmerRequests = ref<TRequestFarmerPayload[]>([]);

vetappApi
    .getFarmerRequestS()
    .then((response) => {
        farmerRequests.value = response;
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
</script>
<template>
    <div v-if="farmerRequests">
        <div class="inline-block" v-for="request in farmerRequests" :key="request.id">
            <div class="mx-auto gap-2 mb-2 flex w-72 flex-col items-center">
                
                <VCard
                    :nameAnimal="request.animal_name"
                    :specie="request.specie_name"
                    :race="request.race_name"
                    :farmer="request.farmer_name"
                    :message="request.message"
                />
            </div>
        </div>
    </div>
</template>
