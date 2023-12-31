<script setup lang="ts">
import { VButton, VCheckbox, VLoader, VTextField } from '@elements';
import * as yup from 'yup';
import type { TAcademicInformation } from '@/types';
import { useForm } from 'vee-validate';
import { vetappApi, TAcademicInformationPayload } from '@/services';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const emit = defineEmits(['end']);

const validationSchema = yup.object({
    title: yup.string().required(t('VetPage.val2titulo')),
    university: yup.string().required(t('VetPage.valu2')),
    year: yup.string().required(t('VetPage.valdatei')),
    country: yup.string().required(t('VetPage.valcountry2')),
    academicDegree: yup.string().required(t('VetPage.valacademicg')),
});

const { handleSubmit, isSubmitting } = useForm<TAcademicInformation>({
    validationSchema,
});

const onSubmit = handleSubmit(async (values: TAcademicInformation) => {
    try {
        if (!values.currentlyStudying) values.currentlyStudying = false;
        const payload: TAcademicInformationPayload = {
            title: values.title,
            university: values.university,
            year: values.year,
            country: values.country,
            academic_degree: values.academicDegree,
            currently: values.currentlyStudying,
        };

        await vetappApi.createAcademicInformation(payload);
        emit('end');
        window.location.reload();
    } catch (error) {}
});
</script>
<template>
    <form @submit="onSubmit" class="grid grid-cols-1 gap-4 sm:grid-cols-6">
        <VTextField
            containerClass="sm:col-span-3"
            name="title"
            :label="t('VetPage.titulo')"
            :placeholder="t('VetPage.valtitulo')"
        />
        <VTextField
            containerClass="sm:col-span-3"
            name="university"
            :label="t('VetPage.u')"
            :placeholder="t('VetPage.valu')"
        />

        <VTextField containerClass="sm:col-span-2" name="year" :label="t('VetPage.datei')" type="date" :maxlength="4" />
        <VTextField
            containerClass="sm:col-span-2"
            name="country"
            :label="t('VetPage.country')"
            :placeholder="t('VetPage.valcountry')"
            :maxlength="60"
        />
        <VTextField
            containerClass="sm:col-span-2"
            name="academicDegree"
            :label="t('VetPage.academicg')"
            :placeholder="t('VetPage.academicg')"
            :maxlength="60"
        />

        <VCheckbox class="sm:col-span-6" name="currentlyStudying" :label="t('VetPage.actualstudy')" />

        <VButton class="w-full sm:col-span-3" @click="$emit('end')" :label="t('VetPage.cancel')" variant="danger" />
        <VButton class="w-full sm:col-span-3" type="submit" variant="success">
            <div v-if="isSubmitting" class="flex items-center gap-2">
                <VLoader class="h-6" />
                <span>{{ $t('VetPage.send') }}</span>
            </div>
            <template v-else>{{ $t('VetPage.save') }}</template>
        </VButton>
    </form>
</template>
