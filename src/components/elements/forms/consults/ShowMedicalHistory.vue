<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { vetappApi } from '@/services';
import { VButton, VDetails, VTextArea } from '@elements';
import { formatDate } from '@/helpers';

const route = useRoute();

const diagnosisAnimal = ref();
const idDiagnosis = ref();
vetappApi
    .getDiagnosisVet(route.params.id.toString())
    .then((res) => {
        diagnosisAnimal.value = res;
    })
    .catch((err) => {
        console.log(err);
    });

const onUpdateDiagnosis = (newData: string, idDiagnosis: string) => {
    console.log('newData', newData);
    console.log('id', diagnosisAnimal.value);

    vetappApi
        .updateDiagnosis(newData, route.params.id.toString(), idDiagnosis)
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
                <VDetails
                    label="Tratamiento"
                    :description="diagnosisA.treatment"
                    type="textArea"
                    :update="true"
                    :function-update="onUpdateDiagnosis"
                />
            </div>
        </div>
    </div>
</template>
