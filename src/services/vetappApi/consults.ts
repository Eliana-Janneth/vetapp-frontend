
const API_URL = import.meta.env.VITE_API_URL;

export const getAnimalAuthorized = async () => {
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