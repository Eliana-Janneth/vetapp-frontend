<script setup lang="ts">
import { initialize } from '@/helpers';

initialize();
</script>

<template>
    <component :is="$route.meta.layout ?? 'div'">
        <router-view />
    </component>

    <notifications :duration="4000" classes="my-notification" position="top center" />
</template>
