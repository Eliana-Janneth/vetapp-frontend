import './styles/main.css';
import { createApp } from 'vue';
import { router } from './router';
import { createPinia } from 'pinia';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';
import { createI18n } from 'vue-i18n';
import { es, en } from './lang';

const i18n = createI18n({
    locale: import.meta.env.VITE_I18N_LOCALE || 'en',
    fallbackLocale: 'en',
    availableLocales: ['es', 'en'],
    messages: { es, en },
});

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(i18n);
app.use(Notifications);
app.mount('#app');
