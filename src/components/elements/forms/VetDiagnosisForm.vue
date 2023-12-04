<script setup lang="ts">
import { vetappApi, TDiagnosisCreatePayload } from '@/services';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import type { TDiagnosis } from '@/types';
import { VTextArea, VButton, VLoader } from '@elements';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const route = useRoute();

const validationSchema = yup.object({
    diagnosis: yup.string().required(t('VetPage.valdiag2')),
    treatment: yup.string().required(t('VetPage.valtrat2')),
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
            <VTextArea name="diagnosis" :label="t('VetPage.diag')" :placeholder="t('VetPage.valdiag')" />
            <VTextArea name="treatment" :label="t('VetPage.trat')" :placeholder="t('VetPage.valtrat')" />
        </div>
        <div class="flex items-center justify-center gap-4">
            <VButton :label="t('VetPage.cancel')" variant="danger" />
            <VButton type="submit" variant="success">
                <div v-if="isSubmitting" class="flex items-center gap-2">
                    <VLoader class="h-6" />
                    <span>{{ $t('VetPage.send') }}</span>
                </div>
                <template v-else>{{ $t('VetPage.agreg') }}</template>
            </VButton>
        </div>
    </form>
</template>
