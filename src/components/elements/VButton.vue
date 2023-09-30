<script setup lang="ts">
withDefaults(
    defineProps<{
        label: string;
        customClass?: string;
        variant?: 'farmer' | 'vet' | 'base';
        type?: string;
    }>(),
    {
        variant: 'base',
    },
);
const variantButtonClass = {
    farmer: 'bg-emerald-600  hover:from-emerald-800 hover:via-emerald-600 hover:to-emerald-800 focus:ring-emerald-500 active:from-emerald-600 active:via-emerald-800 active:to-emerald-600 active:text-emerald-200',
    vet: 'bg-pink-600  hover:from-pink-800 hover:via-pink-600 hover:to-pink-800 focus:ring-pink-500 active:from-pink-600 active:via-pink-800 active:to-pink-600 active:text-pink-200',
    base: 'bg-indigo-600  hover:from-indigo-800 hover:via-indigo-600 hover:to-indigo-800 focus:ring-indigo-500 active:from-indigo-600 active:via-indigo-800 active:to-indigo-600 active:text-indigo-200',
};

defineEmits(['open']);
</script>

<template>
    <button
        :class="[
            'flex w-1/4 justify-center rounded-md py-2 text-lg text-white/70 hover:bg-gradient-to-r hover:text-white focus:outline-none',
            customClass,
            type,
            variantButtonClass[variant],
        ]"
        @click="$emit('open')"
    >
        {{ label }}
    </button>
</template>
