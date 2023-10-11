<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, reactive } from 'vue';
import { TDiagnosisPayload, vetappApi } from '@/services';
import { VDetails } from '@elements';

const route = useRoute();
const TDiagnosisPayload = reactive({
    id: '',
    diagnosis: '',
    treatment: '',
    create_date: '',
});

const diagnosisAnimal = ref<TDiagnosisPayload[]>([]);

vetappApi
    .getDiagnosisVet(route.params.id.toString())
    .then((res) => {
        diagnosisAnimal.value = res;
    })
    .catch((err) => {
        console.log(err);
    });
</script>

<template>
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
