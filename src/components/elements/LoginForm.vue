<script setup lang="ts">
import { EnvelopeIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline';
import { useForm } from 'vee-validate';
import { ref, reactive } from 'vue';
import { VInput } from '@elements';
import * as yup from 'yup';
import { TLoginPayload, vetappApi } from '@/services';
//import { useRouter } from 'vue-router';

const passwordIcon = ref(LockClosedIcon);
const values: TLoginPayload = reactive({
    username: '',
    password: '',
});

const schema = yup.object({
    username: yup
        .string()
        .required('Por favor ingrese un correo')
        .email('Debes ingresar un correo valido "alguien@example.com"'),
    password: yup.string().required('Por favor ingrese una contraseña'),
});

const { handleSubmit, defineComponentBinds, errors } = useForm<TLoginPayload>({
    validationSchema: schema,
});

const email = defineComponentBinds('username');
const password = defineComponentBinds('password');

const errorMessage = ref<string | null>(null);
// const disabled = computed(() => {
//     return !values.email || !values.password;
// });

// Almacena el token en el almacenamiento local


//envia los datos al servidor
const onSubmit = handleSubmit (async (loginValues: TLoginPayload) => {
    try {
        values.username = loginValues.username;
        values.password = loginValues.password;
        await vetappApi.login(values);
        //router.push('/menu');
    } catch (error) {
        //  errorMessage.value = error.message;
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
    <form class="flex flex-col items-center gap-2 rounded-xl bg-white p-4" @submit.prevent="onSubmit">
        <h1 class="text-2xl font-medium text-indigo-900">Iniciar Sesión</h1>

        <VInput v-bind="email" placeholder="Correo Electrónico" name="email" type="email" :icon="EnvelopeIcon"
            :error="errors.username" />

        <VInput v-bind="password" placeholder="Contraseña" type="password" name="password" :icon="passwordIcon"
            :error="errors.password" @focus="passwordIcon = LockOpenIcon" @blur="passwordIcon = LockClosedIcon" />

        <a href="" class="text-indigo-900">¿Olvidó su contraseña?</a>
        <button :class="['btn btn-primary']" type="submit" value="iniciarSesión">
            Iniciar Sesión
        </button>

    </form>
    <!--<form @submit.prevent="onLogout">
    <button :class="['btn btn-primary']" type="submit" value="logout">
            Salir Sesión
        </button>
    </form>-->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
</template>
<style>
.error-message {
    color: red;
}
</style>
