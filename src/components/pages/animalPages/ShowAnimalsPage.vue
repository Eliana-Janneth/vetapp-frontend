<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { VDetailsEdit } from '@elements';

const route = useRoute();
const animal = ref();

vetappApi
    .getAnimal(route.params.id.toString())
    .then((res) => {
        animal.value = res;
    })
    .catch((err) => {
        console.log(err);
        animal.value = null;
    });
</script>

<template>
    <div v-if="animal" class="m-4 border border-x-2 border-emerald-200/50 p-2">
        <VDetailsEdit class="border-t-0" label="Nombre" :description="animal.name" />
        <VDetailsEdit label="Especie" :description="animal.specie_name" />
        <VDetailsEdit label="Raza" :description="animal.race_name" />
        <VDetailsEdit label="Color" :description="animal.color" />
        <VDetailsEdit label="Género" :description="animal.gender" />
        <VDetailsEdit label="Fecha de Nacimiento" :description="animal.birth_date" />
        <VDetailsEdit label="Peso" :description="animal.weight" />
        <VDetailsEdit label="Altura" :description="animal.height" />
        <VDetailsEdit class="border-b-0" label="Descripción" :description="animal.description" />
    </div>
    <p v-if="animal === undefined">Cargando animal...</p>
    <p v-else-if="animal === null">El animal no existe</p>
</template>
