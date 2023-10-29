import type { TDiagnosisPayload } from './types';
import { notify } from '@kyvg/vue3-notification';

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

export const getDiagnosisVet = async (id: string) => {
    try {
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
export const getDiagnosisFarmer = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/farmer-medical-historys/${id}/`, {
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

export const updateDiagnosis = async (idAnimal: string, idMedicalHistory:string, data: Record<string, string>) => {
    const apiUrl = `${API_URL}/vet-medical-historys/${idAnimal}/${idMedicalHistory}/`;
    try {
        console.log("datos",data);
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
            if (errorData && errorData.response) {
                alert(`Error del servidor: ${errorData.response}`);
            } else {
                alert('Error en la solicitud al servidor.');
            }
            return;
        }
        const responseData = await response.json();
        notify({
            title: "Historial Médico actualizado exitosamente🎉",
            type: 'success'
        });        return responseData;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
}
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