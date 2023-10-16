<script setup lang="ts">
import { AlertInput } from '@elements';
import type { TOption } from '@/types';

defineEmits(['update:modelValue', 'blur']);

withDefaults(
    defineProps<{
        customClass?: string;
        error?: string;
        id?: string;
        label?: string;
        modelValue?: string;
        name?: string;
        options?: TOption[];
        placeholder?: string;
        value?: [String, Number];
        variant?: 'farmer' | 'vet' | 'base';
    }>(),
    {
        variant: 'base',
    },
);
<<<<<<< Updated upstream
const variantSelectClass = {
    farmer: 'border-emerald-400/50 bg-emerald-50/80 placeholder:text-emerald-600/40 focus:border-emerald-500 focus:ring-emerald-500',
    vet: 'border-sky-400/50 bg-sky-50/80 placeholder:text-sky-600/40 focus:border-sky-500 focus:ring-sky-500',
    base: 'border-indigo-400 bg-indigo-100 placeholder:text-indigo-600 focus:border-indigo-500 focus:ring-indigo-500',
};

const variantLabelClass = {
    farmer: 'text-emerald-700',
    vet: 'text-sky-700',
    base: 'text-indigo-700',
};
=======
const styleStore = useStyleStore();
>>>>>>> Stashed changes
</script>

<template>
    <div class="relative block w-full">
        <span v-if="label" :class="['block text-lg font-medium', variantLabelClass[variant]]">{{ label }}</span>
        <select
<<<<<<< Updated upstream
            :class="[
                'form-select block w-full rounded-lg border py-2 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm',
                variantSelectClass[variant],
            ]"
=======
            :class="['form-select', styleStore.getInputStyle]"
>>>>>>> Stashed changes
            :name="name"
            :value="modelValue"
            @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
            @blur="$emit('blur')"
        >
<<<<<<< Updated upstream
            <option value="" disabled selected hidden>{{ placeholder }}</option>
=======
            <option value="" disabled selected hidden :class="[styleStore.getLabelStyle]">{{ placeholder }}</option>
>>>>>>> Stashed changes
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
        <AlertInput :error="error" :variant="variant" />
    </div>
</template>
