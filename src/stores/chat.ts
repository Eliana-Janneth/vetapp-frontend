import { vetappApi } from '@/services';
import { TChat } from '@/types';
import { defineStore } from 'pinia';

type State = {
    active: TChat['id'] | null;
    chats: (TChat & { send: ((msg: string) => void) | null})[];
};

export const useChatStore = defineStore('chat', {
    state: (): State => ({
        active: null,
        chats: [],
    }),
    getters: {
        activeChat: (state) => (state.active ? state.chats.find((chat) => chat.id === state.active) : null),
    },
    actions: {
        updateChats(chats: TChat[]) {
            this.chats = chats.map((chat) => ({ ...chat, send: null }));
            this.fillChatMessages();
        },
        fillChatMessages() {
            this.chats.forEach((chat) => {
                vetappApi
                    .connectToChat(chat.id)
                    .then((sender) => {
                        chat.send = sender;
                    })
                    .catch((error) => {
                        console.error('Error en la conexión WebSocket:', error);
                    });
            });
        },
    },
});
