<script setup lang="ts">
import { useStyleStore } from '@/stores';
import { twMerge } from 'tailwind-merge';

defineProps<{
    label?: string;
    customClass?: string;
    type?: string;
    class?: string;
}>();

const styleStore = useStyleStore();

defineEmits(['open']);
</script>

<template>
    <button :class="twMerge([customClass, type, styleStore.getButtonStyle, $props.class])" @click="$emit('open')">
        {{ label }}
        <slot />
    </button>
</template>
