<script setup lang="ts">
import { useField } from 'vee-validate';
import { useStyleStore } from '@/stores';
import { twMerge } from 'tailwind-merge';

defineEmits(['update:modelValue']);

const styleStore = useStyleStore();

const props = defineProps<{
    id?: string;
    name: string;
    label?: string;
    checked?: boolean;
}>();

const { value } = useField(props.name);

const computedId = props.id || String(Symbol());
</script>

<template>
    <div class="flex items-center gap-2">
        <input
            :id="computedId"
            :class="twMerge(styleStore.getInputStyle, 'w-2')"
            v-model="value"
            type="checkbox"
            :checked="checked"
        />
        <label
            :for="computedId"
            :class="['block cursor-pointer select-none text-lg font-medium', styleStore.getLabelStyle]"
            >{{ label }}</label
        >
    </div>
</template>
