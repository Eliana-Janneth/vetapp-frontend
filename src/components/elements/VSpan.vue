<script setup lang="ts">
import { FunctionalComponent } from 'vue';
defineEmits(['update:modelValue', 'focus', 'blur']);

defineOptions({
    inheritAttrs: false,
});

withDefaults(
    defineProps<{
        customClass?: string;
        icon?: FunctionalComponent;
        id?: string;
        label?: string;
        modelValue?: string;
        name?: string;
        variant?: 'farmer' | 'vet' | 'base';
    }>(),
    {
        type: 'text',
        variant: 'base',
    },
);

const variantIconClass = {
    farmer: 'text-emerald-500',
    vet: 'text-pink-500',
    base: 'text-indigo-500',
};

const variantLabelClass = {
    farmer: 'text-emerald-700',
    vet: 'text-pink-700',
    base: 'text-indigo-700',
};
</script>

<template>
    <div class="relative w-full">
        <div class="flex items-center">
            <span class="mr-2 flex items-center">
                <component :is="icon" :class="['h-6 w-6', variantIconClass[variant]]" />
            </span>
            <span v-if="label" :class="['block text-lg font-medium', variantLabelClass[variant], customClass]">{{ label }}</span>

        </div>
    </div>
</template>
