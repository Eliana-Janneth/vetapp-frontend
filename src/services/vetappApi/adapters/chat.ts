import { TChat } from '@/types/chat';
import { TChatPayload } from '../types';

export const adaptChats = (response: TChatPayload[]): TChat[] => {
    return response.map((chat) => ({
        id: chat.id,
        userName: chat.name,
        animal: chat.animal_name,
        specie: chat.animal_specie,
    }));
};


