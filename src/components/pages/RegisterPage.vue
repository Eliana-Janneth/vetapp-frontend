<script setup lang="ts">
import { UserCircleIcon, AtSymbolIcon, LockClosedIcon, DocumentCheckIcon } from '@heroicons/vue/24/outline';
import { RegisterForm, RegisterInput } from '@elements';
import { ref } from 'vue';
import { useForm, useFormValues } from 'vee-validate';
import * as yup from 'yup';

const openFormVet = ref(false);
const openFormRegister = ref(false);

const getCharacterValidationError = (str: string) => {
    return `La contraseña debe tener al menos 1 ${str}`;
};

const schema = yup.object({
    email: yup
        .string()
        .required('Por favor ingrese un correo')
        .email('Debes ingresar un correo valido "alguien@example.com"'),

    password: yup
        .string()
        .required('Por favor ingrese una contraseña')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(/[0-9]/, getCharacterValidationError('dígito'))
        .matches(/[a-z]/, getCharacterValidationError('minúscula'))
        .matches(/[A-Z]/, getCharacterValidationError('mayúscula')),

    passwordConfirm: yup
        .string()
        .required('Confirme su contraseña')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir'),

    license: yup
        .number()
        .required('Por favor ingrese su licencia profesional')
        .max(5, 'La licencia debe tener máximo 5 dígitos'),
});

const { defineInputBinds, errors } = useForm({
    validationSchema: schema,
});

//valida si los errores estan vacios  y muestra el formulario de registro

const email = defineInputBinds('email');
const password = defineInputBinds('password');
const passwordConfirm = defineInputBinds('passwordConfirm');
const license = defineInputBinds('license');
</script>
//TODO: Organizar el select de perfil //TODO: Organizar tamaño imagen //TODO: Ocultar imagen cuando se llama desde el
login
<template>
    <div class="flex h-screen bg-indigo-900 p-1">
        <div class="hidden w-2/4 md:block">
            <img
                src="/src/assets/img/imgRegister2.jpg"
                alt="Registro"
                class="h-full w-full rounded-2xl object-cover object-center"
            />
        </div>
        <div class="h-min w-full items-center rounded-3xl border-4 border-indigo-900 bg-white p-2 lg:w-2/4">
            <div class="flex flex-col items-center gap-y-4 p-2">
                <h1 class="pb-6 text-center text-2xl font-medium text-indigo-800">Registrate</h1>
                <label class="relative block w-full drop-shadow-xl">
                    <span class="block text-lg font-medium text-indigo-700">Perfil</span>
                    <span class="absolute inset-y-12 left-0 flex items-center pl-2">
                        <UserCircleIcon class="h-6 w-6 text-indigo-700" />
                    </span>
                    <select
                        v-model="openFormVet"
                        name="profile"
                        placeholder="Seleccione su perfil"
                        required
                        class="text-md block w-full rounded-lg border border-x-0 border-t-0 border-indigo-700 bg-white py-2 pl-9 pr-3 text-indigo-700 shadow-md placeholder:text-indigo-400/50 hover:bg-indigo-50 focus:border-indigo-500 focus:bg-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        <option value="vet">Veterinario</option>
                        <option value="farmer">Granjero</option>
                    </select>
                </label>

                <RegisterInput
                    v-bind="email"
                    label="Email"
                    placeholder="alguien@example.com"
                    type="text"
                    name="email"
                    :icon="AtSymbolIcon"
                />
                <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.email }}</span>

                <RegisterInput
                    v-bind="password"
                    label="Contraseña"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                    name="pass"
                    :icon="LockClosedIcon"
                />
                <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.password }}</span>

                <RegisterInput
                    v-bind="passwordConfirm"
                    label="Confirmar contraseña"
                    placeholder="Confirma tu contraseña"
                    type="password"
                    name="password"
                    :icon="LockClosedIcon"
                />
                <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.passwordConfirm }}</span>

                <RegisterInput
                    v-bind="license"
                    v-if="openFormVet"
                    label="Matricula Profesional"
                    placeholder="Ingresa tu licencia"
                    type="number"
                    name="license"
                    :icon="DocumentCheckIcon"
                />
                <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.license }}</span>

                <button @click="openFormRegister = true" class="login-button">Siguiente</button>
            </div>
            <RegisterForm v-if="openFormRegister" />
        </div>
    </div>
</template>
