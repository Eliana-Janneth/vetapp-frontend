<script setup lang="ts">
import { reactive } from 'vue';
import { vetappApi, TDiagnosisPayload } from '@/services';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import type { TDiagnosis } from './types';
import { VTextArea, VButton } from '@elements';
import { useRoute } from 'vue-router';

const values: TDiagnosisPayload = reactive({
    id: '',
    diagnosis: '',
    treatment: '',
    create_date: '',
});
const route = useRoute();

const validationSchema = yup.object({
    diagnosis: yup.string().required('Por favor ingrese un diagnóstico'),
    treatment: yup.string().required('Por favor ingrese un tratamiento'),
});

const { defineComponentBinds, errors, handleSubmit } = useForm<TDiagnosis>({
    validationSchema,
});

const diagnosis = defineComponentBinds('diagnosis');
const treatment = defineComponentBinds('treatment');

const onSubmit = handleSubmit(async (diagnosisValues: TDiagnosis) => {
    try {
        values.diagnosis = diagnosisValues.diagnosis;
        values.treatment = diagnosisValues.treatment;

        await vetappApi.createDiagnosis(values, route.params.id.toString());
    } catch (error) {}
});
</script>
<template>
    <form class="mx-3.5 flex flex-col gap-4 rounded-lg bg-sky-100/70 p-4" @submit="onSubmit">
        <div class="flex flex-col gap-4 lg:flex-row">
            <VTextArea
                v-bind="diagnosis"
                label="Diagnóstico"
                placeholder="Escribe su Diagnóstico"
                :error="errors.diagnosis"
            />
            <VTextArea
                v-bind="treatment"
                label="Tratamiento"
                placeholder="Escribe su Tratamiento"
                :error="errors.treatment"
            />
        </div>
        <div class="flex justify-center">
            <VButton label="Agregar Diagnóstico" type="submit" />
        </div>
    </form>
</template>
