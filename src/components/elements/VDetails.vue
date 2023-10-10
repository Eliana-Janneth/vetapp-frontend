<script setup lang="ts">
defineProps<{
    customClass?: string;
    label: string;
    description: string;
}>();
</script>

<template>
    <div class="mx-auto max-w-3xl border border-x-0">
        <dl class="space-y-2 p-6 lg:px-28">
            <div class="flex flex-col justify-between lg:flex-row">
                <dt class="text-lg font-medium text-sky-600">{{ label }}</dt>
                <dd class="flex justify-between lg:w-1/2">
                    <span class="text-base font-normal text-sky-800">{{ description }}</span>
                </dd>
            </div>
        </dl>
    </div>
</template>