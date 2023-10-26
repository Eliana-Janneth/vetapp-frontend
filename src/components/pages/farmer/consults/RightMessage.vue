<script setup lang="ts">

defineProps <{
    message: string,
    hour: string,
}>();

</script>
<template>
    <div class="flex flex-row-reverse mb-2">
        <img src="https://i.pravatar.cc/200" class="ml-4 lg:w-12 w-8 self-end rounded-full" alt="avatar" />
        <div class="flex flex-col">
            <div class="w-full rounded-2xl rounded-br-none bg-emerald-400 p-2 shadow-sm">
                <small class="font-light text-gray-900">{{ message }}</small>
            </div>
            <small class="self-end font-light text-gray-500"> {{ hour }}</small>
        </div>
    </div>
</template>
