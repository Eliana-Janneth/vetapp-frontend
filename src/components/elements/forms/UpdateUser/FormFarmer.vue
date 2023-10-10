<script setup lang="ts">
import { VInput, VButton } from '@elements';
import { useForm } from 'vee-validate';
import { reactive, onMounted } from 'vue';
import type { TFarmerInformation } from './types';
import { TFarmerInformationPayload, vetappApi } from '@/services';

let values: TFarmerInformationPayload = reactive({
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

const emit = defineEmits(['done', 'cancel']);

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
        values.password = userData.password;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
const { defineComponentBinds } = useForm<TFarmerInformation>({});

const phone = defineComponentBinds('phone');
const city = defineComponentBinds('city');
const address = defineComponentBinds('address');
const password = defineComponentBinds('password');
</script>
<template>
    <form class="flex w-full flex-col gap-2 rounded-lg bg-white p-2">
        <div class="flex flex-col gap-2">
            <VInput
                v-bind="phone"
                :model-value="values.phone_number"
                variant="farmer"
                label-color="text-emerald-800"
                label="Número de Teléfono"
                placeholder="Escriba su número de teléfono"
                type="text"
                name="phone_number"
            />

            <VInput
                v-bind="address"
                :model-value="values.address"
                variant="farmer"
                label-color="text-emerald-800"
                label="Dirección"
                placeholder="Escriba su dirección"
                type="text"
                name="address"
            />
            <VInput
                v-bind="city"
                :model-value="values.city"
                variant="farmer"
                label-color="text-emerald-800"
                label="Municipio"
                placeholder="Escriba su municipio"
                type="text"
                name="city"
            />
            <VInput
                v-bind="password"
                :model-value="values.password"
                variant="farmer"
                label-color="text-emerald-800"
                label="Contraseña"
                placeholder="Escriba su nueva contraseña"
                type="text"
                name="city"
            />
        </div>
        <VButton label="Guardar" variant="farmer" type="button" custom-class="mt-4" />
    </form>
</template>
