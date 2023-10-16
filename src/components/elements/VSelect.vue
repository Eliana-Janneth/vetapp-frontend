<script setup lang="ts">
import { AlertInput } from '@elements';
import type { TOption } from '@/types';
import { useStyleStore } from '@/stores';

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
        value?: [string, number];
        variant?: 'farmer' | 'vet' | 'base';
    }>(),
    {
        variant: 'base',
    },
);
const styleStore = useStyleStore();
</script>

<template>
    <div class="relative block w-full">
        <span v-if="label" :class="['block text-lg font-medium', styleStore.getLabelStyle]">{{ label }}</span>
        <select
            :class="['form-select', styleStore.getInputStyle]"
            :name="name"
            :value="modelValue"
            @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
            @blur="$emit('blur')"
        >
            <option value="" disabled selected hidden :class="[styleStore.getLabelStyle]">{{ placeholder }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
        <AlertInput :error="error" :variant="variant" />
    </div>
</template>
