<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from '../elements/LoginForm.vue';
import RegisterPage from './RegisterPage.vue';

const openFormLogin = ref(false);
const openFormRegister = ref(false);

</script> 

<template>
    <div class="bg-indigo-100 items-center p-4">
        <div class="lg:w-3/12 container mx-auto bg-indigo-900 rounded-3xl shadow-2xl">
            <div class="flex justify-center p-2">
                <img src="/src/assets/imageLogin.png" alt="logo" class="rounded-2xl" />
            </div>
            <LoginForm v-if="openFormLogin"> </LoginForm>
            <RegisterPage v-if="openFormRegister"></RegisterPage>
            <div v-if="!openFormLogin && !openFormRegister" class="flex flex-col items-center p-4 gap-2">
                <h1 class="text-white text-2xl font-medium">Iniciar Sesión</h1>
                <div class="flex bg-indigo-800/90 hover:bg-indigo-500 rounded-full justify-center container w-72 p-2">
                    <img class="rounded-full h-[25px]" src="/src/assets/google.svg" alt="google" />
                    <button class="px-2 py-1 rounded-md text-md text-white/80 hover:text-white font-medium">
                        Continúa con Google
                    </button>
                </div>
                <div
                    class="flex border-2 border-indigo-500  text-indigo-500 font-medium bg-gradient-to-r hover:from-indigo-500/50 hover:to-indigo-700/50 hover:text-white  active:from-indigo-600 active:to-indigo-800 rounded-full justify-center container w-72 p-2">
                    <button class="px-2 py-1 rounded-md text-md" @click="openFormLogin = true">
                        Usar Correo
                    </button>
                </div>
                <div class="flex gap-1 pt-6">
                    <p class="text-white">¿Deseas crear una cuenta?</p>
                    <button class="underline underline-offset-2 text-indigo-500 font-medium hover:text-white" @click="openFormRegister = true">
                        Registrate aquí
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
