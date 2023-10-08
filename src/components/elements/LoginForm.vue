<script setup lang="ts">
import { EnvelopeIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline';
import { useForm } from 'vee-validate';
import { ref, reactive } from 'vue';
import { VInput } from '@elements';
import * as yup from 'yup';
import { TLoginPayload, vetappApi } from '@/services';
import { useRouter } from 'vue-router';

const router = useRouter();
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

const { handleSubmit, defineComponentBinds, errors, meta } = useForm<TLoginPayload>({
    validationSchema: schema,
});

const email = defineComponentBinds('username');
const password = defineComponentBinds('password');

const errorMessage = ref<string | null>(null);

const onSubmit = handleSubmit((loginValues: TLoginPayload) => {
    values.username = loginValues.username;
    values.password = loginValues.password;
    vetappApi
        .login(values)
        .then(() => {
            router.push({ name: 'home' });
        })
        .catch((error) => {
            console.error('Error de inicio de sesión:', error);
            errorMessage.value = error.message;
        });
});
</script>

<template>
    <form class="flex flex-col items-center gap-2 rounded-xl bg-white p-4" @submit.prevent="onSubmit">
        <h1 class="text-2xl font-medium text-indigo-900">Iniciar Sesión</h1>

        <VInput
            v-bind="email"
            placeholder="Correo Electrónico"
            name="email"
            type="email"
            :icon="EnvelopeIcon"
            :error="errors.username"
        />

        <VInput
            v-bind="password"
            placeholder="Contraseña"
            type="password"
            name="password"
            :icon="passwordIcon"
            :error="errors.password"
            @focus="passwordIcon = LockOpenIcon"
            @blur="passwordIcon = LockClosedIcon"
        />

        <a href="" class="text-indigo-900">¿Olvidó su contraseña?</a>
        <button
            :disabled="!meta.valid"
            :class="['btn btn-primary', !meta.valid && 'pointer-events-none opacity-50']"
            type="submit"
        >
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
