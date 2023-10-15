import { useRouter } from 'vue-router';

// middleware.ts;
const router = useRouter();

export function isAuthenticated(to: any, from: any, next: Function) {
    const token = localStorage.getItem('token');

    if (token) {
       router.push({ name: 'home' });
    } else {
        router.push({ name: 'login' });
    }
}
