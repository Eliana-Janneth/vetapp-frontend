<script setup lang="ts">
import { useField } from 'vee-validate';
import { useStyleStore } from '@/stores';

defineEmits(['update:modelValue']);

const styleStore = useStyleStore();

const props = defineProps<{
    id?: string;
    name: string;
    label?: string;
}>();

const { value } = useField(props.name);

const computedId = props.id || String(Symbol());

console.log('computedId', computedId);
</script>

<template>
    <div class="flex items-center gap-2">
        <input :id="computedId" :class="['w-4', styleStore.getInputStyle]" v-model="value" type="checkbox" />
        <label :for="computedId" :class="['block text-lg font-medium select-none cursor-pointer',styleStore.getLabelStyle]">{{ label }}</label>
    </div>
</template>
