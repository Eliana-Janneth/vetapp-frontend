export function guestGuard() {
    const token = localStorage.getItem('accessToken');
    if (token) return { name: 'home' };
}

export function authGuard() {
    const token = localStorage.getItem('accessToken');
    if (!token) return { name: 'login' };
}
