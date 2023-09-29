<script setup lang="ts">
defineProps<{
    customClass?: string;
    error?: string;
    id?: string;
    label?: string;
    labelColor?: string;
    name?: string;
    placeholder?: string;

}>();
</script>

<template>
    <div class="relative w-full">
        <span v-if="label" :class="['block text-lg font-medium', labelColor]">{{ label }}</span>
        <textarea
            :class="['block w-full rounded-lg form-textarea border py-2 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm', customClass]"
            :placeholder="placeholder" :name="name" required>
        </textarea>
    </div>
    <AlertInput :error="error" />
</template>
