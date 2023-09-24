<script setup lang="ts">

defineProps<{
    label: string;
    customClass: string;
}>();

</script>

<template>
    <button
        :class="['flex w-1/4 text-white/70 hover:bg-gradient-to-r hover:text-white focus:outline-none', customClass]">
        {{ label }}
    </button>
</template>