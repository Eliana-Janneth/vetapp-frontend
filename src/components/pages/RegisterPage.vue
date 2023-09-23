<script setup lang="ts">
import {
    UserCircleIcon,
    AtSymbolIcon,
    LockClosedIcon,
    UserIcon,
    UserPlusIcon,
    IdentificationIcon,
    PhoneIcon,
    BuildingOffice2Icon,
    HomeIcon,
} from '@heroicons/vue/24/outline';
import { RegisterInput } from '@elements';
import { ref, computed } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

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

const schema = yup.object({
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
    first_name: yup.string().required('Por favor ingrese su nombre')
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(40, 'El nombre debe tener un máximo de 40 caracteres'),
    last_name: yup.string().required('Por favor ingrese su apellido')
        .min(2, 'El apellido debe tener al menos 2 caracteres')
        .max(40, 'El apellido debe tener un máximo de 40 caracteres'),
    document_number: yup.string().required('Por favor ingrese su Cédula')
        .matches(/^\d+$/, 'Por favor ingrese solo números')
        .max(10, 'La cédula debe tener un máximo de 10 dígitos'),
    phone_number: yup.string().required('Por favor ingrese su número de contacto')
        .matches(/^[\d+]+$/, 'Por favor ingrese solo números y el símbolo "+"')
        .max(15, 'El número de contacto debe tener un máximo de 10 dígitos')
        .min(7, 'El número de contacto debe tener al menos 7 dígitos'),
    city: yup.string().required('Por favor ingrese su municipio')
        .min(2, 'El municipio debe tener al menos 2 caracteres')
        .max(50, 'El municipio debe tener un máximo de 50 caracteres'),
    address: yup.string().required('Por favor ingrese su dirección de residencia')
        .min(5, 'La dirección debe tener al menos 5 caracteres')
        .max(100, 'La dirección debe tener un máximo de 100 caracteres'),
    repeat_password: yup
        .string()
        .required('Confirme su contraseña')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir'),
});


const disabled = computed(() => {
    return (
        !values.first_name ||
        !values.last_name ||
        !values.document_number ||
        !values.phone_number ||
        !values.city ||
        !values.address ||
        Object.keys(errors.value).length > 0
    );
});
const disabledUser = computed(() => {
    return (
        !values.email ||
        !values.password ||
        Object.keys(errors.value).length > 0
    );
});

const { handleSubmit, defineComponentBinds, errors, values } = useForm({
    validationSchema: schema,
});


const onSubmit = handleSubmit(async (values) => {
    const farmerUrl = 'http://127.0.0.1:9999/farmers/';
    const vetUrl = 'http://127.0.0.1:9999/vets/';

    const apiUrl = selected.value === 'farmer' ? farmerUrl : vetUrl;

    alert(JSON.stringify(values, null, 2));
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            if (errorData && errorData.response) {
                alert(`Error del servidor: ${errorData.response}`);
            } else {
                alert('Error en la solicitud al servidor.');
            }
            return;
        }
        // Si la respuesta es exitosa
        const responseData = await response.json();
        console.log('Respuesta del backend:', responseData);
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
});

const first_name = defineComponentBinds('first_name');
const last_name = defineComponentBinds('last_name');
const password = defineComponentBinds('password');
const document_number = defineComponentBinds('document_number');
const email = defineComponentBinds('email');
const phone_number = defineComponentBinds('phone_number');
const address = defineComponentBinds('address');
const city = defineComponentBinds('city');
const repeat_password = defineComponentBinds('repeat_password');

//TODO: Organizar el select de perfil
//TODO: Organizar tamaño imagen
//TODO: Quitar username
</script>

<template>
    <div class="flex h-screen bg-indigo-900">

        <div class="hidden w-3/4 md:block">
            <img src="/src/assets/img/imgRegister2.jpg" alt="Registro" class="h-full w-full object-cover object-center" />
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
                        <select v-model="selected" name="profile" placeholder="Seleccione su perfil" required
                            class="text-md block w-full rounded-lg border border-x-0 border-t-0 border-indigo-700 bg-white py-2 pl-9 pr-3 text-indigo-700 shadow-md placeholder:text-indigo-400/50 hover:bg-indigo-50 focus:border-indigo-500 focus:bg-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                            <option value="" disabled selected hidden>Seleccione su perfil</option>
                            <option v-for="option in options" :key="option.value" :value="option.value">
                                {{ option.text }}
                            </option>
                        </select>
                    </label>

                    <RegisterInput v-bind="email" label="Email" placeholder="alguien@example.com" type="email" name="email"
                        limited="60" :icon="AtSymbolIcon" :maxlength="60" :error="errors.email" />

                    <RegisterInput v-bind="password" label="Contraseña" placeholder="Ingresa tu contraseña" type="password"
                        name="password" :icon="LockClosedIcon" :maxlength="30" :error="errors.password" />

                    <RegisterInput v-bind="repeat_password" label="Confirmar contraseña"
                        placeholder="Confirma tu contraseña" type="password" name="password" :icon="LockClosedIcon"
                        :maxlength="30" :error="errors.repeat_password" />

                    <div class="flex gap-4 w-full justify-center">
                        <button @click="openFormRegister = true"
                            :class="['btn btn-primary', disabledUser && 'btn-disabled']">Siguiente</button>
                        <router-link :to="{ name: 'welcome' }" class="btn btn-primary">Cancelar</router-link>
                    </div>

                </div>
                <!-- <RegisterForm v-if="openFormRegister" /> -->
                <div v-if="openFormRegister" class="flex flex-col items-center gap-y-4 p-2">
                    <div class="flex w-full flex-col gap-4 lg:flex-row">
                        <RegisterInput v-bind="first_name" label="Nombre" name="first_name" placeholder="Nombre" type="text"
                            :icon="UserIcon" :maxlength="40" :error="errors.first_name" />

                        <RegisterInput v-bind="last_name" label="Apellido" placeholder="Apellido" type="text"
                            name="last_name" :icon="UserPlusIcon" :maxlength="40" :error="errors.last_name" />
                    </div>

                    <RegisterInput v-bind="document_number" label="Identificación" placeholder="Cédula" type="number"
                        name="document_number" :icon="IdentificationIcon" :maxlength="12" :error="errors.document_number" />

                    <RegisterInput v-bind="phone_number" label="Celular" placeholder="Número de contacto" type="number"
                        name="phone_number" :icon="PhoneIcon" :maxlength="15" :error="errors.phone_number" />

                    <RegisterInput v-bind="city" label="Municipio" placeholder="Municipio de residencia" type="text"
                        name="city" :icon="BuildingOffice2Icon" :maxlength="50" :error="errors.city" />

                    <RegisterInput v-bind="address" label="Dirección" placeholder="Dirección" type="text" name="address"
                        :icon="HomeIcon" :maxlength="100" :error="errors.address"></RegisterInput>

                    <div class="flex gap-4 w-full justify-center">
                        <button @click="onSubmit" :class="['btn btn-primary', disabled && 'btn-disabled']" type="submit"
                            value="registrarse">
                            Registrate
                        </button>
                        <router-link :to="{ name: 'welcome' }" class="btn btn-primary">Cancelar</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
