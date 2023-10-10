<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { VDetails } from '@elements';

const route = useRoute();
const animal = ref();

vetappApi
    .getAnimalAuthorized(route.params.id.toString())
    .then((res) => {
        animal.value = res;
    })
    .catch((err) => {
        console.log(err);
        animal.value = null;
    });
</script>

<template>
    <div v-if="animal" class="m-4 border border-x-2 border-sky-200/50 p-8">
        <VDetails custom-class="font-semibold text-lg" label="Información Detallada De:" :description="animal.name" />
        <div class="flex flex-col lg:flex-row">
            <VDetails label="Especie" :description="animal.specie_name" />
            <VDetails label="Raza" :description="animal.race_name" />
        </div>
        <div class="flex flex-col lg:flex-row">
            <VDetails label="Fecha de Nacimiento" :description="animal.birth_date" />
            <VDetails label="Género" :description="animal.gender" />
        </div>
        <div class="flex flex-col lg:flex-row">
            <VDetails label="Peso" :description="animal.weight" />
            <VDetails label="Altura" :description="animal.height" />
        </div>
        <div class="flex flex-col lg:flex-row">
            <VDetails class="border-b-0" label="Color" :description="animal.color" />
            <VDetails class="border-b-0" label="Descripción" :description="animal.description" />
        </div>
    </div>
    <p v-if="animal === undefined">Cargando animal...</p>
    <p v-else-if="animal === null">El animal no existe</p>
</template>
