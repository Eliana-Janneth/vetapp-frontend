
export type TRequestPayload = {
    id: number;
    specie_name: string;
    animal_name: string;
    race_name: string;
    message: string;
    vet_name: string;
};

export type TRegisterFarmerRequestPayload = {
    message: string;
    animal: string;
    veterinarian: string;
};

export type TRequestFarmerPayload = {
    id: string;
    message: string;
    animal_name: string;
    specie_name: string;
    race_name: string;
    farmer_name: string;
    status: string;
};

export type TVetAvailablePayload = {
    id: string;
    first_name: string;
    last_name: string;
    city: string;
    license_number: string;
    license_expiry_date: string;
};
