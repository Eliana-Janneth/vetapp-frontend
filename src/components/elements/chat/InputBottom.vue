<script setup lang="ts">
import { CameraIcon, ClipboardIcon } from '@heroicons/vue/24/outline';
import { VButton, VTextField } from '..';
</script>

<template>
    <div class="flex border-t px-2 py-4 lg:px-10">
        <div class="relative mr-2 flex w-full rounded-md items-center">
            <VTextField
                type="text"
                placeholder="Escribe tu mensaje ..."
                class="w-full px-4  py-3 text-base pr-20 font-base rounded-lg  bg-gray-100 focus:outline-none"
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-500 lg:pr-4">
                
                <CameraIcon class="h-6 w-6" />
                <ClipboardIcon class="h-6 w-6" />
            </div>
        </div>

        <VButton class="w-fit" >Enviar</VButton>
    </div>
</template>
