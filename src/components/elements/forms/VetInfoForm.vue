<script setup lang="ts">
import { VButton, VTextField, VLoader } from '@elements';
import * as yup from 'yup';
import type { TUpdateVetInformation } from '@/types';
import { useForm } from 'vee-validate';
import { vetappApi, TUpdateVetInformationPayload } from '@/services';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const emit = defineEmits(['end']);

const validationSchema = yup.object({
    license: yup.number().required(t('VetPage.vallicense')),
    licenseExpiryDate: yup.string().required(t('VetPage.valexp')),
});

const { handleSubmit, isSubmitting } = useForm<TUpdateVetInformation>({
    validationSchema,
});

const onSubmit = handleSubmit(async (values: TUpdateVetInformation) => {
    try {
        const payload: TUpdateVetInformationPayload = {
            license_number: values.license,
            license_expiry_date: values.licenseExpiryDate,
        };
        await vetappApi.updateVetInformation(payload);
       // emit('end');
       // window.location.reload();
    } catch (error) {}
});
</script>
<template>
    <ShowWorkExperience />
    <form @submit="onSubmit" class="grid grid-cols-1 gap-4 sm:grid-cols-6">
        <VTextField
            containerClass="sm:col-span-3"
            name="license"
            type="number"
            :label="t('VetPage.license')"
            :placeholder="t('VetPage.license2')"
        />

        <VTextField
            containerClass="sm:col-span-3"
            name="licenseExpiryDate"
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
