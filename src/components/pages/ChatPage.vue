<script setup lang="ts">
import ChatList from '@elements/chat/ChatList.vue';
import ChatBoard from '@elements/chat/ChatBoard.vue';
import { ref } from 'vue';

const currentChat = ref(null);
</script>

<template>
    <section class="-m-4 flex h-screen flex-col overflow-auto lg:flex-row-reverse">
        <ChatList @active-chat="chat => currentChat = chat" />
        <ChatBoard role="farmer" :chat="currentChat" />
    </section>
</template>
