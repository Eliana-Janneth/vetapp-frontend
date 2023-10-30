<script setup lang="ts">

defineProps <{
    message: string,
    hour: string,
}>();

</script>
<template>
    <div class=" mb-4 flex">
        <img src="https://i.pravatar.cc/300" class="mr-4 lg:w-12 w-8 self-end rounded-full" alt="avatar" />
        <div class="flex flex-col">
            <div class="w-full rounded-2xl rounded-bl-none bg-emerald-200 p-2 shadow-sm">
                <small class="font-light text-gray-900">{{ message }}</small>
            </div>
            <small class="font-light text-gray-500">{{ hour }}</small>
        </div>
    </div>
</template>
