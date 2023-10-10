<script setup lang="ts">
import { notify } from '@kyvg/vue3-notification';

defineProps<{
    title?: string;
    text?: string;
    group?: string;
}>();

notify({
    title: 'Authorization',
    text: 'You have been logged in!',
});
</script>

<template>
    <div type="success" position="bottom right" class="vue-notification-wrapper">
        <div class="vue-notification-template">
            <div class="notification-title">{{ title }}</div>
            <div class="notification-content">{{ text }}</div>
        </div>
    </div>
</template>
