import { TFarmerChats, TVetChats } from '@/types/chat';
import { TFarmerChatsPayload, TVetChatsPayload } from '../types';

export const adaptFarmerChats = (response: TFarmerChatsPayload): TFarmerChats => {
    return response.map((chat) => ({
        id: chat.id,
        userName: chat.name,
        animal: chat.animal_name,
        specie: chat.animal_specie,
    }));
};

export const adaptVetChats = (response: TVetChatsPayload): TVetChats => {
    return response.map((chat) => ({
        id: chat.id,
        userName: chat.name,
        animal: chat.animal_name,
        specie: chat.animal_specie,
    }));
}
