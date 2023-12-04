import { TChat, TMessage } from '@/types/chat';
import { TChatPayload, TMessagePayload } from '../types';

export const adaptChats = (response: TChatPayload[]): TChat[] => {
    return response.map((chat) => ({
        id: chat.id,
        userName: chat.name,
        animal: chat.animal_name,
        specie: chat.animal_specie,
        messages: null,
    }));
};

export const adaptMessage = (response: TMessagePayload): TMessage => {
    return {
        id: response.id,
        sender: response.sender_name,
        role: response.sender_role,
        message: response.message,
        date: response.date_sent,
        file: response.file,
        hasFile: response.has_file,
    };
};

export const adaptMessages = (response: TMessagePayload[]): TMessage[] => {
    return response.map((message) => adaptMessage(message));
};
