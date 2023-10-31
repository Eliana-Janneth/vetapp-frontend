<script setup lang="ts">
import ChatList from '@elements/chat/ChatList.vue';
import ChatBoard from '@elements/chat/ChatBoard.vue';
import { ref } from 'vue';
import { useUserStore } from '@/stores';

const currentChat = ref(null);

const user = useUserStore();
</script>

<template>
    <section class="-m-4 flex h-screen flex-col overflow-auto lg:flex-row-reverse">
        <ChatList @active-chat="chat => currentChat = chat" />
        <ChatBoard :role="user.role" :chat="currentChat" />
    </section>
</template>
