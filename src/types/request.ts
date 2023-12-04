export type TRequest = {
    id: number;
    specie: string;
    animal: string;
    race: string;
    message: string;
    vet: string;
};

export type TRegisterFarmerRequest = {
    message: string;
    animal: string;
    vet: string;
};
export type TVetAvailable = {
    id: string;
    name: string;
    lastName: string;
    city: string;
    license: string;
    expiryDate: string;
};

export type TRequestFarmer = {
    id: string;
    message: string;
    animal: string;
    specie: string;
    race: string;
    farmer: string;
    status: string;
};
