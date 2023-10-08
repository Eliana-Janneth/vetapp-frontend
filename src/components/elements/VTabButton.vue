<script setup lang="ts">
defineProps<{
    customClass?: string;
    label: string;
    route: string;
    active: boolean;
}>();
</script>
<template>
    <router-link
        :to="{ name: route }"
        :class="[
            'w-1/3 px-4 py-2 text-center text-lg font-medium text-emerald-800 hover:bg-emerald-100/70 focus:outline-none ',
            customClass,
            { 'border-b-2 border-emerald-600': active },
        ]"
        @click="active"
    >
        {{ label }}
    </router-link>
</template>
