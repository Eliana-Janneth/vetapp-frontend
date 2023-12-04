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
    license_expiry_date: Date;
    available: boolean;
};

export type TUpdateVetInformationPayload = {
    license_number: string;
    license_expiry_date: Date;
};

export type TWorkExperiencePayload = {
    title: string;
    company: string;
    functions: string;
    start_date: string;
    end_date: string;
    country: string;
    currently: boolean;
};

export type TAcademicInformationPayload = {
    title: string;
    university: string;
    year: string;
    country: string;
    academic_degree: string;
    currently: boolean;
};

export type TCreateAvailabilityPayload = {
    available: boolean;
};

export type TOption = {
    name: string;
    id: string;
};
