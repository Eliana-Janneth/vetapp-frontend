export function guestGuard() {
    const token = localStorage.getItem('accessToken');
    if (token) {
        const user = localStorage.getItem('user');
        const role = JSON.parse(user!).role;
        if (role === 'farmer') return { name: 'animals.index' };
        return { name: 'patients.index' };
    }
}

export function authGuard() {
    const token = localStorage.getItem('accessToken');
    if (!token) return { name: 'login' };
}
