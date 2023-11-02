import { TChatPayload, TMessagePayload } from '../types';
import { service } from '../../service';
import { adaptChats, adaptMessages } from '../adapters';

export const getFarmerChats = async () => {
    const response = (await service.get('farmer-chats/')) as TChatPayload[];
    return adaptChats(response);
};

export const getVetChats = async () => {
    const response = (await service.get('vet-chats/')) as TChatPayload[];
    return adaptChats(response);
};

export const searchFarmerChats = async (name: string) => {
    const response = (await service.get(`farmer-chats/search/?name=${name}`)) as TChatPayload[];
    return adaptChats(response);
};
export const searchVetChats = async (name: string) => {
    const response = (await service.get(`vet-chats/search/?name=${name}`)) as TChatPayload[];
    return adaptChats(response);
};

export const connectToChat = (chatId: number) => {
    return new Promise((response, reject) => {
        const token = localStorage.getItem('accessToken');
        const socket = new WebSocket(`ws://127.0.0.1:9999/ws/chat/${chatId}/?auth=${token}`);

        socket.onopen = () => {
            console.log('Conexión WebSocket abierta');
        };

        socket.onmessage = (event) => {
            console.log('chat:', event.data);
            const chat = JSON.parse(event.data);
            const messages = chat.messages  as TMessagePayload[];
            console.log('Mensaje recibido:', messages);
            response(adaptMessages(messages)); 
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
        const sendMessage = (message:string) => {
            if (socket.readyState === WebSocket.OPEN) {
                const jsonMessage = JSON.stringify({ message: message });
                socket.send(jsonMessage);
                console.log('Mensaje JSON enviado al servidor:', jsonMessage);
            } else {
                console.error('La conexión no está abierta.');
            }
        };
    });
};
