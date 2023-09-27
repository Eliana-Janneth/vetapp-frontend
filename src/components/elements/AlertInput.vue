<script setup lang="ts">    
defineProps<{
    error?: string;
}>();   
   
</script>

<template>
    <span v-if="error" class="rounded-md bg-indigo-200 px-2 text-sm text-indigo-900">{{ error }}</span>
</template>