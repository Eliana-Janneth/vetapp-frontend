<script setup lang="ts">
import { FunctionalComponent } from 'vue';
import { useStyleStore } from '@/stores';
import { twMerge } from 'tailwind-merge';

defineOptions({
    inheritAttrs: false,
});

const props = defineProps<{
    containerClass?: string;
    class?: string;
    icon?: FunctionalComponent;
}>();

const styleStore = useStyleStore();
</script>

<template>
    <div :class="twMerge('relative flex w-full items-center gap-1', containerClass)">
        <component :is="icon" :class="['h-5 w-5 shrink-0', styleStore.getIconStyle]" />

        <span :class="twMerge('flex leading-none', styleStore.getLabelStyle, props.class)">
            <slot />
        </span>
    </div>
</template>
