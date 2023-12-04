export const createAvatar = (name: string, role: 'farmer' | 'vet') => {
    const url = new URL('https://ui-avatars.com/api/');
    const colors = {
        farmer: {
            background: '#a7f3d0',
            color: '#059669',
        },
        vet: {
            background: '#bae6fd',
            color: '#0284c7',
        },
    };

    url.searchParams.append('name', name);
    url.searchParams.append('background', colors[role].background);
    url.searchParams.append('color', colors[role].color);
    url.searchParams.append('bold', 'true');
    url.searchParams.append('uppercase', 'true');
    return url.href;
};
