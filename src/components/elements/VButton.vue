<script setup lang="ts">
import { useStyleStore } from '@/stores';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

defineProps<{
    label?: string;
    customClass?: string;
    type?: string;
    class?: string;
    variant?: 'success' | 'danger';
}>();

const styleStore = useStyleStore();

const buttonStyles = cva([], {
    variants: {
        variant: {
            danger: 'bg-red-600  hover:bg-gradient-to-r hover:from-red-800 hover:via-red-600 hover:to-red-800 focus:ring-red-500 active:from-red-600 active:via-red-800 active:to-red-600 active:text-red-200',
            success:
                'bg-green-600  hover:bg-gradient-to-r hover:from-green-800 hover:via-green-600 hover:to-green-800 focus:ring-green-500 active:from-green-600 active:via-green-800 active:to-green-600 active:text-green-200',
        },
    },
});

defineEmits(['open']);
</script>

<template>
    <button
        :class="twMerge([customClass, type, styleStore.getButtonStyle, buttonStyles({ variant }), $props.class])"
        @click="$emit('open')"
    >
        {{ label }}
        <slot />
    </button>
</template>
