<script setup lang="ts">
import { FunctionalComponent } from 'vue';

defineProps<{
    label: string;
    icon: FunctionalComponent;
    customClass: string;
}>();
defineEmits(['close', 'openAnimal', 'openUser']);
</script>

<template>
    <li>
        <button @click="" :class="['text-md flex w-full justify-center rounded-md', customClass]">
            <component :is="icon" class="mr-2 h-6 w-6" />
            {{ label }}
        </button>
    </li>
</template>
