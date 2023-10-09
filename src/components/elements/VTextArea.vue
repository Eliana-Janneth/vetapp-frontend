<script setup lang="ts">
import  AlertInput from './AlertInput.vue';
import {useStyleStore} from '@/stores';

defineEmits(['update:modelValue', 'focus', 'blur']);
const styleStore = useStyleStore();

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


</script>

<template>
    <div class="relative w-full">
        <span v-if="label" :class="['block text-lg font-medium', styleStore.getLabelStyle]">{{ label }}</span>
        <textarea
            :class="[
                'form-textarea block w-full rounded-lg border py-2 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm',
                styleStore.getInputStyle,
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
