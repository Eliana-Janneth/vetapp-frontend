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
    <button :class="[customClass, type, styleStore.getButtonStyle]" @click="$emit('open')">
        {{ label }}
    </button>
</template>
