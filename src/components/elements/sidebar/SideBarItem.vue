<script setup lang="ts">
import { FunctionalComponent } from 'vue';

defineProps<{
    label: string;
    icon: FunctionalComponent;
}>();

</script>

<template>
    <li class="">
        
        <button
            class="flex justify-center w-full py-2 rounded-md text-white/70 text-md bg-pink-500/80 hover:bg-gradient-to-r hover:from-pink-800 hover:via-pink-600 hover:to-pink-800 hover:text-white active:from-pink-600 active:via-pink-800 active:to-pink-600 active:text-pink-200 focus:outline-none focus:ring-4 focus:ring-pink-500">
            <component :is="icon" class="w-6 h-6 mr-2" />
            {{ label }}
        </button>
    </li>
</template>
