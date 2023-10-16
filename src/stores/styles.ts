import { defineStore } from 'pinia';
import { button, buttonTab } from './buttonStyle';
import { input, alert, label, icon } from './inputsStyle';

type Role = 'farmer' | 'veterinarian' | 'base';

type StyleState = {
    role: Role;
};

export const useStyleStore = defineStore({
    id: 'style',
    state: (): StyleState => ({
        role: 'base',
    }),

    getters: {
        getLabelStyle: (state) => label({intent: state.role}),
        getInputStyle: (state) => input({ intent: state.role }),
        getAlertStyle: (state) => alert({ intent: state.role }), 
        getButtonStyle: (state) => button({ intent: state.role }), 
        getTabButtonStyle: (state) => buttonTab({ intent: state.role }), 
        getIconStyle: (state) => icon({ intent: state.role }),
      },
    actions: {
        create(data: { token: string; user: { name: string; role: 'farmer' | 'veterinarian' } }) {
            this.role = data.user.role;
            if (data.user.role === null) this.role = 'base';
        },
    },
});
