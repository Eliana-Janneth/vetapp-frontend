<script setup lang="ts">
import { FunctionalComponent } from 'vue';
import { AlertInput } from '@elements';
import { useStyleStore } from '@/stores';

defineEmits(['update:modelValue', 'focus', 'blur']);

defineOptions({
    inheritAttrs: false,
});

const styleStore = useStyleStore();

withDefaults(
    defineProps<{
        customClass?: string;
        error?: string;
        icon?: FunctionalComponent;
        id?: string;
        label?: string;
        modelValue?: string | boolean;
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
</script>

<template>
    <div class="relative w-full">
        <span v-if="label" :class="['block text-lg font-medium', styleStore.getLabelStyle]">{{ label }}</span>

        <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <component :is="icon" :class="['h-6 w-6 ', styleStore.getLabelStyle]" />
            </span>
            <input
                :class="['form-input',
                    icon ? 'pl-10' : 'pl-3',
                    customClass,
                    styleStore.getInputStyle,
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
