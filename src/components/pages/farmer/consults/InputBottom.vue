<script setup lang="ts">
import { CameraIcon, ClipboardIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <div class="flex h-auto border-t lg:px-10 py-6 px-2">
        <div class="relative mr-2 w-full">
            <div class="border-1 flex items-center rounded border">
                <input
                    type="text"
                    placeholder="Escribe tu mensaje ..."
                    class="w-full bg-gray-100 px-4 py-2 pr-10 font-light focus:outline-none"
                />
                <div class="absolute inset-y-0 right-0 flex items-center lg:pr-4 pr-2 text-gray-500">
                    <CameraIcon class="h-6 w-6" />
                    <ClipboardIcon class="h-6 w-6" />
                </div>
            </div>
        </div>

        <button class="rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Enviar</button>
    </div>
</template>
