import { defineStore } from 'pinia';

type InputClass = Record<string, string>;
type LabelClass = Record<string, string>;

type StyleState = {
    InputClass: InputClass;
    LabelClass: LabelClass;
};

export const useStyleStore = defineStore({
    id: 'style',
    state: (): StyleState => ({
        InputClass: {
            farmer: 'border-emerald-400/50 bg-emerald-50/80 placeholder:text-emerald-600/40 focus:border-emerald-500 focus:ring-emerald-500',
            vet: 'border-sky-400/50 bg-sky-50/80 placeholder:text-sky-600 focus:border-sky-500 focus:ring-sky-500',
            base: 'border-indigo-400 bg-indigo-100 placeholder:text-indigo-600 focus:border-indigo-500 focus:ring-indigo-500',
        },
        LabelClass: {
            farmer: 'text-emerald-700',
            vet: 'text-sky-700',
            base: 'text-indigo-700',
        },
    }),
    getters: {
        getInputClassForProfile:
            (state) =>
            (profile: string): string => {
                return state.InputClass[profile] || '';
            },
        getLabelClassForProfile:
            (state) =>
            (profile: string): string => {
                return state.LabelClass[profile] || '';
            },
    },
});
