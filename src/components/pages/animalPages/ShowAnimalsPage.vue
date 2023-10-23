<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { vetappApi } from '@/services';
import { VDetails } from '@elements';
import { formatDate } from '@/helpers';

const route = useRoute();
const animal = ref();
const animalId = computed(() => route.params.id.toString());
const diagnosisAnimal = ref();

vetappApi
    .getDiagnosisFarmer(animalId.value)
    .then((res) => {
        diagnosisAnimal.value = res;
    })
    .catch((err) => {
        console.log(err);
    });

vetappApi
    .getAnimal(animalId.value)
    .then((res) => {
        animal.value = res;
    })
    .catch((err) => {
        console.log(err);
        animal.value = null;
    });
    // const onUpdate = handleSubmit(async () => {
//     try {
//         await vetappApi.updateAnimal( editedDescription.value, animalId.value);
//         console.log(editedDescription.value)
//         console.log('Animal actualizado');
//     } catch (error) {
//         console.error('Error al actualizar el animal:', error);
//     }
// });
</script>

<template>
    <pre>{{ animalId }}</pre>
    <div v-if="animal" class="m-4 border border-x-2 border-emerald-200/50 p-2">
        <VDetails class="border-t-0" label="Nombre" :description="animal.name" :update="true" />
        <VDetails label="Especie" :description="animal.specie_name" />
        <VDetails label="Raza" :description="animal.race_name" />
        <VDetails label="Color" :description="animal.color" :update="true" />
        <VDetails label="Género" :description="animal.gender" />
        <VDetails label="Fecha de Nacimiento" :description="animal.birth_date" :update="true" />
        <VDetails label="Peso" :description="animal.weight" :update="true" />
        <VDetails label="Altura" :description="animal.height" :update="true" />
        <VDetails class="border-b-0" label="Descripción" :description="animal.description" :update="true" />
    </div>
    <p v-if="animal === undefined">Cargando animal...</p>
    <p v-else-if="animal === null">El animal no existe</p>

    <div v-if="diagnosisAnimal" class="m-2 flex flex-col">
        <div class="" v-for="diagnosisA in diagnosisAnimal" :key="diagnosisA.id">
            <div class="mx-auto mb-2 ml-2 mr-2 flex flex-col items-center rounded-lg bg-sky-100/70 p-2">
                <VDetails
                    custom-class="font-semibold"
                    label="Fecha"
                    :description="formatDate(diagnosisA.create_date)"
                />
                <VDetails
                    v-if="diagnosisA.update_date != diagnosisA.create_date"
                    label="Fecha Modificación"
                    :description="formatDate(diagnosisA.update_date)"
                />
                <VDetails label="Diagnostico" :description="diagnosisA.diagnosis" />
                <VDetails label="Tratamiento" :description="diagnosisA.treatment" />
                <VDetails label="Veterinario" :description="diagnosisA.vet_name" />
            </div>
        </div>
    </div>
</template>
