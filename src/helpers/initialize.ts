import { useUserStore, useStyleStore } from '@/stores';

export const initialize = async () => {
    console.log('initialize');
    const rawUser = localStorage.getItem('user');
    if (rawUser) {
        const token = localStorage.getItem('accessToken') as string;
        const userStore = useUserStore();
        const styleStore = useStyleStore();
        const user = JSON.parse(rawUser);
        userStore.create({ token, user });

        styleStore.role = user.role;
    }
};
