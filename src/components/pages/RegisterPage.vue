<script setup lang="ts">
import {
    UserCircleIcon,
    AtSymbolIcon,
    LockClosedIcon,
    DocumentCheckIcon,
    UserIcon,
    UserPlusIcon,
    IdentificationIcon,
    PhoneIcon,
    BuildingOffice2Icon,
    HomeIcon,
} from '@heroicons/vue/24/outline';
import { RegisterInput } from '@elements';
import { ref } from 'vue';
import { useForm } from 'vee-validate';
//import * as yup from 'yup';

//const openFormVet = ref(false);
const openFormRegister = ref(false);
const selected = ref('Granjero');

const options = ref([
    { text: 'Granjero', value: 'farmer' },
    { text: 'Veterinario', value: 'vet' },
]);
// const getCharacterValidationError = (str: string) => {
//     return `La contraseña debe tener al menos 1 ${str}`;
// };

// const schema = yup.object({
//     email: yup
//         .string()
//         .required('Por favor ingrese un correo')
//         .email('Debes ingresar un correo valido "alguien@example.com"'),

//     password: yup
//         .string()
//         .required('Por favor ingrese una contraseña')
//         .min(8, 'La contraseña debe tener al menos 8 caracteres')
//         .matches(/[0-9]/, getCharacterValidationError('dígito'))
//         .matches(/[a-z]/, getCharacterValidationError('minúscula'))
//         .matches(/[A-Z]/, getCharacterValidationError('mayúscula')),

//     passwordConfirm: yup
//         .string()
//         .required('Confirme su contraseña')
//         .min(8, 'La contraseña debe tener al menos 8 caracteres')
//         .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir'),

//     license: yup
//         .number()
//         .required('Por favor ingrese su licencia profesional')
//         .max(5, 'La licencia debe tener máximo 5 dígitos'),
// });

const { handleSubmit, defineInputBinds, errors } = useForm({
    //  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
    fetch('http://127.0.0.1:9999/farmers/', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json',
        },
    });
});

const username = defineInputBinds('username');
const first_name = defineInputBinds('first_name');
const last_name = defineInputBinds('last_name');
const password = defineInputBinds('password');
const document_number = defineInputBinds('document_number');
const email = defineInputBinds('email');
const phone_number = defineInputBinds('phone_number');
const address = defineInputBinds('address');
const city = defineInputBinds('city');
const ubication = defineInputBinds('ubication');
//const passwordConfirm = defineInputBinds('passwordConfirm');
//const ubication = defineInputBinds('ubication');

//TODO: Organizar el select de perfil
//TODO: Organizar tamaño imagen
//TODO: Ocultar imagen cuando se llama desde el login
//TODO: Quitar ubication, licence, username
//TODO: Hacer la petición segun el perfil seleccionado
</script>

