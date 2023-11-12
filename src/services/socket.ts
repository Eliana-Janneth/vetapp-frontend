import { TChatMsg } from '@/types';
import { adaptMessages } from './vetappApi/adapters';
import { useChatStore } from '@/stores';

export const connectToChat = (chatId: number): Promise<{send: (msg: TChatMsg) => void; close: WebSocket['close']}> => {
    const chatStore = useChatStore();
    const chat = chatStore.chats.find((c) => c.id === chatId);

    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('accessToken');
        const socket = new WebSocket(`${import.meta.env.VITE_WS_URL}/ws/chat/${chatId}/?auth=${token}`);

        socket.onopen = () => {
            console.log('Conexión WebSocket abierta');
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.messages) chat!.messages = adaptMessages(data.messages);
            else
                chat!.messages!.push({
                    id: data.id,
                    sender: data.sender_name,
                    role: data.sender_role,
                    message: data.message,
                    date: data.date_sent,
                    file: data.file,
                });
        };

        socket.onclose = (event) => {
            if (event.wasClean) {
                console.log(`Conexión cerrada limpiamente, código=${event.code}, razón=${event.reason}`);
            } else {
                console.error('Conexión cerrada bruscamente');
                reject(event.reason); // Rechaza la promesa si hay un error en la conexión
            }
        };

        // Función para enviar mensajes al servidor en formato JSON
        const sendMessage = (msg: TChatMsg) => {
            if (socket.readyState === WebSocket.OPEN) {
                let message = null;
                if (typeof msg === 'string') message = { message: msg };
                else message = { message: 'null', attachment: {...msg} };

                const jsonMessage = JSON.stringify(message);
                socket.send(jsonMessage);
                console.log('Mensaje JSON enviado al servidor:', jsonMessage);
            } else {
                console.error('La conexión no está abierta.');
            }
        };

        resolve({ send: sendMessage, close: () => socket.close() });
    });
};
