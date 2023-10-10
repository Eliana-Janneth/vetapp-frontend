export type TRegisterFormAccount = {
    profile: 'farmer' | 'vet';
    email: string;
    password: string;
    confirmPassword: string;
};

export type TRegisterFormProfile = {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    document: string;
};
