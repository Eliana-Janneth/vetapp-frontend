<script setup lang="ts">
import { FunctionalComponent } from 'vue';
import { AlertInput } from '@elements';
defineEmits(['update:modelValue', 'focus', 'blur']);

defineOptions({
    inheritAttrs: false,
});

withDefaults(
    defineProps<{
        customClass?: string;
        error?: string;
        icon?: FunctionalComponent;
        id?: string;
        label?: string;
        modelValue?: string;
        name?: string;
        placeholder?: string;
        type?: string;
        variant?: 'farmer' | 'vet' | 'base';
    }>(),
    {
        type: 'text',
        variant: 'base',
    },
);

const variantInputClass = {
    farmer: 'border-emerald-400 bg-emerald-100 placeholder:text-emerald-600 focus:border-emerald-500 focus:ring-emerald-500',
    vet: 'border-pink-400 bg-pink-100 placeholder:text-pink-600 focus:border-pink-500 focus:ring-pink-500',
    base: 'border-indigo-400 bg-indigo-100 placeholder:text-indigo-600 focus:border-indigo-500 focus:ring-indigo-500',
};

const variantLabelClass = {
    farmer: 'text-emerald-700',
    vet: 'text-pink-700',
    base: 'text-indigo-700',
};
</script>

<template>
    
    <div class="relative w-full">
        <span v-if="label" :class="['block text-lg font-medium', variantLabelClass[variant]]">{{ label }}</span>

        <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <component :is="icon" class="h-6 w-6 text-indigo-600" />
            </span>
            <input
                :class="[
                    'form-input block w-full rounded-lg border py-2 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm',
                    icon ? 'pl-10' : 'pl-3',
                    customClass,
                    variantInputClass[variant],
                ]"
                v-bind="$attrs"
                :id="id"
                :placeholder="placeholder"
                :type="type"
                :name="name"
                :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                @focus="$emit('focus')"
                @blur="$emit('blur')"
            />
        </div>
        <AlertInput :error="error" :variant="variant" />
    </div>
    
</template>
