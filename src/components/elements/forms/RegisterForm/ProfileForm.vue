<script setup lang="ts">
import { VInput } from '@elements';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import type { TRegisterFormProfile } from './types';
import {
    UserIcon,
    UserPlusIcon,
    IdentificationIcon,
    PhoneIcon,
    BuildingOffice2Icon,
    HomeIcon,
} from '@heroicons/vue/24/outline';



const emit = defineEmits(['done', 'cancel'])

const validationSchema = yup.object({
    firstName: yup.string().required('Por favor ingrese su nombre')
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(40, 'El nombre debe tener un máximo de 40 caracteres'),
    lastName: yup.string().required('Por favor ingrese su apellido')
        .min(2, 'El apellido debe tener al menos 2 caracteres')
        .max(40, 'El apellido debe tener un máximo de 40 caracteres'),
    document: yup.string().required('Por favor ingrese su Cédula')
        .matches(/^\d+$/, 'Por favor ingrese solo números')
        .max(10, 'La cédula debe tener un máximo de 10 dígitos'),
    phone: yup.string().required('Por favor ingrese su número de contacto')
        .matches(/^[\d+]+$/, 'Por favor ingrese solo números y el símbolo "+"')
        .max(15, 'El número de contacto debe tener un máximo de 15 dígitos')
        .min(7, 'El número de contacto debe tener al menos 7 dígitos'),
    city: yup.string().required('Por favor ingrese su municipio')
        .min(2, 'El municipio debe tener al menos 2 caracteres')
        .max(50, 'El municipio debe tener un máximo de 50 caracteres'),
    address: yup.string().required('Por favor ingrese su dirección de residencia')
        .min(5, 'La dirección debe tener al menos 5 caracteres')
        .max(100, 'La dirección debe tener un máximo de 100 caracteres'),
});

const { handleSubmit, defineComponentBinds, errors, meta } = useForm<TRegisterFormProfile>({ validationSchema });

const firstName = defineComponentBinds('firstName');
const lastName = defineComponentBinds('lastName');
const document = defineComponentBinds('document');
const phone = defineComponentBinds('phone');
const city = defineComponentBinds('city');
const address = defineComponentBinds('address');

const onSubmit = handleSubmit((values) => {
    emit('done', values);
});
</script>

<template>
    <form @submit="onSubmit" class="flex flex-col items-center gap-y-4 p-2">
        <div class="flex w-full flex-col gap-4 lg:flex-row">
            <VInput v-bind="firstName" label="Nombre" name="name" placeholder="Nombre" :icon="UserIcon" :maxlength="40"
                :error="errors.firstName" />

            <VInput v-bind="lastName" label="Apellido" placeholder="Apellido" name="lastName" :icon="UserPlusIcon"
                :maxlength="40" :error="errors.lastName" />
        </div>

        <VInput v-bind="document" label="Identificación" placeholder="Cédula" type="number" name="document"
            :icon="IdentificationIcon" :maxlength="12" :error="errors.document" />

        <VInput v-bind="phone" label="Celular" placeholder="Número de contacto" type="number" name="phone" :icon="PhoneIcon"
            :maxlength="15" :error="errors.phone" />

        <VInput v-bind="city" label="Municipio" placeholder="Municipio de residencia" name="city"
            :icon="BuildingOffice2Icon" :maxlength="50" :error="errors.city" />

        <VInput v-bind="address" label="Dirección" placeholder="Dirección" name="address" :icon="HomeIcon" :maxlength="100"
            :error="errors.address" />

        <div class="flex gap-4 w-full justify-center">
            <button :disabled="!meta.valid" type="submit"
                :class="['btn btn-primary', !meta.valid && 'opacity-50 pointer-events-none']">Registrarse</button>
                <button @click="emit('cancel')" class="btn btn-primary">Cancelar</button>
        </div>
    </form>
</template>
