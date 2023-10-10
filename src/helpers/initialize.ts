import { useUserStore, useStyleStore } from '@/stores';

export const initialize = async () => {
    console.log('initialize');
    const rawUser = localStorage.getItem('user');
    if (rawUser) {
        const userStore = useUserStore();
        const styleStore = useStyleStore();
        const user = JSON.parse(rawUser);
        userStore.name = user.name;
        userStore.role = user.role;
        styleStore.role = user.role;
        userStore.token = localStorage.getItem('accessToken');
    }
};
