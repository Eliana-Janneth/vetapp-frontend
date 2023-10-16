<script setup lang="ts">
import { useStyleStore } from '@/stores';

const styleStore = useStyleStore();

defineProps<{
    customClass?: string;
    label: string;
    route: string;
    active: boolean;
}>();
</script>
<template>
    <router-link
        :to="{ name: route }"
        :class="[
            customClass,
            styleStore.getTabButtonStyle,
            { 'border-b-2': active },
        ]"
        @click="active"
    >
        {{ label }}
    </router-link>
</template>
