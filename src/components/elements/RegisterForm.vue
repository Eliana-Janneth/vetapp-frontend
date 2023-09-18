<script setup lang="ts">
import {
    UserIcon,
    UserPlusIcon,
    IdentificationIcon,
    PhoneIcon,
    BuildingOffice2Icon,
    HomeIcon,
} from '@heroicons/vue/24/outline';
import { RegisterInput } from '@elements';
import { useForm, useFormValues } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required('Por favor ingrese su nombre'),
    lastName: yup.string().required('Por favor ingrese su apellido'),
    identification: yup.number().required('Por favor ingrese su Cédula').max(10, 'La cédula debe tener 10 dígitos'),
    phone: yup.number().required('Por favor ingrese su número de contacto').max(10, 'El número debe tener 10 dígitos'),
    city: yup.string().required('Por favor ingrese su municipio'),
    address: yup.string().required('Por favor ingrese su dirección de residencia'),
});

const { defineInputBinds, errors } = useForm({
    validationSchema: schema,
});

const name = defineInputBinds('nombre');
const lastName = defineInputBinds('lastName');
const identification = defineInputBinds('identification');
const phone = defineInputBinds('phone');
const city = defineInputBinds('city');
const address = defineInputBinds('address');
</script>

<template>
    <RegisterInput v-bind="name" label="Nombre" placeholder="Nombre" type="text" name="name" :icon="UserIcon" />
    <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.name }}</span>

    <RegisterInput
        v-bind="lastName"
        label="Apellido"
        placeholder="Apellido"
        type="text"
        name="lastName"
        :icon="UserPlusIcon"
    />
    <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.lastName }}</span>

    <RegisterInput
        v-bind="identification"
        label="Identificación"
        placeholder="Cédula"
        type="text"
        name="id"
        :icon="IdentificationIcon"
    />
    <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.identification }}</span>

    <RegisterInput
        v-bind="phone"
        label="Celular"
        placeholder="Número de contacto"
        type="number"
        name="phone"
        :icon="PhoneIcon"
    />
    <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.phone }}</span>

    <RegisterInput
        v-bind="city"
        label="Municipio"
        placeholder="Municipio de residencia"
        type="text"
        name="city"
        :icon="BuildingOffice2Icon"
    />
    <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.city }}</span>

    <RegisterInput
        v-bind="address"
        label="Dirección"
        placeholder="Dirección"
        type="text"
        name="address"
        :icon="HomeIcon"
    ></RegisterInput>
    <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.address }}</span>

    <button class="login-button">Registrate</button>
</template>
