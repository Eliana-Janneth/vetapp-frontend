import { notify } from '@kyvg/vue3-notification';
import {
    TRegisterPayload,
    TLoginPayload,
    TAcademicInformationPayload,
    TWorkExperiencePayload,
    TVetInformationPayload,
    TUpdateVetInformationPayload,
} from '../types';
import { useUserStore, useStyleStore } from '@/stores';
import { adaptAcademicInformation, adaptVetInformation, adaptWorkExperience } from '../adapters';
import { service } from '@/services/service';

const API_URL = import.meta.env.VITE_API_URL;

export const register = async (data: TRegisterPayload) => {
    const farmerUrl = `${API_URL}/farmers/`;
    const vetUrl = `${API_URL}/vets/`;
    try {
        const response = await fetch(data.profile === 'farmer' ? farmerUrl : vetUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            if (errorData && errorData.response) {
                notify({
                    title: errorData.response,
                    type: 'error',
                });
            }
            return { error: errorData.response };
        }

        const responseData = await response.json();
        notify({
            title: 'Te has registrado exitosamente 🎉',
            type: 'success',
        });

        return responseData;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};
export const login = async (data: TLoginPayload) => {
    const apiUrl = `${API_URL}/auth/login/`;
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            if (errorData && errorData.non_field_errors) {
                notify({
                    title: 'Error en las credenciales',
                    type: 'error',
                });
            }
            return errorData;
        }
        // Si la respuesta es exitosa
        const responseData = await response.json();
        const userStore = useUserStore();
        const styleStore = useStyleStore();
        userStore.create(responseData);
        styleStore.role = responseData.user.role;
        notify({
            title: 'Usuario Logueado exitosamente🎉',
            type: 'success',
        });
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};

export const logout = async () => {
    try {
        await fetch(`${API_URL}/api/auth/logout/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('accessToken')}`,
            },
        });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
    } catch (error) {
        console.error('Error al realizar la solicitud de logout:', error);
        throw error;
    }
};

export const getUser = async () => {
    const response = await service.get(`userinfo/`);
    return response;
};

export const createAcademicInformation = async (data: TAcademicInformationPayload) => {
    await service.post('vet-academic-information', data);
};

export const createWorkExperiencie = async (data: TWorkExperiencePayload) => {
    await service.post('vet-work-experience', data);
};

export const getAcademicInformation = async () => {
    const response = (await service.get('vet-academic-information/')) as TAcademicInformationPayload[];
    return adaptAcademicInformation(response);
};

export const getWorkExperience = async () => {
    const response = (await service.get('vet-work-experience/')) as TWorkExperiencePayload[];
    return adaptWorkExperience(response);
};

export const getAcademicInformationVet = async (id: string) => {
    const response = (await service.get(`vet-academic-information/${id}/`)) as TAcademicInformationPayload[];
    return adaptAcademicInformation(response);
};

export const getWorkExperienceVet = async (id: string) => {
    const response = (await service.get(`vet-work_experience/${id}/`)) as TWorkExperiencePayload[];
    return adaptWorkExperience(response);
};

export const getVetInformation = async (id: string) => {
    const response = (await service.get(`vets/${id}/`)) as TVetInformationPayload;
    return adaptVetInformation(response);
};

export const updateAvailability = async (data: Record<string, boolean>) => {
    const apiUrl = `${API_URL}/vet-availability/`;
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
            if (errorData?.response) {
                alert(`Error del servidor: ${errorData.response}`);
            } else {
                alert('Error en la solicitud al servidor.');
            }
            return;
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};

export const updateVetInformation = async (data: TUpdateVetInformationPayload) => {
    const apiUrl = `${API_URL}/vets/auth/`;
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
            if (errorData?.response) {
                notify({
                    title: errorData.response,
                    type: 'error',
                });
            }
            return errorData;
        }
        const responseData = await response.json();
        notify({
            title: 'Credenciales creadas correctamente🎉',
            type: 'success',
        });
        return responseData;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};
