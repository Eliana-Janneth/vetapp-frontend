<script setup lang="ts">
defineProps<{
    name: string;
    image: string;
}>();
</script>
<template>
    <div class="mr-4 self-center text-center">
        <div class="relative mb-2 w-12">
            <img :src="image" class="h-full w-full rounded-full" alt="avatar" />
            <div class="absolute bottom-0 right-0 rounded-full border-2 border-gray-800 bg-green-300 p-1"></div>
        </div>
        <small class="font-light">{{ name }}</small>
    </div>
</template>
