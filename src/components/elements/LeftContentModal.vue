<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const state = ref(false);
const open = () => (state.value = true);
const close = () => (state.value = false);

defineExpose({ open, close });
</script>

<template>
    <div v-if="state" class="absolute z-40 flex h-screen w-screen bg-black/60">
        <slot />

        <button @click="close" class="absolute right-4 top-4">
            <XMarkIcon class="h-6 w-6 text-white" />
        </button>
    </div>
</template>
