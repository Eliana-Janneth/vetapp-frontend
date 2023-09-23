<script setup lang="ts">
import { FunctionalComponent } from 'vue';

defineProps<{
    label: string;
    icon: FunctionalComponent;
}>();
</script>

<template>
    <li>
        <button @click=""
            class="text-md flex w-full justify-center rounded-md bg-pink-500/80 py-2 text-white/70 hover:bg-gradient-to-r hover:from-pink-800 hover:via-pink-600 hover:to-pink-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-500 active:from-pink-600 active:via-pink-800 active:to-pink-600 active:text-pink-200"
        >
            <component :is="icon" class="mr-2 h-6 w-6" />
            {{ label }}
        </button>
    </li>
</template>
