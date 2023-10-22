export type TRegisterFarmerRequest={
    message : string;
    animal : string;
    vet:    string; 
}

export type TVetInformation = {
    id: string;
    firstName: string;
    lastName: string;
    city: string;
    license: string;
    licenseExpiration: string;
};
export type TAcademicInformation = {
    university: string;
    title: string;
    year: string;
    country: string;
    academicDegree: string;
    currentlystudying: boolean;
};
export type TWorkExperience = {
    company: string;
    position: string;
    functions: string;
    startDate: string;
    endDate: string;
    country: string;
    currentlyWorking: boolean;
};