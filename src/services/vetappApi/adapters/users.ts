import { TAcademicInformation, TVetInformation, TWorkExperience } from '@/types';
import { TAcademicInformationPayload, TVetInformationPayload, TWorkExperiencePayload } from '../types';

export const adaptWorkExperience = (response: TWorkExperiencePayload[]): TWorkExperience[] => {
    return response.map((work) => ({
        company: work.company,
        position: work.title,
        functions: work.functions,
        startDate: work.start_date,
        endDate: work.end_date,
        country: work.country,
        currentlyWorking: work.currently,
    }));
};

export const adaptAcademicInformation = (response: TAcademicInformationPayload[]): TAcademicInformation[] => {
    return response.map((academic) => ({
        university: academic.university,
        title: academic.title,
        year: academic.year,
        country: academic.country,
        academicDegree: academic.academic_degree,
        currentlyStudying: academic.currently,
    }));
};

export const adaptVetInformation = (response: TVetInformationPayload): TVetInformation => {
    const vet = response;
    return {
        id: vet.id,
        name: vet.first_name,
        lastName: vet.last_name,
        email: vet.email,
        document: vet.document_number,
        phone: vet.phone_number,
        city: vet.city,
        address: vet.address,
        password: vet.password,
        repeatPassword: vet.repeat_password,
        license: vet.license_number,
        licenseExpiryDate: vet.license_expiry_date,
        available: vet.available,
    };
};
