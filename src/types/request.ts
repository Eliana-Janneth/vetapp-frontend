export type TSendRequest = {
    id: number;
    specie: string;
    animal: string;
    race: string;
    message: string;
    vet: string;
};
export type TRejectRequest = {
    id: number;
    specie: string;
    animal: string;
    race: string;
    message: string;
    vet: string;
};

export type TRegisterFarmerRequest={
    message : string;
    animal : string;
    vet:    string; 
}
export type TVetAvailable = {
    id: string;
    name: string;
    lastName: string;
    city: string;
    license: string;
    expiryDate: string;
};