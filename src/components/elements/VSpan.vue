<script setup lang="ts">
import { FunctionalComponent } from 'vue';
import { useStyleStore } from '@/stores';

defineEmits(['update:modelValue', 'focus', 'blur']);

defineOptions({
    inheritAttrs: false,
});

defineProps<{
    customClass?: string;
    icon?: FunctionalComponent;
    id?: string;
    label?: string | boolean;
    modelValue?: string | boolean;
    name?: string;
}>();

const styleStore = useStyleStore();
</script>

<template>
    <div class="relative w-full">
        <div class="flex items-center">
            <span class="mr-2 flex items-center">
                <label v-if="name" :class="['block text-lg font-bold', customClass, styleStore.getLabelStyle]">
                    {{ `${name} :` }}</label>
                
                <component :is="icon" :class="['h-6 w-6', styleStore.getIconStyle]" />
            </span>
            <span v-if="label" :class="['block text-lg font-medium', customClass, styleStore.getLabelStyle]">{{
                label
            }}</span>
        </div>
    </div>
</template>
