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
        label?: string;
        value?: string;
    }>(),
    {
        type: 'text',
    },
);
</script>

<template>
    <div class="relative w-full">
        <span v-if="label" class="block text-lg font-medium text-pink-700">{{ label }}</span>

        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <component :is="icon" class="h-6 w-6 text-indigo-600" />
        </span>

        <input
            :class="['form-index', icon ? 'pl-10' : 'pl-3',
            ]"
            :id="id"
            :placeholder="placeholder"
            :type="type"
            :name="name"
            :value="value"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
        />
    </div>
    <AlertInput :error="error" />
</template>
