<script setup lang="ts">
import { vetappApi, TDiagnosisCreatePayload } from '@/services';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import type { TDiagnosis } from '@/types';
import { VTextArea, VButton, VLoader } from '@elements';
import { useRoute } from 'vue-router';

const route = useRoute();

const validationSchema = yup.object({
    diagnosis: yup.string().required('Por favor ingrese un diagnóstico'),
    treatment: yup.string().required('Por favor ingrese un tratamiento'),
});

const { handleSubmit, isSubmitting } = useForm<TDiagnosis>({
    validationSchema,
});

const onSubmit = handleSubmit(async (values) => {
    try {
        const payload: TDiagnosisCreatePayload = {
            diagnosis: values.diagnosis,
            treatment: values.treatment,
        };
        await vetappApi.createDiagnosis(payload, route.params.id.toString());
    } catch (error) {}
});


</script>
<template>
    <form class="mx-3.5 flex flex-col gap-4 rounded-lg bg-sky-100/70 p-4" @submit="onSubmit">
        <div class="flex flex-col gap-4 lg:flex-row">
            <VTextArea name="diagnosis" label="Diagnóstico" placeholder="Escribe su Diagnóstico" />
            <VTextArea name="treatment" label="Tratamiento" placeholder="Escribe su Tratamiento" />
        </div>
        <div class="flex lg:flex-row flex-col justify-center gap-4 items-center ">
            <VButton label="Cancelar" variant="danger" />
            <VButton type="submit" variant="success">
                <div v-if="isSubmitting" class="flex items-center gap-2">
                    <VLoader class="h-6" />
                    <span>Enviando</span>
                </div>
                <template v-else> Agregar Diagnóstico </template>
            </VButton>
        </div>
    </form>
</template>
