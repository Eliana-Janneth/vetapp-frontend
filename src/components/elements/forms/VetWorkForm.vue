<script setup lang="ts">
import {VButton, VTextField, VCheckbox,VLoader } from '@elements';
import * as yup from 'yup';
import type { TWorkExperience } from '@/types';
import { useForm } from 'vee-validate';
import { vetappApi, TWorkExperiencePayload } from '@/services';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const emit = defineEmits(['end']);

const validationSchema = yup.object({
    position: yup.string().required(t('VetPage.valposition2')),
    company: yup.string().required(t('VetPage.valcomp2')),
    functions: yup.string().required(t('VetPage.valfeatures2')),
    startDate: yup.string().required(t('VetPage.valdatei')),
    endDate: yup.string().required(t('VetPage.valdatef')),
    country: yup.string().required(t('VetPage.valcountry2')),
});

const { handleSubmit, isSubmitting} = useForm<TWorkExperience>({
    validationSchema,
});

const onSubmit = handleSubmit(async (values: TWorkExperience) => {
    try {
        if (!values.currentlyWorking) values.currentlyWorking = false;
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
        window.location.reload();
        
    } catch (error) {}
});
</script>
<template>
    <ShowWorkExperience />
    <form @submit="onSubmit" class="grid grid-cols-1 gap-4 sm:grid-cols-6">
        <VTextField containerClass="sm:col-span-3" name="position" :label="t('VetPage.position')" :placeholder="t('VetPage.valposition')" />

        <VTextField
            containerClass="sm:col-span-3"
            name="company"
            :label="t('VetPage.comp')"
            :placeholder="t('VetPage.valcomp')"
        />
        <VTextField
            containerClass="sm:col-span-2"
            name="startDate"
            :label="t('VetPage.datei')"
            type="date"
            :maxlength="4"
        />
        <VTextField
            containerClass="sm:col-span-2"
            name="endDate"
            :label="t('VetPage.datef')"
            type="date"
            :maxlength="4"
        />
        <VTextField
            containerClass="sm:col-span-2"
            name="country"
            :label="t('VetPage.country')"
            :placeholder="t('VetPage.valcountry3')"
            :maxlength="60"
        />
        <VTextField
            containerClass="sm:col-span-6"
            name="functions"
            :label="t('VetPage.features')"
            :placeholder="t('VetPage.valfeatures')"
            :maxlength="500"
        />
        <VCheckbox class="sm:col-span-6" name="currentlyWorking" :label="t('VetPage.actualwork')" />
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
