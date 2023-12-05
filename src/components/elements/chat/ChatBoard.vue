<script setup lang="ts">
import { CameraIcon } from '@heroicons/vue/24/outline';
import VButton from '../VButton.vue';
import { ref, watch } from 'vue';
import VTextField from '../VTextField.vue';
import ChatMessage from './ChatMessage.vue';
import { useStyleStore, useChatStore, useUserStore } from '@/stores';
import { createAvatar } from '@/helpers';
import noChatsIllustration from '@/assets/illustrations/no_chats.svg';
import pet from '@/assets/icons/pet.svg';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const style = useStyleStore();

const board = ref<HTMLElement | null>(null);

const userStore = useUserStore();
const chatStore = useChatStore();

const message = ref('');

function handleImageUpload(event: Event) {
    const selectedImage = (event.target as HTMLInputElement).files?.[0];
    if (selectedImage) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onload = () => {
            const binaryData = String(reader.result);
            if (binaryData) {
                let attachmentParts = binaryData.split(',');
                const format = attachmentParts[0].split(';')[0].split('/')[1];
                const data = attachmentParts[1];

                if (chatStore.activeChat?.send) {
                    chatStore.activeChat!.send!({ data, format });
                    message.value = '';
                }
            }
        };
    }
}

const send = () => {
    if (chatStore.activeChat?.send) {
        chatStore.activeChat!.send!(message.value);
        message.value = '';
    }
};

watch(
    () => chatStore.activeChat,
    () => {
        if (board.value) {
            board.value.scrollTop = board.value.scrollHeight;
        }
    },
);
</script>

<template>
    <section v-if="chatStore.activeChat" :class="[style.getBackgroundChat]">
        <div class="flex bg-black/20">
            <div class="flex flex-grow">
                <div class="relative m-2 mr-4 w-12">
                    <img
                        class="mr-4 h-10 w-10 rounded-full shadow"
                        :src="createAvatar(chatStore.activeChat.userName ?? '?', userStore.role)"
                        alt="Avatar"
                    />
                </div>
                <div class="flex flex-col justify-center">
                    <span class="font-bold text-white">{{ chatStore.activeChat.userName }}</span>
                    <div class="flex gap-x-1">
                        <img class="h-5 w-5" :src="pet" alt="pet" />
                        <span class="font-thin text-white">{{ chatStore.activeChat.animal }}</span>
                        <span
                            :class="[
                                style.getAlertStyle,
                                'my-px ml-2 flex items-center font-thin leading-none text-gray-900',
                            ]"
                            >{{ chatStore.activeChat.specie }}</span
                        >
                    </div>
                </div>
            </div>
        </div>

        <div ref="board" class="scroll-style flex-grow overflow-y-auto p-4">
            <ChatMessage v-for="message in chatStore.activeChat.messages" :message="message" :role="userStore.role" />
        </div>

        <div class="mt-auto flex border-t px-2 py-4 lg:px-10">
            <div class="relative mr-2 flex w-full items-center rounded-md">
                <VTextField
                    v-model="message"
                    type="text"
                    :placeholder="t('FarmPage.chatm')"
                    class="font-base w-full rounded-lg bg-gray-100 px-4 py-3 pr-20 text-base focus:outline-none"
                    @keyup.enter="send"
                />
                <div class="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 lg:pr-4">
                    <div class="relative">
                        <VButton class="w-10 bg-transparent p-0 text-gray-500">
                            <input
                                type="file"
                                class="absolute inset-0 cursor-pointer opacity-0"
                                accept="image/*,  video/*"
                                @change="handleImageUpload"
                            />
                            <CameraIcon class="h-6 w-6" />
                        </VButton>
                    </div>
                </div>
            </div>

            <VButton class="w-fit" @click="send">{{ $t('FarmPage.chatsend') }}</VButton>
        </div>
    </section>
    <div v-else :class="[style.getBackgroundChat, 'flex items-center justify-center text-2xl text-white']">
        <img class="p-20" :src="noChatsIllustration" alt="No chats" />
        <span>{{ $t('VetPage.chats') }}</span>
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
