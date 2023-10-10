<script setup lang="ts">
import { VSpan, VButton } from '@elements';
import { useForm } from 'vee-validate';
import { reactive, onMounted } from 'vue';
import type { TFarmerInformation } from './types';
import { TFarmerInformationPayload, vetappApi } from '@/services';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, IdentificationIcon, MapIcon } from '@heroicons/vue/24/outline';

const values: TFarmerInformationPayload = reactive({
    email: '',
    first_name: '',
    last_name: '',
    document_number: '',
    phone_number: '',
    city: '',
    address: '',
    password: '',
    repeat_password: '',
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
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
const { defineComponentBinds } = useForm<TFarmerInformation>({});

const firstName = defineComponentBinds('firstName');
const lastName = defineComponentBinds('lastName');
const document = defineComponentBinds('document');
const phone = defineComponentBinds('phone');
const city = defineComponentBinds('city');
const address = defineComponentBinds('address');
const email = defineComponentBinds('email');
</script>
<template>
    <form class="mx-auto flex w-full flex-col items-center gap-2 rounded-lg bg-emerald-100/70 p-2">
        <div class="flex flex-col gap-2 lg:flex-row">
            <VSpan
                v-bind="firstName"
                custom-class="uppercase font-semibold text-xl"
                variant="farmer"
                :label="values.first_name"
                name="first_name"
            />
            <VSpan
                v-bind="lastName"
                custom-class="uppercase font-semibold text-xl"
                variant="farmer"
                :label="values.last_name"
                name="last_name"
            />
        </div>
        <div class="flex flex-col gap-2">
            <VSpan
                v-bind="document"
                variant="farmer"
                :label="values.document_number"
                name="document_number"
                :icon="IdentificationIcon"
            />
            <VSpan v-bind="email" variant="farmer" :label="values.email" name="email" :icon="EnvelopeIcon" />
            <VSpan v-bind="phone" variant="farmer" :label="values.phone_number" name="phone_number" :icon="PhoneIcon" />
            <VSpan v-bind="address" variant="farmer" :label="values.address" name="address" :icon="MapPinIcon" />
            <VSpan v-bind="city" variant="farmer" :label="values.city" name="city" :icon="MapIcon" />
        </div>
        <VButton label="Actualizar Datos" variant="farmer" type="button" custom-class="mt-4" />
    </form>
</template>
