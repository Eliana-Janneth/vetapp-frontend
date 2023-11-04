<script setup lang="ts">
import { ChatListItem } from '@elements';
import { vetappApi } from '@/services';
import { ref } from 'vue';
import { useUserStore, useChatStore } from '@/stores';
import VTextField from '../VTextField.vue';

defineEmits(['activeChat']);

const search = ref('');
const user = useUserStore();
const chatStore = useChatStore();

if (user.isFarmer) {
    vetappApi.getFarmerChats().then((response) => {
        chatStore.updateChats(response);
    });
} else {
    vetappApi.getVetChats().then((response) => {
        chatStore.updateChats(response);
    });
}

const searchData = () => {
    if (search.value) {
        if (user.isFarmer) {
            vetappApi.searchFarmerChats(search.value).then((response) => {
                chatStore.updateChats(response);
            });
        } else {
            vetappApi.searchVetChats(search.value).then((response) => {
                chatStore.updateChats(response);
            });
        }
    }
};



</script>

<template>
    <div class="scroll-style flex min-w-[300px] gap-4 overflow-x-auto bg-gray-100 p-4 lg:flex-col">
        
        <VTextField
        class="lg:w-full w-56"
            :placeholder="`Buscar por Animal o ${user.isFarmer ? 'Veterinario' : 'Granjero'}`"
            v-model="search"
            @input="searchData"
        />
        <ChatListItem
            v-for="chat in chatStore.chats"
            @click="() => chatStore.active = chat.id"
            :key="chat.id"
            :chat="chat"
            :role="user.role"
        />
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
