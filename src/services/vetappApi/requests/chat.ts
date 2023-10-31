import { TChatsPayload } from "../types";
import { service } from "../../service";
import { adaptChats } from "../adapters";

export const getFarmerChats = async () => {
    const response = await service.get('farmer-chats') as TChatsPayload;
    return adaptChats(response);
};

export const getVetChats = async () => {
    const response = await service.get('vet-chats') as TChatsPayload;
    return adaptChats(response);
}