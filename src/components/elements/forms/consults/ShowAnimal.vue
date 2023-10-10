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
    <p v-if="animal === undefined">Cargando animal...</p>
    <p v-else-if="animal === null">El animal no existe</p>

    <VDetails label="Nombre" :description="animal.name" />
    <VDetails label="Especie" :description="animal.specie_name" />
    <VDetails label="Raza" :description="animal.race_name" />
    <VDetails label="Color" :description="animal.color" />
    <VDetails label="Género" :description="animal.gender" />
    <VDetails label="Fecha de Nacimiento" :description="animal.birth_date" />
    <VDetails label="Peso" :description="animal.weight" />
    <VDetails label="Altura" :description="animal.height" />
    <VDetails label="Descripción" :description="animal.description" />
</template>
