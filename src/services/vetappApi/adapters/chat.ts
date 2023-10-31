import { TChats } from '@/types/chat';
import { TChatsPayload } from '../types';

export const adaptChats = (response: TChatsPayload): TChats => {
    return response.map((chat) => ({
        id: chat.id,
        userName: chat.name,
        animal: chat.animal_name,
        specie: chat.animal_specie,
    }));
};


