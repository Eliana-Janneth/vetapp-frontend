<script setup lang="ts">
import { VTitle, VetDiagnosisForm, VDetails, VUpgradeableTextarea } from '@elements';
import { useRoute } from 'vue-router';
import { vetappApi } from '@/services';
import loader from '@/assets/loader.svg';
import { ref, computed } from 'vue';
import { formatDate } from '@/helpers';

const route = useRoute();
const animal = ref();
const diagnosisAnimal = ref();
const animalId = computed(() => String(route.params.id));

vetappApi.getAnimalAuthorized(route.params.id.toString()).then((res) => {
    animal.value = res;
});
vetappApi
    .getDiagnosisVet(animalId.value)
    .then((res) => {
        diagnosisAnimal.value = res;
    })
    .catch((err) => {
        console.log(err);
    });

const onUpdateDiagnosis = (name: string, newValue: string, diagnosisId: string) => {
    vetappApi
        .updateDiagnosis(animalId.value, diagnosisId, { [name]: newValue })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};
</script>

<template>
    <div class="container w-full flex-col items-center">
        <VTitle>Historial Médico</VTitle>
        <VetDiagnosisForm />
        <img class="h-20" :src="loader" v-if="animal === undefined" />
        <p v-else-if="animal === null">El animal no existe</p>
        <div v-else class="m-4 border border-x-2 border-sky-200/50 p-8">
            <VDetails
                custom-class="font-semibold text-lg"
                label="Información Detallada De:"
                :description="animal.name"
            />
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

        <img class="h-20" :src="loader" v-if="animal === undefined" />
        <p v-else-if="diagnosisAnimal === null">El animal no tiene diagnosticos</p>
        <div v-else class="m-2 flex flex-col">
            <div class="" v-for="diagnosisA in diagnosisAnimal" :key="diagnosisA.id">
                <div class="mx-auto mb-2 ml-2 mr-2 flex flex-col items-center rounded-lg bg-sky-100/70 p-2">
                    <VUpgradeableTextarea
                        custom-class="font-semibold"
                        label="Fecha"
                        :value="formatDate(diagnosisA.create_date)"
                        :edit="false"
                    />
                    <VUpgradeableTextarea
                        v-if="diagnosisA.update_date != diagnosisA.create_date"
                        label="Fecha Modificación"
                        :value="formatDate(diagnosisA.update_date)"
                        :edit="false"
                    />

                    <VUpgradeableTextarea
                        label="Diagnostico"
                        :edit="true"
                        :value="diagnosisA.diagnosis"
                        @update="(newValue) => onUpdateDiagnosis('diagnosis', newValue, diagnosisA.id)"
                    />
                    <VUpgradeableTextarea
                        label="Tratamiento"
                        :edit="true"
                        :value="diagnosisA.treatment"
                        @update="(newValue) => onUpdateDiagnosis('treatment', newValue, diagnosisA.id)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
