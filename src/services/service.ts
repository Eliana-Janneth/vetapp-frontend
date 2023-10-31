const API_URL = import.meta.env.VITE_API_URL;

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
    post: (url: string, data: unknown): unknown => {
        try {
            return fetch(`${API_URL}/${url}/`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('accessToken')}`,
                },
            });
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    },
};
