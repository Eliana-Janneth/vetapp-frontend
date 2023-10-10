import { notify } from '@kyvg/vue3-notification';
import { TRegisterPayload, TLoginPayload, TAcademicInformationPayload, TWorkExperiencePayload } from './types';

const API_URL = import.meta.env.VITE_API_URL;

export const register = async (data: TRegisterPayload) => {
    const farmerUrl = `${API_URL}/farmers/`;
    const vetUrl = `${API_URL}/vets/`;

    const response = await fetch(data.profile === 'farmer' ? farmerUrl : vetUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);

    if (response.status === 400) {
        alert(response.message);
        notify({
            title: 'Authorization',
            text: 'You have been logged in!',
        });
    } else if (response.status === 201) {
        alert(response.message);
    } else {
        // alert(response.message);
        notify({
            title: 'Authorization',
            text: 'You have been logged in!',
        });
    }

    return response;
};
export const login = async (data: TLoginPayload) => {
    const apiUrl = `${API_URL}/auth/login/`;
    console.log(JSON.stringify(data, null, 2));
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
            if (errorData && errorData.response) {
                alert(`Error del servidor: ${errorData.response}`);
            } else {
                alert('Error en la solicitud al servidor.');
            }
            return;
        }
        // Si la respuesta es exitosa
        const responseData = await response.json();

        // Guardar el token en localStorage
        localStorage.setItem('accessToken', responseData.token);
        localStorage.setItem('user', JSON.stringify(responseData.user));
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};

export const logout = async () => {
    try {
        console.log('Antes de la solicitud de logout');
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
    const apiUrl = `${API_URL}/userinfo/`;
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
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
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};

export const createAcademicInformation = async (data: TAcademicInformationPayload) => {
    const apiUrl = `${API_URL}/vet-academic-information/`;
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
export const createWorkExperiencie = async (data: TWorkExperiencePayload) => {
    const apiUrl = `${API_URL}/vet-work-experience/`;
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

export const getAcademicInformation = async () => {
    const apiUrl = `${API_URL}/vet-academic-information/`;
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
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
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};

export const getWorkExperience = async () => {
    const apiUrl = `${API_URL}/vet-work-experience/`;
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
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
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};
