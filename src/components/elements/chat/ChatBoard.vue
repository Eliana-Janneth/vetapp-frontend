<script setup lang="ts">
import { TChat, TMessage } from '@/types';
import { CameraIcon, ClipboardIcon } from '@heroicons/vue/24/outline';
import VButton from '../VButton.vue';
import { ref, watch, onMounted } from 'vue';
import VTextField from '../VTextField.vue';
import ChatMessage from './ChatMessage.vue';
import { useStyleStore } from '@/stores';
import { createAvatar } from '@/helpers';
import noChatsIllustration from '@/assets/illustrations/no_chats.svg';
import pet from '@/assets/icons/pet.svg';
import { vetappApi } from '@/services';

const props = defineProps<{
    role: 'farmer' | 'vet';
    chat: TChat | null;
}>();

const style = useStyleStore();

const message = ref('');

function handleImageUpload(event: Event) {
    const selectedImage = (event.target as HTMLInputElement).files?.[0];
    console.log('Imagen seleccionada:', selectedImage);
}
function handleDocumentUpload(event: Event) {
    const selectedDocument = (event.target as HTMLInputElement).files?.[0];
    console.log('Documento seleccionado:', selectedDocument);
}

const messages = ref<TMessage[]>([]);

const handleWebSocketMessage = (messageData: TMessage[]) => {
    messages.value.push(...messageData);
};

const chat = () => {
    vetappApi
        .connectToChat(props.chat?.id as number)
        .then((messageData: any) => {
            handleWebSocketMessage(messageData);
        })
        .catch((error) => {
            console.error('Error en la conexión WebSocket:', error);
        });
};

const sendMessage = () => {
    if (message.value && props.chat) {
        vetappApi.sendMessage(message.value);
        message.value = '';
    }
};
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
                    <span class="font-bold text-white">{{ chat.userName }}</span>
                    <div class="flex gap-x-1">
                        <img class="h-5 w-5" :src="pet" alt="pet" />
                        <span class="font-thin text-white">{{ chat.animal }}</span>
                        <span
                            :class="[
                                style.getAlertStyle,
                                'my-px ml-2 flex items-center font-thin leading-none text-gray-900',
                            ]"
                            >{{ chat.specie }}</span
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="scroll-style flex-grow overflow-auto p-4">
            <ChatMessage v-for="message in messages" :message="message" :role="role" />
            <pre>{{ message }}</pre>
        </div>

        <div class="mt-auto flex border-t px-2 py-4 lg:px-10">
            <div class="relative mr-2 flex w-full items-center rounded-md">
                <VTextField
                    v-model="message"
                    type="text"
                    placeholder="Escribe tu mensaje ..."
                    class="font-base w-full rounded-lg bg-gray-100 px-4 py-3 pr-20 text-base focus:outline-none"
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

                    <div class="relative">
                        <VButton class="w-10 bg-transparent p-0 text-gray-500">
                            <input
                                type="file"
                                class="absolute inset-0 cursor-pointer opacity-0"
                                accept=".pdf, .doc, .docx"
                                @change="handleDocumentUpload"
                            />
                            <ClipboardIcon class="h-6 w-6" />
                        </VButton>
                    </div>
                </div>
            </div>

            <VButton class="w-fit" @click="sendMessage">Enviar</VButton>
        </div>
    </section>
    <div v-else :class="[style.getBackgroundChat, 'flex items-center justify-center text-2xl text-white']">
        <img class="p-20" :src="noChatsIllustration" alt="No chats" />
        <span>No hay chats seleccionados</span>
    </div>
</template>

<style scoped>
/* .material-symbols-outlined {
  font-variation-settings:
  'FILL' '#FFF',
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
} */

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
