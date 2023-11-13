export type TWorkExperience = {
    company: string;
    position: string;
    functions: string;
    startDate: string;
    endDate: string;
    country: string;
    currentlyWorking: boolean;
};

export type TAcademicInformation = {
    university: string;
    title: string;
    year: string;
    country: string;
    academicDegree: string;
    currentlyStudying: boolean;
};


export type TVetInformation={
    id: string;
    name: string;
    lastName: string;
    email: string;
    document: string;
    phone: string;
    city: string;
    address: string;
    password: string;
    repeatPassword: string;
    license: string;
    licenseExpiryDate: string;
    available: boolean;
}

export type TUpdateVetInformation={
    license: string;
    licenseExpiryDate: Date;
}