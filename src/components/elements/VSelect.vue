<script setup lang="ts">
import { AlertInput } from '@elements'

defineEmits(['update:modelValue', 'blur']);

defineProps<{
    customClass?: string;
    error?: string;
    id?: string;
    label?: string;
    modelValue?: string;
    labelColor?: string;
    name?: string;
    options?: { text: string; value: string | number }[];
    placeholder?: string;
    value?: [String, Number];
}>();
</script>

<template>
    <div class="relative block w-full">
        <span v-if="label" :class="['block text-lg font-medium', labelColor]">{{ label }}</span>
        <select
            :class="['block w-full rounded-lg form-select border py-2 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm', customClass]"
            :name="name" 
            :value="modelValue"
            @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)" 
            @blur="$emit('blur')" 
        >
            <option value="" disabled selected hidden>{{ placeholder }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
    </div>
    <AlertInput :error="error" />
</template>
