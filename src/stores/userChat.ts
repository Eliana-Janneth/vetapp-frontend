import { defineStore } from 'pinia';

type UserState = {
    name: string;
    role: 'farmer' | 'vet';
    animal:string;
};

export const useChatUserStore = defineStore('user', {
    state: (): UserState => ({
        name: '',
        role: 'farmer',
        animal:'',
    }),
    getters: {
        getAvatar(): string {
            const url = new URL('https://ui-avatars.com/api/');
            url.searchParams.append('name', this.name);
            url.searchParams.append('background', this.role === 'farmer' ? '#a7f3d0' : '#bae6fd');
            url.searchParams.append('color', this.role === 'farmer' ? '#059669' : '#0284c7');
            url.searchParams.append('bold', 'true');
            url.searchParams.append('uppercase', 'true');
            return url.href;
        },
        getUser(): string {
            return this.name, this.role, this.animal;

        }
        
    },
    actions: {
        create(user:string, role:'farmer' | 'vet', animal:string) {
            this.name = user;
            this.role = role;
            this.animal = animal;
        },
    },
});
