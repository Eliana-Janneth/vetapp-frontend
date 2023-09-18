<script setup lang="ts">
import { EnvelopeIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline';
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string().required().email('must be a valid email'),
    password: yup.string().required().min(8),
});

const isPasswordFocused = ref(false);

const { values, defineInputBinds, errors } = useForm({
    validationSchema: schema,
});

const email = defineInputBinds('email');
const password = defineInputBinds('password');
</script>

<template>
    <pre>{{ values }}</pre>
    <pre>{{ errors.email }}</pre>
    <form id="formLogin">
        <div class="items-center rounded-3xl border-4 border-indigo-900 bg-white p-2">
            <div class="flex flex-col items-center gap-2 p-4">
                <h1 class="text-2xl font-medium text-indigo-700">Iniciar Sesión</h1>

                <label class="relative block w-full">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <EnvelopeIcon class="h-6 w-6 text-indigo-600" />
                    </span>
                    <input
                        v-bind="email"
                        class="block w-full rounded-lg border border-indigo-300 bg-indigo-100 py-2 pl-9 pr-3 shadow-sm placeholder:text-indigo-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email"
                        type="text"
                        id="email"
                        name="email"
                    />
                    <span class="text-red-500">{{ errors.email }}</span>
                </label>
                <label class="relative block w-full">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <component
                            :is="isPasswordFocused ? LockOpenIcon : LockClosedIcon"
                            class="h-6 w-6 text-indigo-600"
                        />
                    </span>
                    <input
                        v-bind="password"
                        class="block w-full rounded-lg border border-indigo-300 bg-indigo-100 py-2 pl-9 pr-3 shadow-sm placeholder:text-indigo-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Contraseña"
                        type="password"
                        id="password"
                        name="password"
                        @focus="isPasswordFocused = true"
                        @blur="isPasswordFocused = false"
                    />
                </label>
                <a href="" class="text-indigo-900">¿Olvidó su contraseña?</a>
                <button class="login-button" type="submit" value="iniciarSesión">Iniciar Sesión</button>
            </div>
        </div>
    </form>
</template>
