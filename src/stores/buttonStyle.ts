import { cva } from 'class-variance-authority';

export const button = cva(
    [
        'rounded-xl px-2 py-2 flex w-48 justify-center rounded-md text-lg text-white/70 hover:text-white focus:outline-none',
    ],
    {
        variants: {
            intent: {
                farmer: [
                    'bg-emerald-600 hover:bg-gradient-to-r hover:from-emerald-800 hover:via-emerald-600 hover:to-emerald-800 focus:ring-emerald-500 active:from-emerald-600 active:via-emerald-800 active:to-emerald-600 active:text-emerald-200',
                ],
                veterinarian: [
                    'bg-sky-600 hover:bg-gradient-to-r hover:from-sky-800 hover:via-sky-600 hover:to-sky-800 focus:ring-sky-500 active:from-sky-600 active:via-sky-800 active:to-sky-600 active:text-sky-200',
                ],
                base: [
                    'bg-indigo-600  hover:bg-gradient-to-r hover:from-indigo-800 hover:via-indigo-600 hover:to-indigo-800 focus:ring-indigo-500 active:from-indigo-600 active:via-indigo-800 active:to-indigo-600 active:text-indigo-200',
                ],
            },
        },
    },
);
export const buttonTab = cva(['w-1/3 px-4 py-2 text-center text-lg font-medium  focus:outline-none'], {
    variants: {
        intent: {
            farmer: ['text-emerald-800 hover:bg-emerald-100/70 border-emerald-600'],
            veterinarian: ['text-sky-800 hover:bg-sky-100/70 border-sky-600'],
            base:[''],
        },
    },
});
