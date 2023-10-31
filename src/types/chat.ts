export type TChat = {
    id: number;
    userName: string;
    animal: string;
    specie: string;
};

 export type TMessage = {
    id: number,
    sender: string,
    role: string,
    message: string,
    date: string,
    file: null,
};