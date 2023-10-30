type TSendRequestPayload = {
    id: number;
    specie_name: string;
    animal_name: string;
    race_name: string;
    message: string;
    vet_name: string;
};
type TRejectRequestPayload = {
    id: number;
    specie_name: string;
    animal_name: string;
    race_name: string;
    message: string;
    vet_name: string;
};

export type TSendRequestsPayload = TSendRequestPayload[];
export type TRejectRequestsPayload = TRejectRequestPayload[];
