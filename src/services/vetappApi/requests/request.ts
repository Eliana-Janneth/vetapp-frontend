import {
    TOption as TAOption,
    TSendRequestPayload,
    TRejectRequestPayload,
    TRegisterFarmerRequestPayload,
    TVetAvailablePayload,
} from '../types';
import { service } from '../../service';
import { adaptRejectedRequest, adaptSendRequest, adaptVetAvailable } from '../adapters';
import type { TOption } from '@/types';

const API_URL = import.meta.env.VITE_API_URL;

export const getSendRequest = async () => {
    const response = (await service.get('request/0/')) as TSendRequestPayload[];
    return adaptSendRequest(response);
};
export const getRejectedRequest = async () => {
    const response = (await service.get('request/2/')) as TRejectRequestPayload[];
    return adaptRejectedRequest(response);
};

export const createFarmerRequest = async (data: TRegisterFarmerRequestPayload) => {
    await service.post('request', data);
};

export const getVetAvailables = async () => {
    const response = (await service.get('vets/available/')) as TVetAvailablePayload[];
    return adaptVetAvailable(response);
};

export const searchVetAvailables = async (name: string) => {
    const response = (await service.get(`vets/available/?name=${name}`)) as TVetAvailablePayload[];
    return adaptVetAvailable(response);
};

export const getAnimalsRequest = async (): Promise<TOption[]> => {
    const response = (await service.get(`animals-list/`)) as TAOption[];
    return response.map((animal: TAOption) => ({ text: animal.name, value: animal.id }));
};

export const getFarmerRequests = async () => {
    const response = await service.get(`vet-requests/`);
    return response;
};

export const responseToFarmerRequest = async (id: string, vetResponse: boolean) => {
    try {
        const response = await fetch(`${API_URL}/vet-requests/${id}/`, {
            method: 'POST',
            body: JSON.stringify({ vet_response: vetResponse }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
        });
        if (!response.ok) {
            throw new Error('No se enviar la respuesta');
        }
    } catch (error) {
        console.error('Error', error);
    }
};
