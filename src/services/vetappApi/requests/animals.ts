import { notify } from '@kyvg/vue3-notification';
import type { TOption as TAOption, TRegisterAnimalPayload } from '../types';
import type { TOption } from '@/types';
import { TAnimalPayload } from '../types';
import { service } from '../../service';
import { adaptAnimal, adaptAnimals } from '../adapters/animals';

const API_URL = import.meta.env.VITE_API_URL;

export const createAnimal = async (data: TRegisterAnimalPayload) => {
    await service.post('animals', data);
};

// export const createAnimal = async (data: TRegisterAnimalPayload) => {
//     const apiUrl = `${API_URL}/animals/`;
//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Token ${localStorage.getItem('accessToken')}`,
//             },
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             if (errorData && errorData.response) {
//                 alert(`Error del servidor: ${errorData.response}`);
//             } else {
//                 alert('Error en la solicitud al servidor.');
//             }
//             return;
//         }
//         // Si la respuesta es exitosa
//         const responseData = await response.json();
//         console.log(JSON.stringify(responseData, null, 2));
//         notify({
//             title: 'Animal creado exitosamente🎉',
//             type: 'success',
//         });
//     } catch (error) {
//         console.error('Error al realizar la solicitud:', error);
//     }
// };

export const getAnimals = async () => {
    const response = (await service.get('animals/')) as TAnimalPayload[];
    return adaptAnimals(response);
};

export const getAnimal = async (id: string) => {
    const response = (await service.get(`animals/${id}/`)) as TAnimalPayload;
    return adaptAnimal(response);
};

export const searchAnimals = async (name: string) => {
    const response = (await service.get(`animals/search/?by=${name}`)) as TAnimalPayload[];
    return adaptAnimals(response);
};

export const getSpecies = async (): Promise<TOption[]> => {
    const response = (await service.get('animal-species/')) as TAOption[];
    return response.map((specie: TAOption) => ({ text: specie.name, value: specie.id }));
};

export const getRaces = async (specieId: string): Promise<TOption[]> => {
    const response = (await service.get(`animal-specie-races/${specieId}`)) as TAOption[];
    return response.map((race: TAOption) => ({ text: race.name, value: race.id }));
};


export const updateAnimal = async (id: string, data: Record<string, string>) => {
    const apiUrl = `${API_URL}/animals/${id}/`;
    try {
        const response = await fetch(apiUrl, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
        });

        if (!response.ok) {
            
            const errorData = await response.json();
            if (errorData && typeof errorData === 'object') {
                const firstKey = Object.keys(errorData)[0];
                if (Array.isArray(errorData[firstKey]) && errorData[firstKey].length > 0) {
                    notify({
                        title: errorData[firstKey][0],
                        type: 'error',
                    });
                }
            }
            window.location.reload();
            return
        }

        const responseData = await response.json();
        notify({
            title: 'Animal actualizado exitosamente🎉',
            type: 'success',
        });

        return adaptAnimal(responseData);
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};
