import { TChatPayload } from "../types";
import { service } from "../../service";
import { adaptChats } from "../adapters";

export const getFarmerChats = async () => {
    const response = await service.get('farmer-chats') as TChatPayload[];
    return adaptChats(response);
};

export const getVetChats = async () => {
    const response = await service.get('vet-chats') as TChatPayload[];
    return adaptChats(response);
}