<script setup lang="ts">
import { VSpan, VButton, VRouter } from '@elements';
import { useForm } from 'vee-validate';
import { reactive, onMounted } from 'vue';
import type { TVetInformation } from './types';
import { TVetInformationPayload, vetappApi } from '@/services';
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    IdentificationIcon,
    MapIcon,
    CalendarDaysIcon,
} from '@heroicons/vue/24/outline';

let values: TVetInformationPayload = reactive({
    email: '',
    first_name: '',
    last_name: '',
    document_number: '',
    phone_number: '',
    city: '',
    address: '',
    password: '',
    repeat_password: '',
    license_number: '',
    license_expiry_date: '',
});

onMounted(async () => {
    try {
        const userData = await vetappApi.getUser();

        values.email = userData.email;
        values.first_name = userData.first_name;
        values.last_name = userData.last_name;
        values.document_number = userData.document_number;
        values.phone_number = userData.phone_number;
        values.city = userData.city;
        values.address = userData.address;
        values.license_number = userData.license_number;
        values.license_expiry_date = userData.license_expiry_date;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
const { defineComponentBinds } = useForm<TVetInformation>({});

const firstName = defineComponentBinds('firstName');
const document = defineComponentBinds('document');
const phone = defineComponentBinds('phone');
const city = defineComponentBinds('city');
const address = defineComponentBinds('address');
const email = defineComponentBinds('email');
const license = defineComponentBinds('license');
const licenseExpiration = defineComponentBinds('licenseExpiration');
</script>
<template>
    <form class="mx-auto flex w-1/2 flex-col items-center gap-2 rounded-lg bg-sky-100/70 p-2">
        <div class="flex flex-col gap-2 lg:flex-row">
            <VSpan
                v-bind="firstName"
                custom-class="uppercase font-semibold text-lg"
                variant="vet"
                :label="`${values.first_name} ${values.last_name}`"
                name="first_name"
            />
        </div>
        <div class="flex flex-col gap-2">
            <VSpan
                v-bind="document"
                variant="vet"
                :label="values.document_number"
                name="document_number"
                :icon="IdentificationIcon"
            />
            <VSpan v-bind="email" variant="vet" :label="values.email" name="email" :icon="EnvelopeIcon" />
            <VSpan v-bind="phone" variant="vet" :label="values.phone_number" name="phone_number" :icon="PhoneIcon" />
            <VSpan v-bind="address" variant="vet" :label="values.address" name="address" :icon="MapPinIcon" />
            <VSpan v-bind="city" variant="vet" :label="values.city" name="city" :icon="MapIcon" />
            <VSpan
                v-bind="license"
                variant="vet"
                :label="values.license_number"
                name="city"
                :icon="IdentificationIcon"
            />
            <VSpan
                v-bind="licenseExpiration"
                variant="vet"
                :label="values.license_expiry_date"
                name="city"
                :icon="CalendarDaysIcon"
            />
        </div>
        <VButton label="Actualizar Datos" variant="vet" type="button" custom-class="mt-4" />
        <VRouter label="Completar Perfil" route="" custom-class="mt-4" />
    </form>
</template>
