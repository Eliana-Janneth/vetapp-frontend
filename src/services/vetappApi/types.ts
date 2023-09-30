export type TOption = {
    name: string;
    id: string;
}

export type TRegisterPayload = {
    email: string;
    profile: 'farmer' | 'vet';
    password: string;
    repeat_password: string;
    first_name: string;
    last_name: string;
    document_number: string;
    phone_number: string;
    city: string;
    address: string;
};

export type TRegisterAnimalPayload = {
    birthdate: string;
    color: string;
    description: string;
    farmer: string;
    gender: string;
    heigth: string;
    name: string;
    race: string;
    specie: string;
    weight: string;
};
