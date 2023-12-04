const API_URL = import.meta.env.VITE_API_URL;
import { notify } from '@kyvg/vue3-notification';

export const service = {
    get: async (url: string): Promise<unknown> => {
        try {
            const response = await fetch(`${API_URL}/${url}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('accessToken')}`,
                },
            });

            const responseData = await response.json();

            if (!response.ok) {
                if (responseData && responseData.response) {
                    console.error(`Error del servidor: ${responseData.response}`);
                } else {
                    console.error('Error en la solicitud al servidor.');
                }
                return;
            }

            return responseData;
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    },
    post: async (url: string, data: unknown): Promise<unknown> => {
        try {
            const response = await fetch(`${API_URL}/${url}/`, {
                method: 'POST',
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
                if (errorData && errorData.response) {
                    notify({
                        title: errorData.response,
                        type: 'error',
                    });
                }
                return;
            }

            const responseData = await response.json();
            console.log(JSON.stringify(responseData, null, 2));
            notify({
                title: 'Creado exitosamente 🎉',
                type: 'success',
            });
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    },
};
