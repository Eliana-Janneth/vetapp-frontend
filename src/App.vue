<script setup lang="ts">
import { initialize } from '@/helpers';

initialize();
</script>

<template>
    <component :is="$route.meta.layout ?? 'div'">
        <router-view />
    </component>
    <notifications duration="10000" classes="my-notification" />
</template>

<style>
.my-notification {
    border-radius: 18px;    

  .notification-title {
        font-size: larger;
    }

  .notification-content {
        font-size: medium;
    }

  &.success {
        background: green;
    }
    &.info {
        background: blue;
    }
    &.error {
        background: red;
    }
}
</style>
