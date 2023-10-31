import { TRejectRequestPayload, TSendRequestPayload } from '../types';
import { TRejectRequest, TSendRequest } from '@/types/request';

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
