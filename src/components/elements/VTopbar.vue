<script setup lang="ts">
import { useUserStore } from '@/stores';
import { Bars3Icon } from '@heroicons/vue/24/outline';

defineEmits(['open']);

const userStore = useUserStore();
</script>

<template>
    <div :class="['flex justify-between p-4', userStore.isFarmer ? 'bg-emerald-600' : 'bg-sky-600']">
        <div class="flex items-center gap-6">
            <button @click="$emit('open')"><Bars3Icon class="h-6 w-6 text-emerald-200" /></button>
            <h1 class="font-semibold text-white">Vetapp</h1>
        </div>
        <div>
            <img class="h-8 w-8 rounded-full" alt="name user" :src="userStore.getAvatar" />
        </div>
    </div>
</template>
