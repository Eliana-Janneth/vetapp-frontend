<script setup lang="ts">
import { TFarmerChat, TVetChat } from '@/types';
import ChatHeader from './ChatHeader.vue';

defineProps<{
    role: 'farmer' | 'vet';
    chat: TFarmerChat | TVetChat | null;
}>();
</script>

<template>
    <section class="scroll-style h-full w-full overflow-y-auto bg-red-500">
        <ChatHeader :role="role" :name="chat?.userName" />
        <p>CHAT: {{ chat }}</p>
    </section>
</template>

<style scoped>
/* width */
.scroll-style::-webkit-scrollbar {
    width: 7px;
}

/* Track */
.scroll-style::-webkit-scrollbar-track {
    background: #fff;
}

/* Handle */
.scroll-style::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 16px;
}
</style>
