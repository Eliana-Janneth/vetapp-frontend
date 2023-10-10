<script setup lang="ts">
defineProps<{
    customClass?: string;
    label: string;
    description: string;
}>();
</script>

<template>
    <div class="w-full border border-x-0 border-sky-200/50">
        <dl class=" p-2 ">
            <div class="flex justify-between flex-row">
                <dt class="text-lg font-medium text-sky-600">{{ label }}</dt>
                <dd class="ml-2 text-justify">
                    <span :class="['text-base font-normal text-sky-800', customClass]">{{ description }}</span>
                </dd>
            </div>
        </dl>
    </div>
</template>