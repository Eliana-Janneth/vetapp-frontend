import { defineStore } from 'pinia';

type UserState = {
    name: string;
    role: 'farmer' | 'vet';
    token: string | null;
};

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        name: '',
        role: 'farmer',
        token: '',
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
        isFarmer(): boolean {
            return this.role === 'farmer';
        },
        isVet(): boolean {
            return this.role === 'vet';
        },
    },
    actions: {
        create(data: { token: string; user: { name: string; role: string } }) {
            this.name = data.user.name;
            this.role = data.user.role === 'farmer' ? 'farmer' : 'vet';
            this.token = data.token;

            localStorage.setItem('accessToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        },
    },
});
