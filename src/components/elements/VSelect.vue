<script setup lang="ts">
import { AlertInput } from '@elements';
import type { TOption } from '@/types';
import { useStyleStore } from '@/stores';
import { useField } from 'vee-validate';
import { twMerge } from 'tailwind-merge';
import { ref } from 'vue';

defineEmits(['update:modelValue', 'blur']);

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(
    defineProps<{
        containerClass?: string;
        class?: string;
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
        width?: string;
    }>(),
    {
        variant: 'base',
        width: 'w-full',
    },
);
const styleStore = useStyleStore();

let value: any = ref(props.modelValue);
let error: any;

if (props.name) {
    const { value: valueField, errorMessage } = useField(props.name);
    value = valueField;
    error = errorMessage;
}
</script>

<template>
    <div :class="twMerge('relative', width, containerClass)">
        <span v-if="label" :class="['block text-lg font-medium', styleStore.getLabelStyle]">{{ label }}</span>
        <select
            :class="['form-select', styleStore.getInputStyle]"
            v-bind="$attrs"
            v-model="value"
            @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
            @blur="$emit('blur')"
        >
            <option value="undefined" disabled selected hidden :class="[styleStore.getLabelStyle]">
                {{ placeholder }}
            </option>
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
        <AlertInput :error="error" :variant="variant" />
    </div>
</template>
