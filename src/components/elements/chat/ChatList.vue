<script setup lang="ts">
import { ChatListItem } from '@elements';
import { vetappApi } from '@/services';
import { TChats } from '@/types/chat';
import { ref } from 'vue';
import { useUserStore } from '@/stores';

defineEmits(['activeChat']);

const chats = ref<TChats>([]);

const user = useUserStore();

if (user.isFarmer) {
    vetappApi.getFarmerChats().then((response) => {
        chats.value = response;
    });
} else {
    vetappApi.getVetChats().then((response) => {
        chats.value = response;
    });
}
</script>

<template>
    <div class="bg-gray-100 p-4 flex lg:flex-col gap-4 min-w-[300px] overflow-x-auto scroll-style">
        <ChatListItem v-for="chat in chats" @click="() => $emit('activeChat', chat)" :key="chat.id" :chat="chat" :role="user.role" />
    </div>
</template>

<style scoped>
/* width */
.scroll-style::-webkit-scrollbar {
    height: 7px;
}

/* Track */
.scroll-style::-webkit-scrollbar-track {
    background: rgb(243 244 246 / var(--tw-bg-opacity));
}

/* Handle */
.scroll-style::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 16px;
}
</style>
