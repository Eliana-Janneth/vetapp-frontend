import { cva } from 'class-variance-authority';

export const backgroundChat = cva(
    [
        'flex flex-col scroll-style h-full w-full overflow-y-auto',
    ],
    {
        variants: {
            intent: {
                farmer: [
                    'bg-emerald-700 ',
                ],
                veterinarian: [
                    'bg-sky-700',
                ],
                base: [
                    'bg-indigo-700 ',
                ],
            },
        },
    },
);