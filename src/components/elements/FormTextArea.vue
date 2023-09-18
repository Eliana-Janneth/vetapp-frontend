<script setup lang="ts">
defineProps<{
    label: string;
    placeholder: string;
    name: string;
}>();
</script>

<template>
    <label class="relative block w-full drop-shadow-xl">
        <span class="block text-lg font-medium text-fuchsia-700">{{ label }}</span>
        <textarea
            class="text-md block h-full w-full rounded-lg border border-fuchsia-700 bg-white px-2 py-2 text-fuchsia-700 shadow-md placeholder:text-fuchsia-400/50 hover:bg-fuchsia-50 focus:border-fuchsia-500 focus:bg-fuchsia-100 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            :placeholder="placeholder"
            :name="name"
            required
        >
        </textarea>
    </label>
</template>
