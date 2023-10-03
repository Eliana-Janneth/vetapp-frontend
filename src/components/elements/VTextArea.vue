<script setup lang="ts">
defineEmits(['update:modelValue', 'focus', 'blur']);
import { AlertInput } from '@elements';

withDefaults(
    defineProps<{
        customClass?: string;
        error?: string;
        id?: string;
        label?: string;
        name?: string;
        placeholder?: string;
        variant?: 'farmer' | 'vet' | 'base';
    }>(),
    {
        variant: 'base',
    },
);

const variantTextAreaClass = {
    farmer: 'border-emerald-400 bg-emerald-100 placeholder:text-emerald-600 focus:border-emerald-500 focus:ring-emerald-500',
    vet: 'border-sky-400 bg-sky-100 placeholder:text-sky-600 focus:border-sky-500 focus:ring-sky-500',
    base: 'border-indigo-400 bg-indigo-100 placeholder:text-indigo-600 focus:border-indigo-500 focus:ring-indigo-500',
};

const variantLabelClass = {
    farmer: 'text-emerald-700',
    vet: 'text-sky-700',
    base: 'text-indigo-700',
};
</script>

<template>
    <div class="relative w-full">
        <span v-if="label" :class="['block text-lg font-medium', variantLabelClass[variant]]">{{ label }}</span>
        <textarea
            :class="[
                'form-textarea block w-full rounded-lg border py-2 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm',
                variantTextAreaClass[variant],
            ]"
            :placeholder="placeholder"
            :name="name"
            @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
        >
        </textarea>
        <AlertInput :error="error" :variant="variant" />
    </div>
</template>
