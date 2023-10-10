<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, reactive} from 'vue';
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
    .getDiagnosis(route.params.id.toString())
    .then((res) => {
        diagnosisAnimal.value = res;
    })
    .catch((err) => {
        console.log(err);
    });

</script>

<template>
    <div class="bg-sky-100/70">
    <div class="inline-block" v-for="diagnosisA in diagnosisAnimal" :key=" diagnosisA.id">
        <VDetails label="Fecha" :description=" diagnosisA.create_date" />
        <VDetails label="Diagnostico" :description=" diagnosisA.diagnosis" />
        <VDetails label="Tratamiento" :description=" diagnosisA.treatment" />
    </div>
</div>
</template>
