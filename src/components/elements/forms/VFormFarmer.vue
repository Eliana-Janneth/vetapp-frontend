<script setup lang="ts">
import { VInput } from '@elements';
import { useForm } from 'vee-validate';
import { reactive, onMounted } from 'vue';
import type { TUserInformation } from './types';
import { TUserInformationPayload, vetappApi } from '@/services';

let values: TUserInformationPayload = reactive({
    email: '',
    first_name: '',
    last_name: '',
    document_number: '',
    phone_number: '',
    city: '',
    address: '',
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
const {  defineComponentBinds } = useForm<TUserInformation>({  });

const firstName = defineComponentBinds('firstName');
const lastName = defineComponentBinds('lastName');
const document = defineComponentBinds('document');
const phone = defineComponentBinds('phone');
const city = defineComponentBinds('city');
const address = defineComponentBinds('address');
const email= defineComponentBinds('email');

</script>
<template>
    <form class="flex flex-col gap-2 bg-white p-2">
        <div class="flex flex-col gap-2 lg:flex-row">
            <VInput
                v-bind="firstName"
                :model-value= "values.first_name"
                variant="farmer"
                label-color="text-emerald-800"
                label="Nombre"
                placeholder="Escriba su nombre"
                type="text"
                name="first_name"
                :value="values.first_name"
            />
            <VInput
                v-bind="lastName"
                :model-value="values.last_name"
                variant="farmer"
                label-color="text-emerald-800"
                label="Apellido"
                placeholder="Escriba su apellido"
                type="text"
                name="last_name"
            />
        </div>
        <div class="flex flex-col gap-2 lg:flex-row">
            <VInput
                v-bind="document"
                :model-value="values.document_number"
                variant="farmer"
                label-color="text-emerald-800"
                label="Documento de Identidad"
                placeholder="Escriba su documento de identidad"
                type="text"
                name="document_number"
            />
            <VInput
                v-bind="email"
                :model-value="values.email"
                variant="farmer"
                label-color="text-emerald-800"
                label="Correo Electrónico"
                placeholder="Escriba su correo electrónico"
                type="email"
                name="email"
            />
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
        </div>
        <div class="flex flex-col gap-2 lg:flex-row">
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
        </div>

    </form>
</template>
