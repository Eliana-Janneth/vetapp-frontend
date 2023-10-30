export type TFarmerChatPayload = {
    id: number;
    name: string;
    animal_name: string;
    animal_specie: string;
};
export type TVetChatPayload = {
    id: number;
    name: string;
    animal_name: string;
    animal_specie: string;
};

export type TFarmerChatsPayload = TFarmerChatPayload[];
export type TVetChatsPayload = TVetChatPayload[];
