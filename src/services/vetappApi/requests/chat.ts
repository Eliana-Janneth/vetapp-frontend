import { TChatPayload } from '../types';
import { service } from '../../service';
import { adaptChats } from '../adapters';

export const getFarmerChats = async () => {
    const response = (await service.get('farmer-chats/')) as TChatPayload[];
    return adaptChats(response);
};

export const getVetChats = async () => {
    const response = (await service.get('vet-chats/')) as TChatPayload[];
    return adaptChats(response);
};

export const searchFarmerChats = async (name: string) => {
    const response = (await service.get(
        `farmer-chats/search/?animal_name=${name}&?vet_name=${name}`,
    )) as TChatPayload[];
    return adaptChats(response);
};
export const searchVetChats = async (name: string) => {
    const response = (await service.get(
        `vet-chats/search/?farmer_name=${name}&?animal_name=${name}`,
    )) as TChatPayload[];
    return adaptChats(response);
};

export const connectToChat = (chatId) => {
        // Construir la URL de conexión WebSocket con el token de autorización
        const token = localStorage.getItem('accessToken');
        console.log(token);
        const socket = new WebSocket(`ws://127.0.0.1:9999/ws/chat/${chatId}/?auth=${token}`);
        socket.onopen = () => {
            console.log('Conexión WebSocket abierta');
        };
    
        socket.onmessage = (event) => {
            console.log('Mensaje recibido:', event.data);
        };
    
        socket.onclose = (event) => {
            if (event.wasClean) {
                console.log(`Conexión cerrada limpiamente, código=${event.code}, razón=${event.reason}`);
            } else {
                console.error('Conexión cerrada bruscamente'); 
            }
        };
    
        console.log("Conexión WebSocket establecida");
    
        // Función para enviar mensajes al servidor en formato JSON
        const sendMessage = (message) => {
            if (socket.readyState === WebSocket.OPEN) {
                const jsonMessage = JSON.stringify({ message: message });
                socket.send(jsonMessage);
                console.log('Mensaje JSON enviado al servidor:', jsonMessage);
            } else {
                console.error('La conexión no está abierta.');
            }
        };
    
        
    };
