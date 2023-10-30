<script setup lang="ts">
import { TFarmerChat, TVetChat } from '@/types';
import ChatHeader from './ChatHeader.vue';

defineProps<{
    role: 'farmer' | 'vet';
    chat: TFarmerChat | TVetChat | null;
}>();


</script>

<template>
<section class="bg-red-500 h-full w-full overflow-y-auto scroll-style">
    <ChatHeader :role="role" :chat="chat" />
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