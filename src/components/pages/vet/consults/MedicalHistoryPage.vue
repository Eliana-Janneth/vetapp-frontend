<script setup lang="ts">
import { VTitle, VetDiagnosisForm, VDetails, VUpgradeableTextarea, VButton } from '@elements';
import { useRoute } from 'vue-router';
import { vetappApi } from '@/services';
import loader from '@/assets/loader.svg';
import { ref, computed } from 'vue';
import { formatDate } from '@/helpers';
import { TAnimalAuthorized, TDiagnosis } from '@/types';
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const animal = ref<TAnimalAuthorized>();
const diagnosisAnimal = ref<TDiagnosis[]>();
const animalId = computed(() => String(route.params.id));

vetappApi.getAnimalAuthorized(route.params.id.toString()).then((res) => {
    animal.value = res;
});
vetappApi.getDiagnosisVet(animalId.value).then((res) => {
    diagnosisAnimal.value = res;
});

const onUpdateDiagnosis = (name: string, newValue: string, diagnosisId: string) => {
    vetappApi.updateDiagnosis(animalId.value, diagnosisId, { [name]: newValue }).then((res) => {
        console.log(res);
    });
};

//TODO: cargar el veterinario
//TODO: Cuadrar el boton cancelae
</script>

<template>
    <div class="container w-full flex-col items-center">
        <div class="flex p-4">
        <VButton class="flex w-fit items-center rounded-full p-1" @click="$router.push({ name: 'patients.index' })"
            ><ArrowLeftCircleIcon class="h-7 w-7"
        /></VButton>

        <VTitle class="pl-4">Fórmula Médica</VTitle>
    </div>
        <VetDiagnosisForm />
        <VTitle class="pl-16 pt-6">Historial Médico</VTitle>

        <img class="h-20" :src="loader" v-if="animal === undefined" />
        <p v-else-if="animal === null">El animal no existe</p>
        <div v-else class="m-4 border border-x-2 border-sky-200/50 p-8">
            <VDetails
                custom-class="font-semibold text-lg"
                label="Información Detallada De:"
                :description="animal.name"  
            />
            <div class="flex flex-col lg:flex-row">
                <VDetails label="Especie" :description="animal.specie" />
                <VDetails label="Raza" :description="animal.race" />
            </div>
            <div class="flex flex-col lg:flex-row">
                <VDetails label="Fecha de Nacimiento" :description="animal.birthdate" />
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
                        :value="formatDate(diagnosisA.createDate)"
                        :edit="false"
                    />
                    <VUpgradeableTextarea
                        v-if="diagnosisA.updateDate != diagnosisA.createDate"
                        label="Fecha Modificación"
                        :value="formatDate(diagnosisA.updateDate)"
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
