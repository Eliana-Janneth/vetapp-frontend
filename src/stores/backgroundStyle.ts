import { cva } from 'class-variance-authority';

export const backgroundChat = cva(
    [
        'flex flex-col scroll-style h-full w-full overflow-y-auto',
    ],
    {
        variants: {
            intent: {
                farmer: [
                    'bg-emerald-800 ',
                ],
                veterinarian: [
                    'bg-sky-800',
                ],
                base: [
                    'bg-indigo-800 ',
                ],
            },
        },
    },
);