<script setup lang="ts">
import { FunctionalComponent } from 'vue';
import { AlertInput } from '@elements';
defineEmits(['update:modelValue', 'focus', 'blur']);

withDefaults(
    defineProps<{
        error?: string;
        icon?: FunctionalComponent;
        id?: string;
        modelValue?: string;
        name?: string;
        placeholder?: string;
        type?: string;
    }>(),
    {
        type: 'text',
    },
);
</script>

<template>
    <div class="relative w-full">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <component :is="icon" class="h-6 w-6 text-indigo-600" />
        </span>

        <input
            :class="[
                'block w-full rounded-lg border border-indigo-300 bg-indigo-100 py-2 pr-3 shadow-sm placeholder:text-indigo-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm',
                icon ? 'pl-10' : 'pl-3',
            ]"
            :id="id"
            :placeholder="placeholder"
            :type="type"
            :name="name"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
        />
    </div>
    <AlertInput :error="error" />
</template>
