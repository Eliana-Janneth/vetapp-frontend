<script setup lang="ts">
import { useStyleStore } from '@/stores';

defineProps<{
    label: string;
    customClass?: string;
    type?: string;
}>();

const styleStore = useStyleStore();

defineEmits(['open']);
</script>

<template>
    <button
        :class="[
            'flex w-1/4 justify-center rounded-md py-2 text-lg text-white/70 hover:bg-gradient-to-r hover:text-white focus:outline-none',
            customClass,
            type,
            styleStore.getButtonStyle,
        ]"
        @click="$emit('open')"
    >
        {{ label }}
    </button>
</template>