<template>
    <div class="flex h-screen bg-indigo-900">
        <div class="hidden w-3/4 md:block">
            <img
                src="/src/assets/img/imgRegister2.jpg"
                alt="Registro"
                class="h-full w-full object-cover object-center"
            />
        </div>
        <div class="h-full w-full items-center bg-white p-2 lg:w-2/4">
            <h1 class="pb-6 text-center text-4xl font-medium text-indigo-800">Registrate</h1>
            <form @submit="onSubmit">
                <div v-if="!openFormRegister" class="flex flex-col items-center gap-y-4 p-2">
                    <label class="relative block w-full drop-shadow-xl">
                        <span class="block text-lg font-medium text-indigo-700">Perfil</span>
                        <span class="absolute inset-y-12 left-0 flex items-center pl-2">
                            <UserCircleIcon class="h-6 w-6 text-indigo-700" />
                        </span>
                        <select
                            v-model="selected"
                            name="profile"
                            placeholder="Seleccione su perfil"
                            required
                            class="text-md block w-full rounded-lg border border-x-0 border-t-0 border-indigo-700 bg-white py-2 pl-9 pr-3 text-indigo-700 shadow-md placeholder:text-indigo-400/50 hover:bg-indigo-50 focus:border-indigo-500 focus:bg-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        >
                            <option v-for="option in options" :key="option.value" :value="option.value">
                                {{ option.text }}
                            </option>
                        </select>
                    </label>

                    <RegisterInput
                        v-bind="email"
                        label="Email"
                        placeholder="alguien@example.com"
                        type="email"
                        name="email"
                        :icon="AtSymbolIcon"
                    />
                    <span v-if="errors.email" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{
                        errors.email
                    }}</span>

                    <RegisterInput
                        v-bind="username"
                        label="username"
                        placeholder="alguien@example.com"
                        type="email"
                        name="username"
                        :icon="AtSymbolIcon"
                    />
                    <RegisterInput
                        v-bind="password"
                        label="Contraseña"
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        name="password"
                        :icon="LockClosedIcon"
                    />
                    <span v-if="errors.password" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{
                        errors.password
                    }}</span>

                    <RegisterInput
                        v-bind="passwordConfirm"
                        label="Confirmar contraseña"
                        placeholder="Confirma tu contraseña"
                        type="password"
                        name="password"
                        :icon="LockClosedIcon"
                    />
                    <span v-if="errors.passwordConfirm" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{
                        errors.passwordConfirm
                    }}</span>

                    <RegisterInput
                        v-bind="ubication"
                        label="Matricula Profesional"
                        placeholder="Ingresa tu licencia"
                        type="text"
                        name="ubication"
                        :icon="DocumentCheckIcon"
                    />
                    <span class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{ errors.license }}</span>

                    <button @click="openFormRegister = true" class="login-button">Siguiente</button>
                </div>
                <!-- <RegisterForm v-if="openFormRegister" /> -->
                <div v-if="openFormRegister" class="flex flex-col items-center gap-y-4 p-2">
                    <div class="flex w-full flex-col gap-4 lg:flex-row">
                        <RegisterInput
                            v-bind="first_name"
                            label="Nombre"
                            name="first_name"
                            placeholder="Nombre"
                            type="text"
                            :icon="UserIcon"
                        />
                        <span v-if="errors.name" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{
                            errors.name
                        }}</span>

                        <RegisterInput
                            v-bind="last_name"
                            label="Apellido"
                            placeholder="Apellido"
                            type="text"
                            name="last_name"
                            :icon="UserPlusIcon"
                        />
                        <span v-if="errors.lastName" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{
                            errors.lastName
                        }}</span>
                    </div>
                    <RegisterInput
                        v-bind="document_number"
                        label="Identificación"
                        placeholder="Cédula"
                        type="text"
                        name="document_number"
                        :icon="IdentificationIcon"
                    />
                    <span v-if="errors.identification" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{
                        errors.identification
                    }}</span>

                    <RegisterInput
                        v-bind="phone_number"
                        label="Celular"
                        placeholder="Número de contacto"
                        type="text"
                        name="phone_number"
                        :icon="PhoneIcon"
                    />
                    <span v-if="errors.phone" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{
                        errors.phone
                    }}</span>

                    <RegisterInput
                        v-bind="city"
                        label="Municipio"
                        placeholder="Municipio de residencia"
                        type="text"
                        name="city"
                        :icon="BuildingOffice2Icon"
                    />
                    <span v-if="errors.city" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{
                        errors.city
                    }}</span>

                    <RegisterInput
                        v-bind="address"
                        label="Dirección"
                        placeholder="Dirección"
                        type="text"
                        name="address"
                        :icon="HomeIcon"
                    ></RegisterInput>
                    <span v-if="errors.address" class="rounded-md bg-red-200 px-2 text-sm text-red-600">{{
                        errors.address
                    }}</span>

                    <button class="login-button" type="submit">Registrate</button>
                </div>
            </form>
        </div>
    </div>
</template>
