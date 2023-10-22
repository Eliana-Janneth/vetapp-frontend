<script setup lang="ts">
import { VSpan, VInput } from '@elements';
import { useForm } from 'vee-validate';
import { reactive, onMounted } from 'vue';
import type { TVetAvailability } from './types';
import { TVetInformationPayload, TCreateAvailabilityPayload, vetappApi } from '@/services';
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    IdentificationIcon,
    MapIcon,
    CalendarDaysIcon,
} from '@heroicons/vue/24/outline';

const values: TVetInformationPayload = reactive({
    id: '',
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
    available: false,
});
const value: TCreateAvailabilityPayload = reactive({
    available: false,
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
        values.available= userData.available;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
const { defineComponentBinds, handleSubmit } = useForm<TVetAvailability>({});

const available = defineComponentBinds('available');

const handleToggle = handleSubmit(async (valueCheck: TVetAvailability) => {
    try {
        value.available = !valueCheck.available;
        await vetappApi.updateAvailability(value);
        console.log('Disponibilidad actualizada');
    } catch (error) {
        console.error('Error al actualizar la disponibilidad:', error);
    }
});
</script>
<template>
    <form class="mx-auto flex w-80 flex-col items-center gap-2 rounded-lg bg-sky-100/70 p-2">
        <div class="flex flex-col gap-2 lg:flex-row">
            <VSpan
                custom-class="uppercase font-semibold text-lg"
                variant="vet"
                :label="`${values.first_name} ${values.last_name}`"
                name="first_name"
            />
        </div>
        <div class="flex flex-col gap-2">
            <VSpan variant="vet" :label="values.document_number" name="document_number" :icon="IdentificationIcon" />
            <VSpan variant="vet" :label="values.email" name="email" :icon="EnvelopeIcon" />
            <VSpan variant="vet" :label="values.phone_number" name="phone_number" :icon="PhoneIcon" />
            <VSpan variant="vet" :label="values.address" name="address" :icon="MapPinIcon" />
            <VSpan variant="vet" :label="values.city" name="city" :icon="MapIcon" />
            <VSpan variant="vet" :label="values.license_number" name="city" :icon="IdentificationIcon" />
            <VSpan variant="vet" :label="values.license_expiry_date" name="city" :icon="CalendarDaysIcon" />
        </div>
        <label class="flex items-center space-x-2">
        <VInput
            v-bind="available"
            id="toggle-checkbox"
            type="checkbox"
            model-value="true"
            class="form-checkbox h-5 w-5"
            @change="handleToggle"
        />
        <span class="text-gray-700">Activar/Desactivar</span>
    </label>
    </form>
    
</template>
