import './style.css';
import { createApp } from 'vue';
import { router } from './router';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(Notifications);
