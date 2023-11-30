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
    const response = (await service.get(`farmer-chats/search/?name=${name}`)) as TChatPayload[];
    return adaptChats(response);
};
export const searchVetChats = async (name: string) => {
    const response = (await service.get(`vet-chats/search/?name=${name}`)) as TChatPayload[];
    return adaptChats(response);
};
