import { TRequestPayload, TVetAvailablePayload, TRequestFarmerPayload } from '../types';
import { TRequest, TVetAvailable, TRequestFarmer } from '@/types/request';

export const adaptRequest = (response: TRequestPayload[]): TRequest[] => {
    return response.map((request) => ({
        id: request.id,
        animal: request.animal_name,
        race: request.race_name,
        specie: request.specie_name,
        vet: request.vet_name,
        message: request.message,
    }));
};

export const adaptVetAvailable = (response: TVetAvailablePayload[]): TVetAvailable[] => {
    return response.map((vet) => ({
        id: vet.id,
        name: vet.first_name,
        lastName: vet.last_name,
        city: vet.city,
        license: vet.license_number,
        expiryDate: vet.license_expiry_date,
    }));
};

export const adaptRequestFarmer = (response: TRequestFarmerPayload[]): TRequestFarmer[] => {
    return response.map((request) => ({
        id: request.id,
        animal: request.animal_name,
        race: request.race_name,
        specie: request.specie_name,
        farmer: request.farmer_name,
        message: request.message,
        status: request.status,
    }));
};
