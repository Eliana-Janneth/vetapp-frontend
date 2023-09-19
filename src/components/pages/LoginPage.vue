<script setup lang="ts">
import { ref } from 'vue';
import { LoginForm } from '@elements';
import { RegisterPage } from '@pages';

const openFormLogin = ref(false);
const openFormRegister = ref(false);
</script>

<template>
    <div class="h-screen items-center bg-indigo-300 p-4">
        <div class="container mx-auto rounded-3xl bg-indigo-900 shadow-2xl lg:w-3/12">
            <div class="flex justify-center p-2">
                <img src="/src/assets/imageLogin.png" alt="logo" class="rounded-2xl" />
            </div>

            <LoginForm v-if="openFormLogin" />
            <RegisterPage v-if="openFormRegister" />

            <div v-if="!openFormLogin && !openFormRegister" class="flex flex-col items-center gap-2 p-4">
                <h1 class="text-2xl font-medium text-white">Iniciar Sesión</h1>
                <div class="container flex w-72 justify-center rounded-full bg-indigo-800/90 p-2 hover:bg-indigo-500">
                    <img class="h-[25px] rounded-full" src="/src/assets/google.svg" alt="google" />
                    <button class="text-md rounded-md px-2 py-1 font-medium text-white/80 hover:text-white">
                        Continúa con Google
                    </button>
                </div>
                <div
                    class="container flex w-72 justify-center rounded-full border-2 border-indigo-500 bg-gradient-to-r p-2 font-medium text-indigo-500 hover:from-indigo-500/50 hover:to-indigo-700/50 hover:text-white active:from-indigo-600 active:to-indigo-800"
                >
                    <button class="text-md rounded-md px-2 py-1" @click="openFormLogin = true">Usar Correo</button>
                </div>
                <div class="flex gap-1 pt-6">
                    <p class="text-white">¿Deseas crear una cuenta?</p>
                    <button
                        class="font-medium text-indigo-500 underline underline-offset-2 hover:text-white"
                        @click="openFormRegister = true"
                    >
                        Registrate aquí
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
