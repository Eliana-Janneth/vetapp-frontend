import { TRejectRequestPayload, TSendRequestPayload, TVetAvailablePayload } from '../types';
import { TRejectRequest, TSendRequest, TVetAvailable } from '@/types/request';

export const adaptSendRequest = (response: TSendRequestPayload[]): TSendRequest[] => {
    return response.map((request) => ({
        id: request.id,
        animal: request.animal_name,
        race: request.race_name,
        specie: request.specie_name,
        vet: request.vet_name,
        message: request.message,
    }));
};

export const adaptRejectedRequest = (response: TRejectRequestPayload[]): TRejectRequest[] => {
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
