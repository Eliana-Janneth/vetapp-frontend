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
    birth_date: string;
    color: string;
    description: string;
    gender: string;
    height: string;
    name: string;
    race: string;
    specie: string;
    weight: string;
};

export type TLoginPayload = {
    username: string;
    password: string;
};