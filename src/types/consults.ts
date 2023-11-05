export type TcreateDiagnosis = {
    animal: string;
    diagnosis: string;
    treatment: string;
};
export type TDiagnosis = {
    id: string;
    diagnosis: string;
    treatment: string;
    createDate: string;
    updateDate: string;
    vet: string;
};

export type TAnimalAuthorized = {
    birthdate: string;
    color: string;
    description: string;
    farmer: string;
    gender: string;
    height: string;
    id: string;
    name: string;
    race: string;
    specie: string;
    weight: string;
};
