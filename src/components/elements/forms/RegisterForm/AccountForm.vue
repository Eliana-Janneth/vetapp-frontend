<script setup lang="ts">
import { useForm } from 'vee-validate';
import { VInput, VSelect } from '@elements';
import type { TRegisterFormAccount } from './types';
import * as yup from 'yup';
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/vue/24/outline';

const emit = defineEmits(['done']);

const props = defineProps<{ initialValues?: TRegisterFormAccount }>();

const validationSchema = yup.object({
    email: yup
        .string()
        .required('Por favor ingrese un correo')
        .email('Debes ingresar un correo valido "alguien@example.com"')
        .min(10, 'El correo debe tener al menos 10 caracteres'),
    password: yup
        .string()
        .required('Por favor ingrese una contraseña')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(200, 'La contraseña debe tener un máximo de 200 caracteres'),
    profile: yup
        .string()
        .oneOf(['farmer', 'vet'], 'Por favor seleccione un perfil')
        .required('Por favor seleccione un perfil'),
    confirmPassword: yup
        .string()
        .required('Confirme su contraseña')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir'),
});

const { handleSubmit, defineComponentBinds, errors, meta } = useForm<TRegisterFormAccount>({
    validationSchema,
    initialValues: props.initialValues,
});

const profile = defineComponentBinds('profile');
const email = defineComponentBinds('email');
const password = defineComponentBinds('password');
const confirmPassword = defineComponentBinds('confirmPassword');

const onSubmit = handleSubmit((values) => {
    emit('done', values);
});

const profiles = [
    { text: 'Granjero', value: 'farmer' },
    { text: 'Veterinario', value: 'vet' },
];
</script>

<template>
    <form @submit="onSubmit" class="flex flex-col items-center gap-y-4 p-2">
        <VSelect
            :options="profiles"
            v-bind="profile"
            label="Perfil"
            placeholder="Seleccione su pefil"
            name="profile"
            :error="errors.profile"
        />

        <VInput
            v-bind="email"
            label="Email"
            placeholder="alguien@example.com"
            type="email"
            name="email"
            :icon="AtSymbolIcon"
            :maxlength="60"
            :error="errors.email"
        />

        <VInput
            v-bind="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
            name="password"
            :icon="LockClosedIcon"
            :maxlength="30"
            :error="errors.password"
        />

        <VInput
            v-bind="confirmPassword"
            label="Confirmar contraseña"
            placeholder="Confirma tu contraseña"
            type="password"
            name="password"
            :icon="LockClosedIcon"
            :maxlength="30"
            :error="errors.confirmPassword"
        />

        <div class="flex w-full justify-center gap-4">
            <button
                :disabled="!meta.valid"
                type="submit"
                :class="['btn btn-primary', !meta.valid && 'pointer-events-none opacity-50']"
            >
                Siguiente
            </button>
            <router-link :to="{ name: 'welcome' }" class="btn btn-primary">Cancelar</router-link>
        </div>
    </form>
</template>
