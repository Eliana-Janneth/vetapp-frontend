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

    let sendMessageFunction = null;
    export const connectToChat = (chatId: number) => {
        return new Promise((response, reject) => {
            const token = localStorage.getItem('accessToken');
            const socket = new WebSocket(`ws://127.0.0.1:9999/ws/chat/${chatId}/?auth=${token}`);

            socket.onopen = () => {
                console.log('Conexión WebSocket abierta');
            };
            let initialMessagesReceived = false;
            
            socket.onmessage = (event) => {
                console.log('chat:', event.data);
                const messageData = JSON.parse(event.data);

                if (Array.isArray(messageData.messages)) {
                    const messages = messageData.messages as TMessagePayload[];

                    if (!initialMessagesReceived) {
                        console.log('Mensajes iniciales recibidos:', messages);
                        response(adaptMessages(messages));
                        initialMessagesReceived = true;
                    } else {
                        messages.forEach((message) => {
                            console.log('Mensaje recibido:', message);
                            response(adaptMessages([message]));
                        });
                    }
                } else {
                    // Si el servidor envía un mensaje individual en lugar de un array, también lo procesamos
                    console.log('Mensaje individual recibido:', messageData);
                    response(adaptMessages([messageData]));
                }
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
            const sendMessage = (message: string) => {
                if (socket.readyState === WebSocket.OPEN) {
                    const jsonMessage = JSON.stringify({ message });
                    socket.send(jsonMessage);
                    console.log('Mensaje JSON enviado al servidor:', jsonMessage);
                } else {
                    console.error('La conexión no está abierta.');
                }
            };
            sendMessageFunction = sendMessage;
        });
    };
    export { sendMessageFunction as sendMessage };
