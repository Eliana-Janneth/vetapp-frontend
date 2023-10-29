export type TOption = {
    name: string;
    id: string;
};

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

export type TFarmerInformationPayload = {
    first_name: string;
    last_name: string;
    email: string;
    document_number: string;
    phone_number: string;
    city: string;
    address: string;
    password: string;
    repeat_password: string;
};
export type TVetInformationPayload = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    document_number: string;
    phone_number: string;
    city: string;
    address: string;
    password: string;
    repeat_password: string;
    license_number: string;
    license_expiry_date: string;
    available: boolean;
};
export type TWorkExperiencePayload = {
    title: string;
    company: string;
    functions: string;
    start_date: string;
    end_date: string;
    country: string;
    currently_working: boolean;
};

export type TAcademicInformationPayload = {
    title: string;
    university: string;
    year: string;
    country: string;
    academic_degree: string;
    currently_studying: boolean;
};
export type TAnimalPayload = {
    birth_date: string;
    color: string;
    description: string;
    gender: string;
    height: string;
    id: string;
    name: string;
    race_name: string;
    specie_name: string;
    weight: string;
};

export type TDiagnosisPayload = {
    id: string;
    diagnosis: string;
    treatment: string;
    create_date: string;
};

export type TRegisterFarmerRequestPayload = {
    message: string;
    animal: string;
    veterinarian: string;
}

export type TCreateAvailabilityPayload={
    available: boolean;
}

export type TRequestFarmerPayload = {
    id: string;
    message: string;
    animal_name: string;
    specie_name: string;
    race_name: string;
    farmer_name: string;
    status: string;
}

export type TRegisterFarmerRequest={
    message : string;
    animal : string;
    vet:    string; 
}

export type TSendRequestPayload = {
    
};