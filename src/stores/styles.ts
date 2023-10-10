import { defineStore } from 'pinia';

type InputClass = Record<string, string>;
type LabelClass = Record<string, string>;
type ButtonStyle = Record<string, string>;
type TabButtonStyle = Record<string, string>;

type StyleState = {
    role: string;

    InputClass: InputClass;
    LabelClass: LabelClass;
    ButtonStyle: ButtonStyle;
    TabButtonStyle: TabButtonStyle;
};

export const useStyleStore = defineStore({
    id: 'style',
    state: (): StyleState => ({
        role: '',
        InputClass: {
            farmer: 'border-emerald-400/50 bg-emerald-50/80 placeholder:text-emerald-600/40 focus:border-emerald-500 focus:ring-emerald-500',
            veterinarian:
                'border-sky-400/50 bg-sky-50/80 placeholder:text-sky-600 focus:border-sky-500 focus:ring-sky-500',
            base: 'border-indigo-400 bg-indigo-100 placeholder:text-indigo-600 focus:border-indigo-500 focus:ring-indigo-500',
        },
        LabelClass: {
            farmer: 'text-emerald-700',
            veterinarian: 'text-sky-700',
            base: 'text-indigo-700',
        },
        ButtonStyle: {
            farmer: 'flex w-48justify-center rounded-md p-2 text-lg text-white/70 hover:bg-gradient-to-r hover:text-white focus:outline-none bg-emerald-600 hover:from-emerald-800 hover:via-emerald-600 hover:to-emerald-800 focus:ring-emerald-500 active:from-emerald-600 active:via-emerald-800 active:to-emerald-600 active:text-emerald-200',
            veterinarian:
                'flex  w-48 justify-center rounded-md p-2 text-lg text-white/70 hover:bg-gradient-to-r hover:text-white focus:outline-none bg-sky-600 hover:from-sky-800 hover:via-sky-600 hover:to-sky-800 focus:ring-sky-500 active:from-sky-600 active:via-sky-800 active:to-sky-600 active:text-sky-200',
            base: 'flex  w-48 justify-center rounded-md p-2 text-lg text-white/70 hover:bg-gradient-to-r hover:text-white focus:outline-none bg-indigo-600  hover:from-indigo-800 hover:via-indigo-600 hover:to-indigo-800 focus:ring-indigo-500 active:from-indigo-600 active:via-indigo-800 active:to-indigo-600 active:text-indigo-200',
        },
        TabButtonStyle: {
            farmer: 'text-emerald-800 hover:bg-emerald-100/70 border-emerald-600',
            veterinarian: 'text-sky-800 hover:bg-sky-100/70 border-sky-600',
        }
    }),
    getters: {
        getLabelStyle: (state) => {
            const role = state.role;
            return state.LabelClass[role] || '';
        },
        getInputStyle: (state) => {
            const role = state.role;
            return state.InputClass[role] || '';
        },
        getButtonStyle: (state) => {
            const role = state.role;
            return state.ButtonStyle[role] || '';
        },
        getTabButtonStyle: (state) => {
            const role = state.role;
            return state.TabButtonStyle[role] || '';
        }
    },
});
