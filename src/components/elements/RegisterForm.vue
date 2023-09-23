<script setup lang="ts">
import {
    UserIcon,
    UserPlusIcon,
    IdentificationIcon,
    PhoneIcon,
    BuildingOffice2Icon,
    HomeIcon,
} from '@heroicons/vue/24/outline';
import { RegisterInput, AlertInput } from '@elements';
import { useForm } from 'vee-validate';
// import * as yup from 'yup';

// const schema = yup.object({
//     name: yup
//     .string().required('Por favor ingrese su nombre'),
//     lastName: yup
//     .string().required('Por favor ingrese su apellido'),
//     identification: yup
//     .number().required('Por favor ingrese su Cédula').max(12, 'La cédula debe tener máximo 10 dígitos'),
//     phone: yup
//     .number().required('Por favor ingrese su número de contacto').max(15, 'El número debe tener 10 dígitos'),
//     city: yup
//     .string().required('Por favor ingrese su municipio'),
//     address: yup
//     .string().required('Por favor ingrese su dirección de residencia'),
// });

const { defineInputBinds, errors } = useForm({
    // validationSchema: schema,
});

const name = defineInputBinds('name');
const lastName = defineInputBinds('lastName');
const identification = defineInputBinds('identification');
const phone = defineInputBinds('phone');
const city = defineInputBinds('city');
const address = defineInputBinds('address');
</script>

<template>
    <div class="flex flex-col items-center gap-y-4 p-2">
        <RegisterInput v-bind="name" label="Nombre" name="name" placeholder="Nombre" type="text" :icon="UserIcon" />
        <span v-if="errors.name" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.name }}</span>

        <RegisterInput
            v-bind="lastName"
            label="Apellido"
            placeholder="Apellido"
            type="text"
            name="lastName"
            :icon="UserPlusIcon"
        />
        <AlertInput :error="errors.lastName" />
     

        <RegisterInput
            v-bind="identification"
            label="Identificación"
            placeholder="Cédula"
            type="text"
            name="identification"
            :icon="IdentificationIcon"
        />
        <span v-if="errors.identification" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{
            errors.identification
        }}</span>

        <RegisterInput
            v-bind="phone"
            label="Celular"
            placeholder="Número de contacto"
            type="number"
            name="phone"
            :icon="PhoneIcon"
        />
        <span v-if="errors.phone" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.phone }}</span>

        <RegisterInput
            v-bind="city"
            label="Municipio"
            placeholder="Municipio de residencia"
            type="text"
            name="city"
            :icon="BuildingOffice2Icon"
        />
        <span v-if="errors.city" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.city }}</span>

        <RegisterInput
            v-bind="address"
            label="Dirección"
            placeholder="Dirección"
            type="text"
            name="address"
            :icon="HomeIcon"
        ></RegisterInput>
        <span v-if="errors.address" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.address }}</span>

        <button class="login-button" type="submit">Registrate</button>
    </div>
</template>
