<script setup lang="ts">
import { FunctionalComponent } from 'vue';
import { AlertInput } from '@elements';
defineEmits(['update:modelValue', 'focus', 'blur']);

withDefaults(
    defineProps<{
        customClass?: string;
        error?: string;
        icon?: FunctionalComponent;
        id?: string;
        label?: string;
        labelColor?: string;
        modelValue?: string;
        name?: string;
        placeholder?: string;
        type?: string;
        value?: string;
    }>(),
    {
        type: 'text',
    },
);
</script>

<template>
    <div class="relative w-full">
        <span v-if="label" :class="['block text-lg font-medium', labelColor]">{{ label }}</span>

        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <component :is="icon" class="h-6 w-6 text-indigo-600" />
        </span>

        <input
            :class="['block w-full rounded-lg form-input border py-2 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm', icon ? 'pl-10' : 'pl-3', customClass]"
            :id="id" :placeholder="placeholder" :type="type" :name="name" :value="value" required
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" @focus="$emit('focus')"
            @blur="$emit('blur')" />
    </div>
    <AlertInput :error="error" />
</template>
