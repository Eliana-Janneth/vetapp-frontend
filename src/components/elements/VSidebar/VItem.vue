<script setup lang="ts">
import { FunctionalComponent } from 'vue';

defineProps<{
    customClass: string;
    icon?: FunctionalComponent;
    label: string;
    route: string;
    svg?: string;
}>();
</script>

<template>
    <li class="relative">
        <router-link :to="{ name: route }" :class="['flex w-full justify-center text-lg ', customClass]">
            <span class="mr-2">
                <component v-if="icon" :is="icon" class="h-6 w-6" />
                <img v-else-if="svg" :src="svg" class="h-7 w-7" alt="icon" />
            </span>
            {{ label }}
        </router-link>
    </li>
</template>
