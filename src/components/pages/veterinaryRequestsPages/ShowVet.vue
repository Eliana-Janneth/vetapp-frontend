<script setup lang="ts">
import { VSpan } from '@elements';
import { useForm } from 'vee-validate';
import { reactive, onMounted } from 'vue';
import type { TVetInformation } from './types';
import { TVetInformationPayload, vetappApi } from '@/services';
import { IdentificationIcon, MapIcon, CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { useRoute } from 'vue-router';
import ShowInformationAcademic  from './ShowInformationAcademic.vue';
import ShowWorkExperience from './ShowWorkExperience.vue';

const route = useRoute();


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
});

onMounted(async () => {
    try {
        const userData = await vetappApi.getVetInformation(route.params.id.toString());
        values.first_name = userData.first_name;
        values.last_name = userData.last_name;
        values.city = userData.city;
        values.license_number = userData.license_number;
        values.license_expiry_date = userData.license_expiry_date;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
const { defineComponentBinds } = useForm<TVetInformation>({});

const firstName = defineComponentBinds('firstName');
const city = defineComponentBinds('city');
const license = defineComponentBinds('license');
const licenseExpiration = defineComponentBinds('licenseExpiration');

</script>
<template>
    <div class="flex flex-col">
    <form class="mx-auto flex w-80 flex-col items-center gap-2 rounded-lg bg-sky-100/70 p-2">
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
    </form>
    <ShowInformationAcademic />
    <ShowWorkExperience />
</div>
</template>
