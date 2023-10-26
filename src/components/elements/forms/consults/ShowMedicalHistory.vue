<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { vetappApi } from '@/services';
import { VUpgradeableTextarea } from '@elements';
import { formatDate } from '@/helpers';

const route = useRoute();
const diagnosisAnimal = ref();
const animalId = computed(() => String(route.params.id));

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
    <div v-if="diagnosisAnimal" class="m-2 flex flex-col">
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
</template>
