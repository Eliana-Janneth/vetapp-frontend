<script setup lang="ts">
import { VButton, VTextField, VLoader } from '@elements';
import * as yup from 'yup';
import type { TWorkExperience } from '@/types';
import { useForm } from 'vee-validate';
import { vetappApi, TWorkExperiencePayload } from '@/services';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const emit = defineEmits(['end']);

const validationSchema = yup.object({
    license: yup.string().required(t('VetPage.vallicense')),
    licenseExpirity: yup.string().required(t('VetPage.valexp')),
});

const { handleSubmit, isSubmitting } = useForm<TWorkExperience>({
    validationSchema,
});

const onSubmit = handleSubmit(async (values: TWorkExperience) => {
    try {
        const payload: TWorkExperiencePayload = {
            title: values.position,
            company: values.company,
            functions: values.functions,
            start_date: values.startDate,
            end_date: values.endDate,
            country: values.country,
            currently: values.currentlyWorking,
        };
        await vetappApi.createWorkExperiencie(payload);
        emit('end');
    } catch (error) {}
});
</script>
<template>
    <ShowWorkExperience />
    <form @submit="onSubmit" class="grid grid-cols-1 gap-4 sm:grid-cols-6">
        <VTextField
            containerClass="sm:col-span-3"
            name="license"
            :label="t('VetPage.license')"
            :placeholder="t('VetPage.license2')"
        />

        <VTextField
            containerClass="sm:col-span-3"
            name="licenseExpirity"
            :label="t('VetPage.expdate')"
            type="date"
        />

        <VButton class="w-full sm:col-span-3" @click="$emit('end')" :label="t('VetPage.cancel')" variant="danger" />
        <VButton class="w-full sm:col-span-3" type="submit" variant="success">
            <div v-if="isSubmitting" class="flex items-center gap-2">
                <VLoader class="h-6" />
                <span>{{ $t("VetPage.send") }}</span>
            </div>
            <template v-else>{{ $t("VetPage.save") }}</template>
        </VButton>
    </form>
</template>
