<script setup lang="ts">
import { FunctionalComponent, ref, watch } from 'vue';
import { AlertInput } from '@elements';
import { useStyleStore } from '@/stores';
import { useField } from 'vee-validate';
import { twMerge } from 'tailwind-merge';

defineEmits(['update:modelValue', 'focus', 'blur']);

defineOptions({
    inheritAttrs: false,
});

const styleStore = useStyleStore();

const props = withDefaults(
    defineProps<{
        containerClass?: string;
        class?: string;
        error?: string;
        icon?: FunctionalComponent;
        label?: string;
        modelValue?: string | boolean;
        name?: string;
        placeholder?: string;
        type?: string;
        variant?: 'farmer' | 'vet' | 'base';
        width?: string;
        checked?: boolean;
    }>(),
    {
        type: 'text',
        variant: 'base',
        width: 'w-full',
    },
);

let value: any = ref(props.modelValue);
let error: any;

if (props.name) {
    const { value: valueField, errorMessage } = useField(props.name);
    value = valueField;
    error = errorMessage;
}

watch(
    () => props.modelValue,
    (newValue) => {
        value.value = newValue;
    },
);
</script>

<template>
    <div :class="twMerge('relative', width, containerClass)">
        <label v-if="label" :class="['block text-lg font-medium', styleStore.getLabelStyle]">{{ label }}</label>

        <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <component :is="icon" :class="['h-6 w-6 ', styleStore.getLabelStyle]" />
            </span>
            <input
                :class="twMerge('form-input', icon ? 'pl-10' : 'pl-3', styleStore.getInputStyle, props.class)"
                v-bind="$attrs"
                :placeholder="placeholder"
                :type="type"
                v-model="value"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            />
        </div>
        <AlertInput :error="error" :variant="variant" />
    </div>
</template>
