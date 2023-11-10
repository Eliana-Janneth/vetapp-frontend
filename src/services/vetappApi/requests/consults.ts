import type { TAnimalAuthorizedPayload, TDiagnosisPayload, TDiagnosisCreatePayload} from '../types';
import { service } from '../../service';
import { adaptAnimalAuthorized, adaptAnimalsAuthorized, adaptDiagnosis } from '../adapters/consults';
import { notify } from '@kyvg/vue3-notification';

const API_URL = import.meta.env.VITE_API_URL;

export const getAnimalsAuthorized = async () => {
    const response = (await service.get('authorized-animals/')) as TAnimalAuthorizedPayload[];
    return adaptAnimalsAuthorized(response);
}

export const getAnimalAuthorized = async (id: string) => {
    const response = (await service.get(`vet-animal-info/${id}/`)) as TAnimalAuthorizedPayload;
    return adaptAnimalAuthorized(response);
}

export const searchAnimalsAuthorized = async (name: string) => {
    const response = (await service.get(`authorized-animals/search/?by=${name}`)) as TAnimalAuthorizedPayload[];
    return adaptAnimalsAuthorized(response);
};

export const createDiagnosis = async (data: TDiagnosisCreatePayload, id: string) => {
    await service.post(`vet-medical-historys/${id}`, data);
    window.location.reload();
}

export const getDiagnosisVet = async (id: string) => {
    const response = (await service.get(`vet-medical-historys/${id}/`)) as TDiagnosisPayload[];
    return adaptDiagnosis(response);
};


export const getDiagnosisFarmer = async (id: string) => {
    const response = (await service.get('farmer-medical-historys/' + id+'/')) as TDiagnosisPayload[];
    return adaptDiagnosis(response);
};


export const updateDiagnosis = async (idAnimal: string, idMedicalHistory: string, data: Record<string, string>) => {
    const apiUrl = `${API_URL}/vet-medical-historys/${idAnimal}/${idMedicalHistory}/`;
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
            title: 'Historial Médico actualizado exitosamente🎉',
            type: 'success',
        });

        return responseData;

    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};
export const downloadMedicalHistoryFarmer = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/animal-medical-historys/${id}/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
        });
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos');
        }
        const blob = await response.blob();
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.setAttribute('download', 'historial_medico.pdf');
        downloadLink.click();
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
};
