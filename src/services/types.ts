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
}