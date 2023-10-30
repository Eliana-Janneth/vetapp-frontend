export type TOption = {
    name: string;
    id: string;
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
