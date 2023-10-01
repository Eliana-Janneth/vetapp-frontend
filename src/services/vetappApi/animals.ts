import type { TOption as TAOption } from "./types";
import type { TOption } from '@/types';

const API_URL = import.meta.env.VITE_API_URL;

// export const createAnimal = async (data: TRegisterAnimalPayload) => {};

export const getAnimals = async () => {
    try {
        const response = await fetch( `${API_URL}/animals/`,{
            headers: {
                'Authorization': `Token ${localStorage.getItem('accessToken')}`
            }
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
   
        const response = await fetch(`${API_URL}/animal-species/`,{
            headers: {
                'Authorization': `Token ${localStorage.getItem('accessToken')}`
            }
        });
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos');
        }
        const data = await response.json();
        return data.map((specie: TAOption) => ({ text: specie.name, value: specie.id }))
    } catch (error) {
        console.error('Error al cargar los datos:', error);

        return []; 
    }
};

export const getRaces = async (specie: string) => {
    if (specie) {
        try {
            const response = await fetch( `${API_URL}/animal-races/`,{
                headers: {
                    'Authorization': `Token ${localStorage.getItem('accessToken')}`
                }
            });
            if (!response.ok) {
                throw new Error('No se pudo cargar los datos');
            }
            const data = await response.json();

            return data;
        } catch (error) {
            console.error('Error al cargar los datos:', error);

            return []; // Devuelve un arreglo vacío en caso de error
        }
    }
};