import { notify } from '@kyvg/vue3-notification';
import type { TOption as TAOption, TRegisterAnimalPayload } from './types';
import type { TOption } from '@/types';

const API_URL = import.meta.env.VITE_API_URL;

export const createAnimal = async (data: TRegisterAnimalPayload) => {
    const apiUrl = `${API_URL}/animals/`;
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
        alert('Animal registrado correctamente');
        console.log(JSON.stringify(responseData, null, 2));
        notify({
            title: "Animal creado exitosamente🎉",
            type: 'success'
        });
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};

export const getAnimals = async () => {
    try {
        const response = await fetch(`${API_URL}/animals/`, {
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
export const getAnimal = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/animals/${id}/`, {
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
export const getAnimalName = async (name: string) => {
    try {
        const response = await fetch(`${API_URL}/animals/search/?name=${name}`, {
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

export const getSpecies = async (): Promise<TOption[]> => {
    try {
        const response = await fetch(`${API_URL}/animal-species/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
        });
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos');
        }
        const data = await response.json();
        return data.map((specie: TAOption) => ({ text: specie.name, value: specie.id }));
    } catch (error) {
        console.error('Error al cargar los datos:', error);

        return [];
    }
};

export const getRaces = async (specieId: string): Promise<TOption[]> => {
    try {
        const response = await fetch(`${API_URL}/animal-specie-races/${specieId}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
        });
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos');
        }
        const data = await response.json();
        return data.map((race: TAOption) => ({ text: race.name, value: race.id }));
    } catch (error) {
        console.error('Error al cargar los datos:', error);

        return [];
    }
};
