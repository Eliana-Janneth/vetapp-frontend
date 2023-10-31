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
    const response = (await service.get(`farmer-chats/search/?animal_name=${name}&?vet_name=${name}`)) as TChatPayload[];
    return adaptChats(response);
};
export const searchVetChats = async (name: string) => {
    const response = (await service.get(
        `vet-chats/search/?farmer_name=${name}&?animal_name=${name}`,
    )) as TChatPayload[];
    return adaptChats(response);
};

// export const connectToChat = async (chatId: number) => {
//     try {
//         const token = localStorage.getItem('accessToken');
//         console.log('token', token);
//         if (!token) {
//             throw new Error('No se encontró el token de acceso en el almacenamiento local');
//         }
//         const headers = {
//             Authorization: "Token " + token
//         };

//         const ws = new WebSocket(`ws://127.0.0.1:9999/ws/chat/${chatId}/`, [headers]);

//         return new Promise((resolve, reject) => {
//             ws.onopen = () => {
//                 console.log('Conexión WebSocket abierta');
//                 resolve(ws);
//             };

//             ws.onerror = (error) => {
//                 console.error('Error de WebSocket:', error);
//                 reject(error);
//             };
//         });
//     } catch (error) {
//         console.error('Error al conectar al chat:', error);
//         throw error;
//     }
// };
