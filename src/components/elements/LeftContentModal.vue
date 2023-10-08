<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const state = ref(false);
const open = () => state.value = true;
const close = () => state.value = false;

defineExpose({ open, close });
</script>

<template>
    <div v-if="state" class="absolute h-screen w-screen flex bg-black/60">
        <slot />

        <button @click="close" class="absolute top-4 right-4">
            <XMarkIcon class="h-6 w-6 text-white"/>
        </button>
    </div>
</template>
