// import { defineStore } from 'pinia';

// type AvatarState = {
//     name: string;
//     role: 'farmer' | 'vet';

// };

// export const useAvatarStore = defineStore('avatar', {
//     state: (): AvatarState => ({
//         name: '',
//         role: 'farmer',
//     }),
//     getters: {
//         getAvatar: (state) => (name: string, role: 'farmer' | 'vet') => {
//             const url = new URL('https://ui-avatars.com/api/');
//             url.searchParams.append('name', name);
//             url.searchParams.append('background',role === 'farmer' ? '#a7f3d0' : '#bae6fd');
//             url.searchParams.append('color', role === 'farmer' ? '#059669' : '#0284c7');
//             url.searchParams.append('bold', 'true');
//             url.searchParams.append('uppercase', 'true');
//             return url.href;
//         },
     
//     },
// });
