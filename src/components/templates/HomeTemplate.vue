<script setup lang="ts">
const props = defineProps<{
    role: 'farmer' | 'vet';
}>();

const backgroundColor = {
    farmer: 'bg-emerald-500',
    vet: 'bg-red-500',
}[props.role];
</script>

<template>
    <div :class="['h-screen', backgroundColor]">
        <slot />
    </div>
</template>
