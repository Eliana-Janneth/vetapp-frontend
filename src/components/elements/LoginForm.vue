<script setup lang="ts">
import { EnvelopeIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline';
import { useForm } from 'vee-validate';
import { ref, computed } from 'vue';
import * as yup from 'yup';
import { VInput } from '@elements';

const passwordIcon = ref(LockClosedIcon);
const disabled = computed(() => {
    return !values.email || !values.password;
});

const schema = yup.object({
    email: yup
        .string()
        .required('Por favor ingrese un correo')
        .email('Debes ingresar un correo valido "alguien@example.com"'),
    password: yup.string().required('Por favor ingrese una contraseña'),
});

const { values, defineComponentBinds, errors } = useForm({ validationSchema: schema });

const email = defineComponentBinds('email');
const password = defineComponentBinds('password');
</script>

<template>
    <!-- <pre>{{ JSON.stringify(values, null, 2) }}</pre> -->
    <form class="flex flex-col items-center gap-2 rounded-xl bg-white p-4">
        <h1 class="text-2xl font-medium text-indigo-900">Iniciar Sesión</h1>

        <VInput
            v-bind="email"
            :icon="EnvelopeIcon"
            placeholder="Correo Electrónico"
            name="email"
            type="email"
            :error="errors.email"
        />

        <VInput
            v-bind="password"
            placeholder="Contraseña"
            type="password"
            name="password"
            :icon="passwordIcon"
            @focus="passwordIcon = LockOpenIcon"
            @blur="passwordIcon = LockClosedIcon"
            :error="errors.password"
        />

        <a href="" class="text-indigo-900">¿Olvidó su contraseña?</a>
        <button :class="['btn btn-primary', disabled && 'btn-disabled']" type="submit" value="iniciarSesión">
            Iniciar Sesión
        </button>
    </form>
</template>
