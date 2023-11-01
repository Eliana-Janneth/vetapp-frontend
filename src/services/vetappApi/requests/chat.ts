import { TChatPayload } from '../types';
import { service } from '../../service';
import { adaptChats } from '../adapters';
import { io, Manager, Socket } from 'socket.io-client';

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

// export const connectToChat = (chatId: number) => {
//     return new Promise<WebSocket>((resolve, reject) => {
//       const token = localStorage.getItem('accessToken');
//       if (!token) {
//         reject(new Error('No se encontró el token de acceso en el almacenamiento local'));
//         return;
//       }

//       const headers = {
//         Authorization: `Token ${token}`
//       };

//       const ws = new WebSocket(`ws://127.0.0.1:9999/ws/chat/${chatId}/`, [], { headers });

//       ws.onopen = () => {
//         console.log('Conexión WebSocket abierta');
//         resolve(ws);
//       };

//       ws.onerror = (error) => {
//         console.error('Error de WebSocket:', error);
//         reject(error);
//       };
//     });
//   };

// Función para conectar al servidor Socket.io con encabezado de autorización
export const connectToChatS = (chatId: number) => {
    return new Promise<Socket>((resolve, reject) => {
        // Construir la URL de conexión WebSocket con el token de autorización
        const token = localStorage.getItem('accessToken');
        console.log(token);
        const socket: Socket = io(`ws://127.0.0.1:9999/ws/chat/${chatId}/`, {
            transports: ['websocket'], // Usar solo WebSocket
            auth: {
                Authorization: `Token ${token}`,
            },
        });

        // Manejar eventos de conexión y errores
        socket.on('connect', () => {
            console.log('Conexión WebSocket abierta');
            resolve(socket);
        });

        socket.on('error', (error: any) => {
            console.error('Error de WebSocket:', error);
            reject(error);
        });

        // Escuchar otros eventos personalizados
        socket.on('chatMessage', (message: string) => {
            console.log('Mensaje recibido:', message);
        });
    });
};


export const connectToChat = (chatId: number) => {
      const token = localStorage.getItem('accessToken');
      console.log(token);
      const webSocket: WebSocket = new WebSocket(`ws://127.0.0.1:9999/ws/chat/${chatId}/`)
      
      console.log(webSocket.readyState)
      //const socket = manager.socket(`/ws/chat/${chatId}/`);

      // Manejar eventos de conexión y errores
     
};

