import { TOption as TAOption, TSendRequestPayload, TRejectRequestPayload, TRegisterFarmerRequestPayload } from '../types';
import { service } from '../../service';
import { adaptRejectedRequest, adaptSendRequest } from '../adapters';
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
}


export const getVetAvailables = async () => {
    try {
        const response = await fetch(`${API_URL}/vets/available/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
        });
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
};

export const getAnimalsRequest = async (): Promise<TOption[]> => {
    try {
        const response = await fetch(`${API_URL}/animals-list/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
        });
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos');
        }
        const data = await response.json();
        return data.map((animal: TAOption) => ({ text: animal.name, value: animal.id }));
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        return [];
    }
};

export const getFarmerRequestS = async () => {
    try {
        const response = await fetch(`${API_URL}/vet-requests/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
        });
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
};

export const responseToFarmerRequest = async (id: string, vetResponse: boolean) => {
    try{
        const response = await fetch(`${API_URL}/vet-requests/${id}/`, {
            method: 'POST',
            body: JSON.stringify({"vet_response":vetResponse}),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
            
        });
        if (!response.ok) {
            throw new Error('No se enviar la respuesta');
        }
    } catch (error){
        console.error('Error', error);
    }
}



