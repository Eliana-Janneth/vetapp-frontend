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
    <p v-if="animal === undefined">Cargando animal...</p>
    <p v-else-if="animal === null">El animal no existe</p>

    <VDetailsEdit label="Nombre" :description="animal.name" />
    <VDetailsEdit label="Especie" :description="animal.specie_name" />
    <VDetailsEdit label="Raza" :description="animal.race_name" />
    <VDetailsEdit label="Color" :description="animal.color" />
    <VDetailsEdit label="Género" :description="animal.gender" />
    <VDetailsEdit label="Fecha de Nacimiento" :description="animal.birth_date" />
    <VDetailsEdit label="Peso" :description="animal.weight" />
    <VDetailsEdit label="Altura" :description="animal.height" />
    <VDetailsEdit label="Descripción" :description="animal.description" />
</template>
