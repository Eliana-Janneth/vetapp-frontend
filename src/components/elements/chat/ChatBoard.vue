<script setup lang="ts">
import { TChat } from '@/types';
import InputBottom from './InputBottom.vue';
import { useStyleStore } from '@/stores';
import { createAvatar } from '@/helpers';
import noChatsIllustration from '@/assets/illustrations/no_chats.svg';

defineProps<{
    role: 'farmer' | 'vet';
    chat: TChat | null;
}>();

const style = useStyleStore();
</script>

<template>
    <section v-if="chat" :class="[style.getBackgroundChat]">
        <div class="flex bg-black/20">
            <div class="flex flex-grow">
                <div class="relative m-2 mr-4 w-12">
                    <img
                        class="mr-4 h-10 w-10 rounded-full shadow"
                        :src="createAvatar(chat.userName ?? '?', role)"
                        alt="Avatar"
                    />
                </div>
                <div class="flex flex-col justify-center">
                    <p class="font-bold text-white">{{ chat.userName }}</p>
                </div>
            </div>
        </div>

        <p>CHAT: {{ chat }}</p>
        <InputBottom class="mt-auto" />
    </section>
    <div v-else :class="[style.getBackgroundChat, 'text-white text-2xl flex items-center justify-center']">
        <img class="p-20" :src="noChatsIllustration" alt="No chats">
        <span>No hay chats seleccionados</span>
    </div>
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
