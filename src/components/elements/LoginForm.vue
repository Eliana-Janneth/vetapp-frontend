<script setup lang="ts">
import { EnvelopeIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const isPasswordFocused = ref(false);

</script>

<template>
    <div class="bg-white items-center p-2 rounded-3xl border-4  border-indigo-900">
        <div class="flex flex-col items-center p-4 gap-2">
            <h1 class="text-indigo-700 text-2xl font-medium ">Iniciar Sesión</h1>
            <label class="relative block w-full">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <EnvelopeIcon class="h-6 w-6 text-indigo-600" />
                </span>
                <input
                    class="placeholder:text-indigo-400 block bg-indigo-100 w-full border border-indigo-300 rounded-lg py-2 pl-9 pr-3  shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
                    placeholder="Email" type="text" name="email">
            </label>
            <label class="relative block w-full">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <component :is="isPasswordFocused ? LockOpenIcon : LockClosedIcon" class="h-6 w-6  text-indigo-600" />
                </span>
                <input
                    class="placeholder:text-indigo-400 block bg-indigo-100 w-full border border-indigo-300 rounded-lg py-2 pl-9 pr-3  shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
                    placeholder="Contraseña" type="password" name="password" @focus="isPasswordFocused = true"
                    @blur="isPasswordFocused = false">
            </label>
            <a href="" class="text-indigo-900">¿Olvidó su contraseña?</a>
            <button
                class=" text-white/70 text-sm bg-indigo-500/80 hover:bg-gradient-to-r hover:from-indigo-800 hover:via-indigo-600 hover:to-indigo-800 hover:text-white rounded-full justify-center  p-2 px-4 py-2 text-md ">
                Iniciar Sesión
            </button>
        </div>
    </div>
</template>
