<script setup lang="ts">
import { EnvelopeIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline';
import { useForm } from 'vee-validate';
import { ref, computed } from 'vue';
import { VInput } from '@elements';
import * as yup from 'yup';
import { vetappApi } from '@/services';
//import { useRouter } from 'vue-router';

const passwordIcon = ref(LockClosedIcon);

const schema = yup.object({
    username: yup
        .string()
        .required('Por favor ingrese un correo')
        .email('Debes ingresar un correo valido "alguien@example.com"'),
    password: yup.string().required('Por favor ingrese una contraseña'),
});

const { handleSubmit, defineComponentBinds, errors, values } = useForm({
    validationSchema: schema,
});

const username = defineComponentBinds('username');
const password = defineComponentBinds('password');

const errorMessage = ref<string | null>(null);
// const disabled = computed(() => {
//     return !values.email || !values.password;
// });

// Almacena el token en el almacenamiento local

const onSubmit = handleSubmit(async (values) => {
    const apiUrl = 'http://127.0.0.1:9999/auth/login/';

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

        localStorage.setItem('accessToken', responseData.token);
        console.log('Respuesta del backend:', responseData.token);
        alert('Usuario logueado exitosamente');
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
});

const onLogout = (async () => {
    try {
        await vetappApi.logout();

    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
</script>

<template>
    <form class="flex flex-col items-center gap-2 rounded-xl bg-white p-4" @submit="onSubmit">
        <h1 class="text-2xl font-medium text-indigo-900">Iniciar Sesión</h1>

        <VInput v-bind="username" placeholder="Correo Electrónico" name="username" type="email"
            :icon="EnvelopeIcon" :error="errors.username" />

        <VInput v-bind="password" placeholder="Contraseña" type="password" name="password" :icon="passwordIcon"
            :error="errors.password" @focus="passwordIcon = LockOpenIcon" @blur="passwordIcon = LockClosedIcon" />

        <a href="" class="text-indigo-900">¿Olvidó su contraseña?</a>
        <button :class="['btn btn-primary']" type="submit" value="iniciarSesión">
            Iniciar Sesión
        </button>
      
    </form>
    <form @submit.prevent="onLogout">
    <button :class="['btn btn-primary']" type="submit" value="logout">
            Salir Sesión
        </button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
</template>
<style>
.error-message {
    color: red;
}
</style>
