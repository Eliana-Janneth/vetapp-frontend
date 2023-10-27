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
    currentlystudying: boolean;
};

export type TWorkExperiencePayload = {
    title: string;
    company: string;
    functions: string;
    start_date: string;
    end_date: string;
    country: string;
    currently_working: boolean;
    currently: string;
};

export type TAcademicInformationPayload = {
    title: string;
    university: string;
    year: string;
    country: string;
    academic_degree: string;
    currently_studying: boolean;
    currently: string;
};

export type TRegisterFarmerRequest={
    message : string;
    animal : string;
    vet:    string; 
}
