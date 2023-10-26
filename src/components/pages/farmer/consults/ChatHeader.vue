<script setup lang="ts">
import { MagnifyingGlassIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/outline';
</script>
<template>
    <div class="flex">
        <div class="flex flex-grow">
            <div class="relative m-2 mr-4 w-12">
                <img src="https://i.pravatar.cc/300" class="h-full w-full rounded-full" alt="avatar" />
                <div class="absolute bottom-0 right-0 rounded-full border-2 border-gray-800 bg-green-300 p-1"></div>
            </div>
            <div class="flex flex-col justify-center">
                <p class="font-bold">Eliana Puerta</p>
                <small class="font-light text-gray-500">En línea</small>
            </div>
        </div>

        <MagnifyingGlassIcon class="mr-4 w-6 text-gray-500" />
        <EllipsisVerticalIcon class="w-6 text-gray-500" />
    </div>
</template>
