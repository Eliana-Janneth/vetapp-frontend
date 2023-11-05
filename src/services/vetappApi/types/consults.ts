export type TDiagnosisPayload = {
    id: string;
    diagnosis: string;
    treatment: string;
    create_date: string;
    update_date: string;
    vet_name:string;
};

export type TDiagnosisCreatePayload = {
    diagnosis: string;
    treatment: string;
};

export type TAnimalAuthorizedPayload = {
    birth_date: string;
    color: string;
    description: string;
    farmer_name: string;
    gender: string;
    height: string;
    id: string;
    name: string;
    race_name: string;
    specie_name: string;
    weight: string;
};
