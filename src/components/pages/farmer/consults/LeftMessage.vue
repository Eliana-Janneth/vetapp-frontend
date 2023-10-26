<script setup lang="ts">

defineProps <{
    message: string,
    hour: string,
}>();

</script>
<template>
    <div class=" flex">
        <img src="https://i.pravatar.cc/300" class="mr-4 w-12 self-end rounded-full" alt="avatar" />
        <div class="flex flex-col">
            <div class="mb-2 w-96 rounded-3xl rounded-bl-none bg-emerald-200 p-6 shadow-sm">
                <small class="font-light text-gray-900">{{ message }}</small>
            </div>
            <small class="font-light text-gray-500">{{ hour }}</small>
        </div>
    </div>
</template>
