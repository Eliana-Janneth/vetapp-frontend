<script setup lang="ts">
import { FunctionalComponent } from 'vue';

defineProps<{
    customClass: string;
    icon: FunctionalComponent;
    label: string;
    route: string;

}>();
</script>

<template>
    <li class="relative">
        <router-link  :to="{ name: route}" :class="['text-md flex w-full justify-center ', customClass]">
            <span class="mr-2">
                <component :is="icon" class="h-6 w-6" />
            </span>
            {{ label }}
        </router-link>

    </li>
</template>
