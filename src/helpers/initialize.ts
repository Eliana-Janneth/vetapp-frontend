import { useUserStore, useStyleStore } from '@/stores';
import { useI18n } from 'vue-i18n';

export const initialize = async () => {
    const browserLang = window.navigator.language.substring(0, 2) as 'es' | 'en';
    const { locale } = useI18n();
    locale.value = browserLang;

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
