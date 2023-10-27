<script setup lang="ts">
import { useUserStore } from '@/stores';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

withDefaults(
    defineProps<{
        as?: 'h1' | 'h2' | 'h3';
    }>(),
    {
        as: 'h1',
    },
);

const role = useUserStore().role;

const styles = cva([], {
    variants: {
        role: {
            farmer: 'text-emerald-500',
            vet: 'text-sky-500',
        },
        as: {
            h1: 'text-3xl font-bold',
            h2: 'text-2xl',
            h3: 'text-xl',
        },
    },
});
</script>

<template>
    <component :is="as" :class="twMerge('font-semibold', styles({ role, as }))"><slot /></component>
</template>
