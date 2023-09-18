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
    <label class="relative block w-full drop-shadow-xl">
        <span class="block text-lg font-medium text-indigo-700">{{ label }}</span>
        <span class="absolute inset-y-12 left-0 flex items-center pl-2">
            <component :is="icon" class="h-6 w-6 text-indigo-700" />
        </span>
        <input
            class="text-md block w-full rounded-lg border border-x-0 border-t-0 border-indigo-700 bg-white py-2 pl-9 pr-3 text-indigo-700 shadow-md placeholder:text-indigo-400/50 hover:bg-indigo-50 focus:border-indigo-500 focus:bg-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            :placeholder="placeholder"
            :type="type"
            :name="name"
            required
        />
    </label>
</template>
