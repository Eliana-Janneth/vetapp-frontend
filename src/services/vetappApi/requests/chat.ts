import { TFarmerChatsPayload, TVetChatsPayload } from "../types";
import { service } from "../../service";
import { adaptFarmerChats, adaptVetChats } from "../adapters";

export const getFarmerChats = async () => {
    const response = await service.get('farmer-chats') as TFarmerChatsPayload;
    return adaptFarmerChats(response);
};

export const getVetChats = async () => {
    const response = await service.get('vet-chats') as TVetChatsPayload;
    return adaptVetChats(response);
}