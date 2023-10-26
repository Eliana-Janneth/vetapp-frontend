<script setup lang="ts">
import { VSpan, VInput } from '@elements';
import {  ref } from 'vue';
import loader from '@/assets/loader.svg';
import {  vetappApi } from '@/services';
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    IdentificationIcon,
    MapIcon,
    CalendarDaysIcon,
} from '@heroicons/vue/24/outline';

const handleToggle = (async (name: string, value: boolean) => {
    try {
        await vetappApi.updateAvailability( { [name]: value });
        console.log('Disponibilidad actualizada');
    } catch (error) {
        console.error('Error al actualizar la disponibilidad:', error);
    }
});

const vetInformation = ref();
vetappApi.getUser().then((response) => {
    vetInformation.value = response;
    console.log(vetInformation.value);
});

</script>
<template>
    <img class="h-20" :src="loader" v-if="vetInformation === undefined" alt="Cargando información"/>
    <p v-else-if="vetInformation === null">El animal no existe</p>
    <form v-else class="mx-auto flex w-80 flex-col items-center gap-2 rounded-lg bg-sky-100/70 p-2">
        <div class="flex flex-col gap-2 lg:flex-row">
            <VSpan
                custom-class="uppercase font-semibold text-lg"
                variant="vet"
                :label="`${vetInformation.first_name} ${vetInformation.last_name}`"
            />
        </div>
        <div class="flex flex-col gap-2">
            <VSpan variant="vet" :label="vetInformation.document_number" :icon="IdentificationIcon" />
            <VSpan variant="vet" :label="vetInformation.email" :icon="EnvelopeIcon" />
            <VSpan variant="vet" :label="vetInformation.phone_number" :icon="PhoneIcon" />
            <VSpan variant="vet" :label="vetInformation.address" :icon="MapPinIcon" />
            <VSpan variant="vet" :label="vetInformation.city" :icon="MapIcon" />
            <VSpan variant="vet" :label="vetInformation.license_number" :icon="IdentificationIcon" />
            <VSpan variant="vet" :label="vetInformation.license_expiry_date" :icon="CalendarDaysIcon" />
        </div>
        <label class="flex items-center space-x-2">
            <VInput
                id="toggle-checkbox"
                type="checkbox"
                class="form-checkbox h-5 w-5"
                :checked=vetInformation.available
                @change="handleToggle('available', $event.target.checked)"
            />
            <span class="text-gray-700">Activar/Desactivar</span>
        </label>
    </form>
</template>
