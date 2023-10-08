<script setup lang="ts">
import { initialize } from '@/helpers';

initialize();
</script>

<template>
    <component :is="$route.meta.layout ?? 'div'">
        <router-view />
    </component>
    <notifications />
</template>
