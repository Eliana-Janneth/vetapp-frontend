<script setup lang="ts">
import { useStyleStore } from '@/stores';

defineProps<{
    error?: string;
}>();

const styleStore = useStyleStore();
</script>

<template>
    <span v-if="error" :class="[styleStore.getAlertStyle]">{{ error }}</span>
</template>
