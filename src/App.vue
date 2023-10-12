<script setup lang="ts">
import { initialize } from '@/helpers';

initialize();
</script>

<template>
    <component :is="$route.meta.layout ?? 'div'">
        <router-view />
    </component>
<<<<<<< Updated upstream
    <notifications />
</template>
=======
    <notifications :duration="3000" classes="my-notification" />
</template>

<style>
.my-notification {
    border-radius: 10px;
    padding: 10px 20px;

  .notification-title {
        font-size: medium;
    }

  .notification-content {
        font-size: medium;
    }

  &.success {
        background: #4ade80;
    }
    &.info {
        background: #2dd4bf;
    }
    &.error {
        background: #f87171;
    }
    &.warn {
        background: #fde047;
    }
}
</style>
>>>>>>> Stashed changes
