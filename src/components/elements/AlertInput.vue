<script setup lang="ts">
withDefaults(
    defineProps<{
        error?: string;
        variant?: 'farmer' | 'vet' | 'base';
    }>(),
    {
        variant: 'base',
    },
);

const varianteAlertClass = {
    farmer: 'bg-emerald-200 text-emerald-900',
    vet: 'bg-pink-200 text-pink-900',
    base: 'bg-indigo-200 text-indigo-900',
};
</script>

<template>
    <span v-if="error" :class="['rounded-md px-2 text-sm', varianteAlertClass[variant]]">{{ error }}</span>
</template>
