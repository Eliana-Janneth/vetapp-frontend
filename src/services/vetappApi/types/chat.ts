export type TChatPayload = {
    id: number;
    name: string;
    animal_name: string;
    animal_specie: string;
};

export type TMessagePayload = {
    id: number,
    sender_name: string,
    sender_role: string,
    message: string,
    date_sent: string,
    file: string,
    has_file: boolean,
};