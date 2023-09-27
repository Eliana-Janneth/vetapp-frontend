import { TRegisterPayload } from "./types";

export const register = async (data: TRegisterPayload) => {
    const farmerUrl = 'http://127.0.0.1:9999/farmers/';
    const vetUrl = 'http://127.0.0.1:9999/vets/';

    const response = await fetch(data.profile === 'farmer' ? farmerUrl : vetUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);

        if (response.status === 400) {
            alert(response.message);
        }
        
    return response;
}
