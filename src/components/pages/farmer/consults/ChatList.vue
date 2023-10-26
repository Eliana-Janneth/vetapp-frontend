<script setup lang="ts">
defineProps<{
    name: string;
    date: string;
    lastMessage: string;
    image: string;
}>();
</script>

<template>
    <div class="mb-2 flex rounded bg-gray-100 p-4">
        <img :src="image" class="mr-4 w-12 rounded-full" alt="avatar" />
        <div class="w-full overflow-hidden">
            <div class="mb-1 flex">
                <p class="flex-grow font-semibold">{{ name }}</p>
                <small class="font-light text-gray-500">{{ date }}</small>
            </div>
            <small class="block overflow-hidden overflow-ellipsis whitespace-nowrap font-light text-gray-500"
                >{{ lastMessage }}</small
            >
        </div>
    </div>
</template>
