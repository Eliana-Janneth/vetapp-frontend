export type TFarmerChat = {
    id: number;
    vet: string;
    animal: string;
    specie: string;
};
export type TVetChat = {
    id: number;
    farmer: string;
    animal: string;
    specie: string;
};

export type TFarmerChats = TFarmerChat[];
export type TVetChats = TVetChat[];