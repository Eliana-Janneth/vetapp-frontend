<script setup lang="ts">
import { MagnifyingGlassIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/outline';
import PersonOnline from './PersonOnline.vue';
import ChatList from './ChatList.vue';
import LeftMessage from './LeftMessage.vue';
import RightMessage from './RightMessage.vue';
import InputBottom from './InputBottom.vue';
import ChatHeader from './ChatHeader.vue';
</script>

<template>
    <section class="flex h-screen overflow-hidden">
        <div class="w-full bg-gray-100">
            <div class="border-b px-20">
               <ChatHeader/>
            </div>

            <div class="h-3/4 overflow-auto px-6 py-2">
                <LeftMessage />
                <RightMessage />
                <LeftMessage />
                <RightMessage />
                <LeftMessage />
                <RightMessage />
            </div>

            <InputBottom />
        </div>
        <div class="w-96 bg-white p-6">
            <h3 class="mb-8 text-2xl">Chat en línea</h3>
            <div class="mb-8 flex w-full overflow-auto">
                <PersonOnline />
                <PersonOnline />
                <PersonOnline />
                <PersonOnline />
                <PersonOnline />
                <PersonOnline />

            </div>
            <div class="h-4/5 overflow-auto">
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
            </div>
        </div>
    </section>
</template>
