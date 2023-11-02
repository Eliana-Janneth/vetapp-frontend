import { TChat, TMessage } from '@/types/chat';
import { TChatPayload, TMessagePayload } from '../types';

export const adaptChats = (response: TChatPayload[]): TChat[] => {
    return response.map((chat) => ({
        id: chat.id,
        userName: chat.name,
        animal: chat.animal_name,
        specie: chat.animal_specie,
    }));
};

export const adaptMessages = (response: TMessagePayload[]): TMessage[] => {
    return response.map((message) => ({
        id: message.id,
        sender: message.sender_name,
        role: message.sender_role,
        message: message.message,
        date: message.date_sent,
        file: message.file,
    }));
};
