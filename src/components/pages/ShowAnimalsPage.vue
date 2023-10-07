<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { VSpan } from '@elements';

const route = useRoute();
const animal = ref();
vetappApi.getAnimal(route.params.id.toString()).then((res) => {
    animal.value = res;
}).catch((err) => {
    console.log(err);
    animal.value = null;
});


</script>

<template>
    <p v-if="animal === undefined">Cargando animal...</p>
    <p v-else-if="animal === null">El animal no existe</p>
    <p v-else>{{ animal }}</p>

    <VSpan custom-class="capitalize " variant="farmer" :label="animal.name" name="first_name" />
    <VSpan custom-class="capitalize " variant="farmer" :label="animal.specie_name" name="first_name" />
    <VSpan custom-class="capitalize " variant="farmer" :label="animal.race_name" name="first_name" />
    <VSpan custom-class="capitalize " variant="farmer" :label="animal.color" name="first_name" />
    <VSpan custom-class="capitalize " variant="farmer" :label="animal.gender" name="first_name" />
    <VSpan custom-class="capitalize " variant="farmer" :label="animal.birth_date" name="first_name" />
    <VSpan custom-class="capitalize " variant="farmer" :label="animal.weight" name="first_name" />
    <VSpan custom-class="capitalize " variant="farmer" :label="animal.height" name="first_name" />
    <VSpan custom-class="capitalize " variant="farmer" :label="animal.description" name="description" />
</template>
