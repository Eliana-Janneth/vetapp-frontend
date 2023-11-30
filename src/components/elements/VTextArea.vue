<script setup lang="ts">
import AlertInput from './AlertInput.vue';
import { useStyleStore } from '@/stores';
import { twMerge } from 'tailwind-merge';
import { useField } from 'vee-validate';
import { ref } from 'vue';

defineEmits(['update:modelValue', 'focus', 'blur']);
const styleStore = useStyleStore();

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
        name?: string;
        placeholder?: string;
        modelValue?: string;
        variant?: 'farmer' | 'vet' | 'base';
        width?: string;
    }>(),
    {
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
</script>

<template>
    <div :class="twMerge('relative', width, containerClass)">
        <span v-if="label" :class="['block text-lg font-medium', styleStore.getLabelStyle]">{{ label }}</span>
        <textarea
            :class="twMerge('form-textarea', styleStore.getInputStyle, props.class)"
            :placeholder="placeholder"
            v-bind="$attrs"
            v-model="value"
            @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
        >
        </textarea>
        <AlertInput :error="error" :variant="variant" />
    </div>
</template>
