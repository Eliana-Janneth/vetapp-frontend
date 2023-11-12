export type TChat = {
    id: number;
    userName: string;
    animal: string;
    specie: string;
    messages: TMessage[] | null;
};

 export type TMessage = {
    id: number,
    sender: string,
    role: string,
    message: string,
    date: string,
    file: null,
};

export type TChatMsg = string | { data: string; format: string }