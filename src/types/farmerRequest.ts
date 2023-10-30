type TSendRequest = {
    id: number;
    specie: string;
    animal: string;
    race: string;
    message: string;
    vet: string;
};
type TRejectRequest = {
    id: number;
    specie: string;
    animal: string;
    race: string;
    message: string;
    vet: string;
};

export type TSendRequests = TSendRequest[];
export type TRejectRequests = TRejectRequest[];
