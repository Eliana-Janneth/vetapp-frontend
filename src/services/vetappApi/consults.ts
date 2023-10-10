import type { TDiagnosisPayload } from './types';

const API_URL = import.meta.env.VITE_API_URL;

export const getAnimalsAuthorized = async () => {
    try {
        const response = await fetch(`${API_URL}/authorized-animals/`, {
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

//TODO: Copiar url
export const createDiagnosis = async (data: TDiagnosisPayload, id: string) => {
    const apiUrl = `${API_URL}/vet-medical-historys/${id}/`;
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
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};

export const getAnimalAuthorized = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/vet-animal-info/${id}/`, {
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

export const getDiagnosis = async (id: string) => {
    try {
        console.log('Prueba');
        const response = await fetch(`${API_URL}/vet-medical-historys/${id}/`, {
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
