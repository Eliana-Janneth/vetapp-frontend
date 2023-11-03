<script setup lang="ts">
import { ChatListItem } from '@elements';
import { vetappApi } from '@/services';
import { TChat } from '@/types/chat';
import { ref } from 'vue';
import { useUserStore } from '@/stores';
import VTextField from '../VTextField.vue';

defineEmits(['activeChat']);

const chats = ref<TChat[]>([]);
const search = ref('');
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

const searchData = () => {
    if (search.value) {
        if (user.isFarmer) {
            vetappApi.searchFarmerChats(search.value).then((response) => {
                chats.value = response;
            });
        } else {
            vetappApi.searchVetChats(search.value).then((response) => {
                chats.value = response;
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
            v-for="chat in chats"
            @click="() => $emit('activeChat', chat)"
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
