<script setup lang="ts">
import loader from '@/assets/loader.svg';
import { twMerge } from 'tailwind-merge';

defineProps<{
    class?: string;
}>();

</script>

<template><img :class="twMerge('h-20', $props.class)" :src="loader" alt="loader"/></template>
