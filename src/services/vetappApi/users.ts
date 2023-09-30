import { notify } from "@kyvg/vue3-notification";
import { TRegisterPayload } from "./types";

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

export const logout = async () => {


    try {
        console.log('Antes de la solicitud de logout');
        const response = await fetch(`${API_URL}/api/auth/logout/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('accessToken')}`
            },
        });

        const data = await response.json();
        console.log('Respuesta de logout:', data);
        localStorage.removeItem('accessToken');

        return data;
    } catch (error) {
        console.error('Error al realizar la solicitud de logout:', error);
        throw error;
    }
};


