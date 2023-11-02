import type { TOption as TAOption, TRegisterFarmerRequestPayload } from "../types";
import { notify } from '@kyvg/vue3-notification';
import type { TOption } from '@/types';

const API_URL = import.meta.env.VITE_API_URL;

export const createFarmerRequest = async (data: TRegisterFarmerRequestPayload) => {
    const apiUrl = `${API_URL}/request/`;
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            if (errorData && errorData.response) {
                alert(`Error del servidor: ${errorData.response}`);
            } else {
                alert('Error en la solicitud al servidor.');
            }
            return;
        }
        // Si la respuesta es exitosa
        const responseData = await response.json();
        console.log(JSON.stringify(responseData, null, 2));
        notify({
            title: "Consulta enviada exitosamente 🎉",
            type: 'success'});
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};
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


