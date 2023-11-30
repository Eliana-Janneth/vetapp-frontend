import { cva } from 'class-variance-authority';

export const input = cva(
    ['block w-full rounded-lg border py-2 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm'],
    {
        variants: {
            intent: {
                farmer: [
                    'border-emerald-400/50 bg-emerald-50/80 placeholder:text-emerald-600/40 focus:border-emerald-500 focus:ring-emerald-500',
                ],
                veterinarian: [
                    'border-sky-400/50 bg-sky-50/80 placeholder:text-sky-600/40 focus:border-sky-500 focus:ring-sky-500',
                ],
                base: [
                    'border-indigo-400 bg-indigo-100 placeholder:text-indigo-600 focus:border-indigo-500 focus:ring-indigo-500',
                ],
            },
        },
    },
);

export const alert = cva(['rounded-md px-2 text-sm'], {
    variants: {
        intent: {
            farmer: ['bg-emerald-200/50 text-emerald-900'],
            veterinarian: ['bg-sky-200/50 text-sky-900'],
            base: ['bg-indigo-200/50 text-indigo-900'],
        },
    },
});

export const label = cva([], {
    variants: {
        intent: {
            farmer: ['text-emerald-700'],
            veterinarian: ['text-sky-700'],
            base: ['text-indigo-700'],
        },
    },
});

export const icon = cva([], {
    variants: {
        intent: {
            farmer: ['text-emerald-500'],
            veterinarian: ['text-sky-500'],
            base: ['text-indigo-500'],
        },
    },
});

export const selectLanguaje = cva(
    [
        'block w-28 appearance-none rounded-lg border-none py-1 leading-tight text-white/80 focus:outline-none',
    ],
    {
        variants: {
            intent: {
                farmer: [
                    'bg-emerald-500 active:border-emerald-200 hover:bg-emerald-600',
                ],
                veterinarian: [
                    'bg-sky-500 active:border-sky-200 hover:bg-sky-600',
                ],
                base: [
                    'bg-indigo-600 active:border-indigo-200 hover:bg-indigo-700 py-2',
                ],
            },
        },
    },
);
