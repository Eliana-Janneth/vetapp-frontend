<script setup lang="ts">
import { FunctionalComponent } from 'vue';

defineProps<{
    label: string;
    placeholder: string;
    type: string;
    name: string;
    icon: FunctionalComponent;

}>();

</script>

<template>
    <label class="relative block drop-shadow-xl w-full">
        <span class="block font-medium text-indigo-700 text-lg">{{ label }}</span>
        <span class="absolute inset-y-12 left-0 flex items-center pl-2">
            <component :is="icon" class="w-6 h-6 text-indigo-700" />
        </span>
        <input
            class="placeholder:text-indigo-400/50 block w-full bg-white hover:bg-indigo-50 focus:bg-indigo-100  border border-indigo-700 rounded-lg py-2 pl-9 pr-3 border-x-0 border-t-0 shadow-md focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 text-md text-indigo-700"
            :placeholder="placeholder" :type="type" :name="name" required>
    </label>
</template>