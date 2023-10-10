<script setup lang="ts">
defineProps<{
    customClass?: string;
    label: string;
    description: string;
}>();
</script>

<template>
    <div class="mx-auto max-w-3xl border border-x-0 border-emerald-200/50">
        <dl class="p-2 lg:px-28">
            <div class="flex flex-col justify-between lg:flex-row">
                <dt class="text-lg font-medium text-emerald-600">{{ label }}</dt>
                <dd class="flex justify-between lg:w-1/2">
                    <span class="text-base font-normal text-emerald-800">{{ description }}</span>
                    <button class="font-medium text-emerald-500 hover:underline" @click="">Update</button>
                </dd>
            </div>
        </dl>
    </div>
</template>
