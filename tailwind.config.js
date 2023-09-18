/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Catamaran', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'base', // only generate global styles
            strategy: 'class', // only generate classes
        }),
    ],
};
