<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/solid';

defineProps<{
    dark?: boolean;
}>();

const THEME = {
    light: 'bg-pink-900/10 text-pink-900/70 hover:text-pink-900 focus:outline-pink-900/10 focus-visible:text-pink-900 focus-visible:outline-pink-900/10',
    dark: 'bg-white/10 text-white/70 hover:text-white focus:outline-white/10 focus-visible:text-white focus-visible:outline-white/10',
};
</script>

<template>
    <button class="focus-outline h-fit w-fit rounded-lg p-1 active:scale-95" :class="dark ? THEME.dark : THEME.light">
        <Bars3Icon class="h-5 w-5" />
    </button>
</template>
