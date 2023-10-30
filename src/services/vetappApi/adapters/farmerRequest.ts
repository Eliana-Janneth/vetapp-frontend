import { TRejectRequestsPayload, TSendRequestsPayload } from '../types';
import { TRejectRequests, TSendRequests } from '@/types/farmerRequest';

export const adaptSendRequest = (response: TSendRequestsPayload): TSendRequests => {
    return response.map((request) => ({
        id: request.id,
        animal: request.animal_name,
        race: request.race_name,
        specie: request.specie_name,
        vet: request.vet_name,
        message: request.message,
    }));
};

export const adaptRejectedRequest = (response: TRejectRequestsPayload): TRejectRequests => {
    return response.map((request) => ({
        id: request.id,
        animal: request.animal_name,
        race: request.race_name,
        specie: request.specie_name,
        vet: request.vet_name,
        message: request.message,
    }));
};
