<script setup lang="ts">
import ChatList from '@elements/chat/ChatList.vue';
import ChatBoard from '@elements/chat/ChatBoard.vue';
</script>

<template>
    <section class="-m-4 flex h-screen flex-col overflow-auto lg:flex-row-reverse">
        <ChatList />
        <ChatBoard />
    </section>
</template>
