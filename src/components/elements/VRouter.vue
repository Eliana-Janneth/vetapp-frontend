<script setup lang="ts">
import { useStyleStore } from '@/stores';
import { FunctionalComponent } from 'vue';

const styleStore = useStyleStore();

defineProps<{
    customClass?: string;
    icon?: FunctionalComponent;
    label: string;
    route: string;
}>();
</script>

<template>
    <router-link
        :to="{ name: route }"
        :class="['flex w-full justify-center text-lg ', customClass, styleStore.getButtonStyle]"
    >
        <span class="mr-2">
            <component :is="icon" class="h-6 w-6" />
        </span>
        {{ label }}
    </router-link>
</template>
