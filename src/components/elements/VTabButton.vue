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
<<<<<<< Updated upstream
        :class="[
            'w-1/3 px-4 py-2 text-center text-lg font-medium  focus:outline-none ',
            customClass,
            styleStore.getTabButtonStyle,
            { 'border-b-2': active },
        ]"
=======
        :class="[customClass, styleStore.getTabButtonStyle, { 'border-b-2': active }]"
>>>>>>> Stashed changes
        @click="active"
    >
        {{ label }}
    </router-link>
</template>
