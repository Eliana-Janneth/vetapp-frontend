<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, reactive } from 'vue';
import { TDiagnosisPayload, vetappApi } from '@/services';
import { VDetailsEdit, VDetails } from '@elements';

const route = useRoute();
const animal = ref();
const diagnosisAnimal = ref<TDiagnosisPayload[]>([]);

const TDiagnosisPayload = reactive({
    id: '',
    diagnosis: '',
    treatment: '',
    create_date: '',
});

vetappApi
    .getDiagnosisFarmer(route.params.id.toString())
    .then((res) => {
        diagnosisAnimal.value = res;
    })
    .catch((err) => {
        console.log(err);
    });

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

    <div v-if="diagnosisAnimal" class="m-2 flex flex-col">
        <div class="" v-for="diagnosisA in diagnosisAnimal" :key="diagnosisA.id">
            <div class="mx-auto mb-2 ml-2 mr-2 flex flex-col items-center rounded-lg bg-sky-100/70 p-2">
                <VDetails custom-class="font-semibold" label="Fecha" :description="diagnosisA.create_date" />
                <VDetails label="Diagnostico" :description="diagnosisA.diagnosis" />
                <VDetails label="Tratamiento" :description="diagnosisA.treatment" />
            </div>
        </div>
    </div>
</template>
